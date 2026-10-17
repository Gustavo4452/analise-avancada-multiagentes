"use strict";

const BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const INTEIRO = new Intl.NumberFormat("pt-BR");
const MESES = new Intl.DateTimeFormat("pt-BR", { month: "short", timeZone: "UTC" });
const $ = (id) => document.getElementById(id);
let registrosExibidos = [];
let redimensionamentoAgendado = false;

function moeda(centavos) {
  return BRL.format(centavos / 100);
}

function preencherFiltro(seletor, valores) {
  const controle = $(seletor);
  for (const valor of valores) {
    const opcao = document.createElement("option");
    opcao.value = valor;
    opcao.textContent = valor;
    controle.append(opcao);
  }
}

function elementoSvg(nome, atributos = {}) {
  const item = document.createElementNS("http://www.w3.org/2000/svg", nome);
  for (const [chave, valor] of Object.entries(atributos)) item.setAttribute(chave, String(valor));
  return item;
}

function textoSvg(svg, texto, x, y, classe, ancora = "middle") {
  const elemento = elementoSvg("text", { x, y, class: classe, "text-anchor": ancora });
  elemento.textContent = texto;
  svg.append(elemento);
}

function prepararSvg(container, descricao, largura, altura) {
  const svg = elementoSvg("svg", {
    viewBox: `0 0 ${largura} ${altura}`,
    width: largura,
    height: altura,
    role: "presentation",
    focusable: "false",
  });
  const tituloId = container.id === "grafico-categorias" ? "titulo-categorias-a11y" : "titulo-mensal-a11y";
  let titulo = container.querySelector(`#${tituloId}`);
  if (!titulo) {
    titulo = document.createElement("span");
    titulo.id = tituloId;
    titulo.className = "visualmente-oculto";
    titulo.textContent = container.id === "grafico-categorias"
      ? "Gráfico de barras: valor vendido por categoria"
      : "Gráfico de linha: valor vendido por mês";
  }
  container.replaceChildren(titulo);
  container.append(svg);
  container.setAttribute("aria-label", descricao);
  return svg;
}

function medidasDoGrafico(container) {
  const largura = Math.max(220, Math.round(container.getBoundingClientRect().width || 320));
  return { largura, compacto: largura < 420 };
}

function rotuloDeEixo(centavos, compacto) {
  const reais = centavos / 100;
  if (compacto && Math.abs(reais) >= 1000) {
    const milhares = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(reais / 1000);
    return `R$ ${milhares} mil`;
  }
  return compacto ? `R$ ${INTEIRO.format(Math.round(reais))}` : moeda(centavos);
}

function mostrarGraficosVazios() {
  for (const id of ["grafico-categorias", "grafico-mensal"]) {
    const container = $(id);
    container.replaceChildren();
    container.classList.add("grafico-vazio");
    container.textContent = "Sem dados para exibir com esta combinação de filtros.";
    container.setAttribute("aria-label", "Sem dados para exibir");
  }
}

