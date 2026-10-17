# Relatório do Revisor — rodada 06

## Versão examinada

Workspace sem commit Git. CSS e JavaScript foram alterados para corrigir os rótulos móveis; hashes das demais partes de produto, testes e CSVs permanecem iguais aos aprovados anteriormente.

| Arquivo | SHA-256 |
|---|---|
| `projeto-dashboard/site/estilos.css` | `FAED65359471EE790D3F8917196A775B6C6C3C1ADD9232A4253C4E36DB212751` |
| `projeto-dashboard/site/dashboard.js` | `4F3CA1861B5FDFB57D821B47DFD002F18E70A71CE847BF1875E2FA8014506E9B` |
| `projeto-dashboard/README.md` | `1284E214AAE2A651670D6D8C81303BFD75BC72F0D4794DD09F61C27EB575646A` |
| `projeto-dashboard/preparar_dados.py` | `6E0E57B62505F752D3143B0E2E6DD04961F3388DDE7236DA195670C6B80CE8A4` |
| `projeto-dashboard/ANALISE.md` | `F5CFF52A48E32F63BE4B220CC2D5893673F4CC819842BA8B1996363ED4FC6EE3` |
| `projeto-dashboard/site/index.html` | `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` |
| `projeto-dashboard/site/metodologia.html` | `278C7047989B617299AB580366210EB9DBE511BF29D5AD93A50BA1D638442385` |
| `projeto-dashboard/site/dados/vendas.json` | `5D2DD319DB0A2AFB23925F07F29C19E24C48918A35302D7526862F0E13779097` |
| `projeto-dashboard/site/dados/perfil.json` | `EC5BA37C22F037766EB8BF2B3E0D5B8A090FFC01EE68A3495A6C6DDC197CC899` |
| `projeto-dashboard/tests/test_dashboard.py` | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |
| `papelaria_limpa.csv` | `E25B6C2CDF05A6492F6495A91F9384565629F26E1318039F75734DCD9856995D` |
| `vendas_papelaria.csv` | `BF95B7609E30EB7E3E6A30CFC16E43D9FB5BDFC48A410E49148CCEB92E2494FF` |

## Rótulos, layout e evidências

- Confirmei que `dashboard.js` adapta cada SVG à largura real do contêiner (`viewBox` em CSS pixels), escolhe arranjo compacto abaixo de 420 px e redesenha após resize. O CSS fixa texto SVG em 13 px, em Segoe UI/Arial. Esta é uma correção direta do achado bloqueador da rodada-05.
- Inspecionei as capturas Edge da rodada-06: `C:\Users\IADADOS\AppData\Local\Temp\opencode\round06-mobile-categorias.png`, `round06-mobile-mensal.png` e `round06-desktop.png`. Em 390 px, categorias e valores aparecem em linhas separadas, eixo mensal abrevia milhares e os rótulos de valor/mês são legíveis, sem sobreposição visível. Em 1365 px, os dois gráficos preservam composição lado a lado e rótulos legíveis.
- Reexecutei o diagnóstico geométrico fornecido fora do workspace, após inspecionar o script: `node "$env:LOCALAPPDATA\Temp\opencode\round06-geometry.mjs" .\projeto-dashboard\site` — **OK**. Em 390 px: documento 390 px; ambos SVGs 338 px de largura e viewBox 338; fonte renderizada mínima 13 px; nenhum rótulo fora do viewBox ou caixa de texto sobreposta. Em 1365 px: documento 1350 px (sem overflow); ambos SVGs 530 px/viewBox 530; fonte mínima 13 px; sem rótulos externos ou sobrepostos.
- A checagem de legibilidade é específica destes tamanhos, conteúdo e navegador Edge; não garante todos os zooms, fontes/ambientes ou tecnologias assistivas. As capturas e diagnóstico fornecem evidência visual/geométrica desta versão, sem adicionar ou alterar testes do projeto.

## Paleta, contraste, foco e fonte do título

- As cinco cores mantêm uso coerente com a rodada-05: vinho `#6F1D1B`, ouro `#BB9457`, marrom `#432818`, barro `#99582A` e creme `#FFE6A7`. O fundo quente, texto escuro, barras delineadas, linha/pontos e cabeçalho da tabela conservam a hierarquia e distinguibilidade. Os contrastes de texto calculados na revisão anterior permanecem válidos, pois as cores não mudaram: marrom/superfície 13,38:1; marrom/fundo 12,64:1; auxiliar/fundo 6,80:1; creme/cabeçalho 11,01:1; introdução/cabeçalho 12,77:1; botão 4,81:1; vinho/fundo 10,52:1. O preenchimento ouro da barra isolado continua abaixo de 3:1 (2,78:1) contra a superfície, mas há contorno marrom de alto contraste e nomes/valores textuais; mantenho como ressalva visual não bloqueadora, não de legibilidade dos dados.
- O CSS conserva `:focus-visible { outline: 3px solid var(--foco); outline-offset: 3px; }`, com vinho de alto contraste. A aceitação executada verifica Tab/Shift+Tab, seleção por seta e ação Espaço no botão. A automação não afirma fazer asserção de pixels do anel; a regra e a inspeção visual de foco registrada na rodada-05 permanecem aplicáveis, pois a declaração/cores de foco não foram alteradas.
- `Decaydence` aparece somente na pilha de fontes do seletor `h1`, para o título; não há `@font-face`, URL ou arquivo `.otf`, `.ttf`, `.woff`/`.woff2` em `site/`. A fonte é opcional e só será exibida se instalada localmente; caso contrário, o navegador usa Segoe UI/Arial. O texto do corpo e dos gráficos permanece em fonte de sistema.

## Comandos e validade da revisão anterior

- `node --check .\projeto-dashboard\site\dashboard.js` — **OK**, sem erro de sintaxe.
- `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — **OK**, 8 testes passaram em 17,516 s, sem falhas/skips, incluindo fixture conhecido, verificações independentes dos dados e interação browser.
- `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK**, Edge, saída `status: passed`, URL `http://127.0.0.1:50086/`; HTTP/recursos, KPIs versus tabela, gráficos, filtros isolados/combinados, vazio/limpar, JavaScript, 390/1365 px, rótulos de filtro e teclado.
- Preparação, CSVs, análise/metodologia, HTML, dados e suíte de testes conservam os hashes anteriormente examinados. O JavaScript de gráficos e o CSS foram revisados nesta rodada; a suíte/browser confirmam que filtros ainda atualizam indicadores, gráficos e tabela, inclusive estados vazio e limpar. A granularidade, fórmulas, limpeza, limitação de valor bruto e demais conclusões da revisão de dados continuam válidas.
- Não alterei arquivos de produto ou testes.

## Achados e status

- A pendência de rótulos minúsculos em 390 px da rodada-05 está corrigida e foi conferida em captura e medição independente nos dois viewports solicitados.
- Limitações registradas: Decaydence depende de instalação local; teste automatizado não mede pixels do foco; preenchimento ouro da barra isolado tem contraste menor que 3:1, compensado por contorno e rótulos. Não são pendências bloqueadoras nesta versão.
- **Status do Revisor: APROVADO.** A versão atual identificada pelos hashes acima atende à correção visual e mantém a avaliação aprovada dos dados, metodologia e interações.
