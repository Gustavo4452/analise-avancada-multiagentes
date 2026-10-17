# Relatório do Tester — rodada 05

## Versão examinada

Workspace sem repositório Git/commit. SHA-256 após as verificações:

| Arquivo | SHA-256 |
|---|---|
| `projeto-dashboard/site/estilos.css` | `D3A32EA234FA6F230731EB839FDAFE945D6B057EFEED5B9C75B27369F60298B4` |
| `projeto-dashboard/README.md` | `1284E214AAE2A651670D6D8C81303BFD75BC72F0D4794DD09F61C27EB575646A` |
| `projeto-dashboard/tests/test_dashboard.py` | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |
| `projeto-dashboard/preparar_dados.py` | `6E0E57B62505F752D3143B0E2E6DD04961F3388DDE7236DA195670C6B80CE8A4` |
| `projeto-dashboard/site/index.html` | `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` |
| `projeto-dashboard/site/metodologia.html` | `278C7047989B617299AB580366210EB9DBE511BF29D5AD93A50BA1D638442385` |
| `projeto-dashboard/site/dashboard.js` | `8502221917A87014FA11C814E93A1171980E0541CCF0F9CFEEC1277354BAA28A` |
| `projeto-dashboard/site/dados/vendas.json` | `5D2DD319DB0A2AFB23925F07F29C19E24C48918A35302D7526862F0E13779097` |
| `projeto-dashboard/site/dados/perfil.json` | `EC5BA37C22F037766EB8BF2B3E0D5B8A090FFC01EE68A3495A6C6DDC197CC899` |
| `papelaria_limpa.csv` | `E25B6C2CDF05A6492F6495A91F9384565629F26E1318039F75734DCD9856995D` |
| `vendas_papelaria.csv` | `BF95B7609E30EB7E3E6A30CFC16E43D9FB5BDFC48A410E49148CCEB92E2494FF` |

O hash do CSS coincide com o informado pelo Construtor. Os hashes dos testes, demais arquivos de produto e CSVs permanecem iguais aos registrados na rodada 04. Não alterei produto nem testes.

## Comandos e evidências

Ambiente: Python 3.14.7, Node v24.21.0, Microsoft Edge 155.0.4283.45.

1. Comando Python atual do README: `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — **OK**, 8 testes passaram em 17,146 s, sem skips/falhas. Inclui dados e interação de navegador. Saída observada nesta rodada.
2. Aceitação browser atual do README: `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK**; saída: `{"status":"passed","browser":"msedge.exe","http":"http://127.0.0.1:60090/","checks":["HTTP/recursos","KPIs versus tabela","filtros isolados e combinados","vazio e limpar","JavaScript","responsividade 390px/1365px","rótulos e foco por teclado"]}`.
3. A aceitação exercitou layout nas larguras **390 px** e **1365 px**, ausência de rolagem horizontal global, visibilidade/rótulos dos filtros, foco sequencial com Tab/Shift+Tab, seleção por seta e limpeza por Espaço. Os testes também confirmaram que a alteração CSS não afetou carregamento, KPIs, tabela, gráficos nem filtros.

## CSS, paleta, foco e contraste

Conferi que as variáveis e regras CSS usam a paleta reportada pelo Construtor: vinho `#6F1D1B`, ouro `#BB9457`, marrom `#432818`, barro `#99582A` e creme `#FFE6A7`, além de neutros quentes. O CSS conserva breakpoints e a regra de foco `:focus-visible` com contorno vinho de 3 px. Barras têm contorno escuro; os rótulos complementam as distinções de cor.

A automação do navegador comprova navegação/uso por teclado e responsividade, mas **não mede diretamente** contraste nem a renderização visual do anel de foco. Para complementar, recalculei contraste WCAG das combinações de texto e foco usando as cores finais do CSS:

| Combinação | Contraste calculado |
|---|---:|
| Texto principal `#432818` / fundo `#FBF7EF` | 12,64:1 |
| Texto auxiliar `#665345` / fundo `#FBF7EF` | 6,80:1 |
| Creme `#FFE6A7` / cabeçalho `#432818` | 11,01:1 |
| Texto de introdução `#FFF8EA` / cabeçalho `#432818` | 12,77:1 |
| Texto do botão `#432818` / ouro `#BB9457` | 4,81:1 |
| Texto da tabela `#432818` / cabeçalho creme `#FFE6A7` | 11,01:1 |
| Link/foco vinho `#6F1D1B` / fundo `#FBF7EF` | 10,52:1 |
| Contorno de foco vinho `#6F1D1B` / superfície `#FFFEFA` | 11,14:1 |

As combinações de texto verificadas excedem 4,5:1. O foco tem proporção de contraste alta contra fundo e superfície; a comprovação de pintura/visibilidade do contorno foi inspecionada pela regra CSS, não capturada como asserção visual automatizada.

## Pendências e status

- Não encontrei regressão ou falha a devolver ao Construtor.
- Revisão independente do Revisor e aprovação conjunta pelo coordenador: **PENDENTES**. Este status cobre somente a verificação do Tester.
- **Status do Tester: APROVADO — rodada 05.**