function desenharCategorias(registros) {
  const totais = new Map();
  for (const registro of registros) {
    totais.set(registro.categoria, (totais.get(registro.categoria) || 0) + registro.valor_venda_centavos);
  }
  const itens = [...totais.entries()].sort((a, b) => b[1] - a[1]);
  const maximo = Math.max(1, ...itens.map((item) => item[1]));
  const container = $("grafico-categorias");
  const { largura, compacto } = medidasDoGrafico(container);
  const alturaSvg = 244;
  const svg = prepararSvg(container,
    `Valor bruto por categoria: ${itens.map(([nome, valor]) => `${nome}, ${moeda(valor)}`).join("; ")}`,
    largura, alturaSvg);
  container.classList.remove("grafico-vazio");

  if (compacto) {
    const topo = 8;
    const alturaLinha = 65;
    const xBarra = 5;
    const larguraMaxima = largura - 10;
    itens.forEach(([nome, valor], indice) => {
      const y = topo + indice * alturaLinha;
      textoSvg(svg, nome, xBarra, y + 14, "eixo", "start");
      textoSvg(svg, moeda(valor), largura - xBarra, y + 14, "rotulo-valor", "end");
      svg.append(elementoSvg("rect", {
        x: xBarra,
        y: y + 24,
        width: Math.max(2, (valor / maximo) * larguraMaxima),
        height: 13,
        rx: 4,
        class: "barra",
      }));
    });
    textoSvg(svg, "Valor bruto vendido (R$)", xBarra, alturaSvg - 8, "eixo", "start");
  } else {
    const esquerda = 126;
    const reservaValor = 96;
    const larguraMaxima = Math.max(80, largura - esquerda - reservaValor - 8);
    const topo = 27;
    const alturaLinha = 52;
    itens.forEach(([nome, valor], indice) => {
      const y = topo + indice * alturaLinha;
      const larguraBarra = Math.max(2, (valor / maximo) * larguraMaxima);
      textoSvg(svg, nome, esquerda - 10, y + 18, "eixo", "end");
      svg.append(elementoSvg("rect", {
        x: esquerda, y, width: larguraBarra, height: 23, rx: 4, class: "barra",
      }));
      textoSvg(svg, moeda(valor), esquerda + larguraBarra + 7, y + 17, "rotulo-valor", "start");
    });
    const base = topo + itens.length * alturaLinha + 3;
    svg.append(elementoSvg("line", {
      x1: esquerda, y1: base, x2: esquerda + larguraMaxima, y2: base, class: "grade",
    }));
    textoSvg(svg, "Valor bruto vendido (R$)", esquerda, alturaSvg - 8, "eixo", "start");
  }
  $("descricao-categorias").textContent = itens.map(([nome, valor]) => `${nome}: ${moeda(valor)}`).join(" · ");
}

