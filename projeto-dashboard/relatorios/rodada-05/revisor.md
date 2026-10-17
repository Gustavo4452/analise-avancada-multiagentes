# Relatório do Revisor — rodada 05

## Versão examinada

Workspace sem commit Git. O CSS examinado confere com o hash fornecido pelo Construtor e Tester. Os hashes restantes abaixo permanecem iguais à versão aprovada na rodada-04; a alteração de produto desta rodada está limitada ao CSS.

| Arquivo | SHA-256 |
|---|---|
| `projeto-dashboard/site/estilos.css` | `D3A32EA234FA6F230731EB839FDAFE945D6B057EFEED5B9C75B27369F60298B4` |
| `projeto-dashboard/README.md` | `1284E214AAE2A651670D6D8C81303BFD75BC72F0D4794DD09F61C27EB575646A` |
| `projeto-dashboard/preparar_dados.py` | `6E0E57B62505F752D3143B0E2E6DD04961F3388DDE7236DA195670C6B80CE8A4` |
| `projeto-dashboard/ANALISE.md` | `F5CFF52A48E32F63BE4B220CC2D5893673F4CC819842BA8B1996363ED4FC6EE3` |
| `projeto-dashboard/site/index.html` | `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` |
| `projeto-dashboard/site/metodologia.html` | `278C7047989B617299AB580366210EB9DBE511BF29D5AD93A50BA1D638442385` |
| `projeto-dashboard/site/dashboard.js` | `8502221917A87014FA11C814E93A1171980E0541CCF0F9CFEEC1277354BAA28A` |
| `projeto-dashboard/site/dados/vendas.json` | `5D2DD319DB0A2AFB23925F07F29C19E24C48918A35302D7526862F0E13779097` |
| `projeto-dashboard/site/dados/perfil.json` | `EC5BA37C22F037766EB8BF2B3E0D5B8A090FFC01EE68A3495A6C6DDC197CC899` |
| `projeto-dashboard/tests/test_dashboard.py` | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |
| `papelaria_limpa.csv` | `E25B6C2CDF05A6492F6495A91F9384565629F26E1318039F75734DCD9856995D` |
| `vendas_papelaria.csv` | `BF95B7609E30EB7E3E6A30CFC16E43D9FB5BDFC48A410E49148CCEB92E2494FF` |

## Checagens e evidências

- Li `relatorios/rodada-04/revisor.md`, `relatorios/rodada-05/construtor.md` e `relatorios/rodada-05/tester.md`. Os hashes informados conferem com os arquivos atuais. A rodada-04 continua válida para metodologia, preparação, dados, HTML/JS e comportamento funcional, que não mudaram; esta revisão acrescenta a avaliação da nova camada visual.
- Paleta presente e aplicada com coerência: vinho `#6F1D1B`, ouro `#BB9457`, marrom `#432818`, barro `#99582A` e creme `#FFE6A7`. Texto pequeno aparece em tons escuros sobre superfícies claras ou creme claro sobre cabeçalho escuro; creme não é usado como texto pequeno em superfície branca. Gráficos usam barras vinho/barro/ouro com contorno marrom, linha vinho, pontos creme com contorno marrom e rótulos textuais; a tabela usa cabeçalho creme e texto marrom.
- Recalculei as razões WCAG das combinações principais: texto marrom/superfície **13,38:1**; marrom/fundo **12,64:1**; auxiliar/fundo **6,80:1**; creme/cabeçalho **11,01:1**; introdução/cabeçalho **12,77:1**; texto do botão ouro **4,81:1**; vinho/fundo **10,52:1** e vinho/superfície **11,14:1**. As combinações de texto avaliadas excedem 4,5:1. O preenchimento ouro da terceira barra, isoladamente, tem **2,78:1** contra a superfície; o contorno marrom de alto contraste delineia a barra, e categoria/valor também têm rótulos textuais. Registro-o como consideração de visualização, não como falha isolada de contraste textual.
- Regra de foco verificada no CSS: `:focus-visible` aplica contorno sólido de 3 px e offset de 3 px em vinho. O teste de navegador confirma navegação por teclado, mas não verifica pixels. Fiz checagem pontual real no Edge com screenshot após navegação por Tab: o anel ao redor de “Limpar filtros” está claramente visível. Evidência temporária: `C:\Users\IADADOS\AppData\Local\Temp\opencode\round05-focus.png`. Portanto, a falta de asserção visual automatizada do foco é uma **limitação/caveat não bloqueador** nesta revisão: CSS, contraste e captura real do navegador concordam.
- Reexecutei `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — **OK**, 8 testes, sem falhas ou skips (17,287 s). Inclui preservação e cálculos independentes, fixture real, interface e teclado.
- Reexecutei `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK**, Edge (`msedge.exe`), `status: passed`, URL `http://127.0.0.1:60610/`; HTTP/recursos, KPIs/gráficos/tabela, filtros isolados/combinados, vazio/limpar, JavaScript, 390/1365 px, rótulos de filtros e teclado.
- Inspecionei screenshots reais no Edge em tamanhos grande e 390 px: `...\Temp\opencode\round05-charts.png`, `...\Temp\opencode\round05-mobile.png`. Cabeçalho da tabela, conteúdo textual, contornos e gráficos estão claros em tela grande; em 390 px o layout não tem overflow global e a tabela mantém rolagem horizontal local.

## Problema encontrado — devolver ao Construtor

- **Rótulos dos gráficos pequenos demais no celular.** No screenshot de 390 px, os textos SVG dos gráficos (categorias, valores, meses e eixos) ficam minúsculos. A regra `.grafico svg { width: 100% }` reduz o `viewBox` de 560 unidades para a largura interna do cartão; os rótulos CSS de 12 px também são escalados, ficando em torno de 7 px ou menos no telefone. Na captura `round05-mobile.png`, rótulos como “Acessórios”, valores nas barras e referências do eixo mensal exigem zoom para leitura confortável. A descrição textual próxima ajuda, mas não torna legíveis os rótulos dentro dos gráficos. Isso falha o critério obrigatório de rótulos legíveis em tela pequena, ainda que a checagem atual de responsividade (sem overflow/filtros visíveis) passe.
- Devolver ao **Construtor** para melhorar legibilidade dos gráficos em largura móvel (por exemplo, dimensionamento responsivo dos textos/layout dos SVG ou alternativa textual visualmente legível, mantendo os dados, paleta e contraste). Depois da alteração, o **Tester** deve reexecutar a suíte completa e aceitação no navegador; esta constatação exige nova revisão da versão corrigida.

Não alterei produto nem testes. Nenhuma outra regressão funcional, de contraste textual, foco ou tabela foi observada.

## Status

**REPROVADO** — a paleta e o foco estão adequados, e a revisão anterior permanece válida, mas a legibilidade dos rótulos dos gráficos a 390 px é uma pendência bloqueadora. A aprovação depende da correção pelo Construtor, reteste pelo Tester e nova revisão independente.