function desenharMensal(registros) {
  const totais = new Map();
  for (const registro of registros) {
    const mes = registro.data.slice(0, 7);
    totais.set(mes, (totais.get(mes) || 0) + registro.valor_venda_centavos);
  }
  const itens = [...totais.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  const maximo = Math.max(1, ...itens.map((item) => item[1]));
  const container = $("grafico-mensal");
  const { largura, compacto } = medidasDoGrafico(container);
  const alturaSvg = 270;
  const svg = prepararSvg(container,
    `Valor bruto por mês: ${itens.map(([mes, valor]) => `${mes}, ${moeda(valor)}`).join("; ")}`,
    largura, alturaSvg);
  container.classList.remove("grafico-vazio");
  const x0 = compacto ? 72 : 94;
  const x1 = largura - (compacto ? 14 : 18);
  const y0 = 211;
  const y1 = 39;
  const pontos = itens.map(([mes, valor], indice) => ({
    mes,
    valor,
    x: itens.length === 1 ? (x0 + x1) / 2 : x0 + (indice / (itens.length - 1)) * (x1 - x0),
    y: y0 - (valor / maximo) * (y0 - y1),
  }));
  [0, 0.5, 1].forEach((fracao) => {
    const y = y0 - fracao * (y0 - y1);
    svg.append(elementoSvg("line", { x1: x0, y1: y, x2: x1, y2: y, class: "grade" }));
    textoSvg(svg, rotuloDeEixo(maximo * fracao, compacto), x0 - 8, y + 4, "eixo", "end");
  });
  svg.append(elementoSvg("polyline", {
    points: pontos.map((ponto) => `${ponto.x},${ponto.y}`).join(" "), class: "linha",
  }));
  pontos.forEach((ponto, indice) => {
    svg.append(elementoSvg("circle", { cx: ponto.x, cy: ponto.y, r: 6, class: "ponto" }));
    let ancora = "middle";
    let xRotulo = ponto.x;
    if (pontos.length > 1 && indice === 0) {
      ancora = "start";
      xRotulo += 4;
    } else if (pontos.length > 1 && indice === pontos.length - 1) {
      ancora = "end";
      xRotulo -= 4;
    }
    const yRotulo = compacto && pontos.length === 3 && indice === 1
      ? Math.min(y0 - 17, ponto.y + 22)
      : Math.max(y1 - 12, ponto.y - 14);
    textoSvg(svg, moeda(ponto.valor), xRotulo, yRotulo, "rotulo-valor", ancora);
    textoSvg(svg, MESES.format(new Date(`${ponto.mes}-01T00:00:00Z`)), ponto.x, 253, "eixo");
  });
  $("descricao-mensal").textContent = itens.map(([mes, valor]) => `${mes}: ${moeda(valor)}`).join(" · ");
}

function adicionarCelula(linha, valor, classe = "") {
  const celula = document.createElement("td");
  if (classe) celula.className = classe;
  celula.textContent = valor;
  linha.append(celula);
}

function atualizar(registros) {
  const cidade = $("filtro-cidade").value;
  const categoria = $("filtro-categoria").value;
  const filtrados = registros.filter((registro) =>
    (!cidade || registro.cidade === cidade) && (!categoria || registro.categoria === categoria));
  registrosExibidos = filtrados;
  const totalCentavos = filtrados.reduce((soma, registro) => soma + registro.valor_venda_centavos, 0);
  $("indicador-total").textContent = moeda(totalCentavos);
  $("indicador-vendas").textContent = INTEIRO.format(filtrados.length);
  $("indicador-ticket").textContent = moeda(filtrados.length ? Math.round(totalCentavos / filtrados.length) : 0);
  $("contagem-registros").textContent = `${INTEIRO.format(filtrados.length)} ${filtrados.length === 1 ? "transação" : "transações"}`;
  $("contagem-tabela").textContent = `${INTEIRO.format(filtrados.length)} ${filtrados.length === 1 ? "linha" : "linhas"}`;
  $("estado-vazio").hidden = filtrados.length !== 0;
  $("envoltorio-tabela").hidden = filtrados.length === 0;
  const linhas = $("linhas-tabela");
  linhas.replaceChildren();
  for (const registro of filtrados) {
    const linha = document.createElement("tr");
    adicionarCelula(linha, new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(new Date(`${registro.data}T00:00:00Z`)));
    adicionarCelula(linha, registro.id_venda);
    adicionarCelula(linha, registro.cidade);
    adicionarCelula(linha, registro.categoria);
    adicionarCelula(linha, registro.produto);
    adicionarCelula(linha, INTEIRO.format(registro.quantidade), "numero");
    adicionarCelula(linha, moeda(registro.valor_venda_centavos), "numero");
    linhas.append(linha);
  }
  if (filtrados.length) {
    desenharCategorias(filtrados);
    desenharMensal(filtrados);
  } else {
    mostrarGraficosVazios();
  }
}

window.addEventListener("resize", () => {
  if (redimensionamentoAgendado || registrosExibidos.length === 0) return;
  redimensionamentoAgendado = true;
  window.requestAnimationFrame(() => {
    redimensionamentoAgendado = false;
    desenharCategorias(registrosExibidos);
    desenharMensal(registrosExibidos);
  });
});

async function iniciar() {
  const resposta = await fetch("dados/vendas.json");
  if (!resposta.ok) throw new Error(`Não foi possível carregar os dados (${resposta.status}).`);
  const registros = await resposta.json();
  if (!Array.isArray(registros)) throw new Error("Formato de dados inválido.");
  preencherFiltro("filtro-cidade", [...new Set(registros.map((item) => item.cidade))].sort());
  preencherFiltro("filtro-categoria", [...new Set(registros.map((item) => item.categoria))].sort());
  $("filtro-cidade").addEventListener("change", () => atualizar(registros));
  $("filtro-categoria").addEventListener("change", () => atualizar(registros));
  $("limpar-filtros").addEventListener("click", () => {
    $("filtro-cidade").value = "";
    $("filtro-categoria").value = "";
    atualizar(registros);
    $("filtro-cidade").focus();
  });
  atualizar(registros);
}

iniciar().catch((erro) => {
  console.error(erro);
  const estado = $("estado-vazio");
  estado.hidden = false;
  estado.textContent = "Não foi possível carregar os dados do dashboard. Execute a preparação dos dados e abra o site por um servidor HTTP local.";
  $("envoltorio-tabela").hidden = true;
});
