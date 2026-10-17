# Relatório do Tester — rodada 06

## Versão examinada

Workspace sem commit Git registrado. SHA-256 após a execução:

| Arquivo | SHA-256 |
|---|---|
| `projeto-dashboard/site/estilos.css` | `FAED65359471EE790D3F8917196A775B6C6C3C1ADD9232A4253C4E36DB212751` |
| `projeto-dashboard/site/dashboard.js` | `4F3CA1861B5FDFB57D821B47DFD002F18E70A71CE847BF1875E2FA8014506E9B` |
| `projeto-dashboard/README.md` | `1284E214AAE2A651670D6D8C81303BFD75BC72F0D4794DD09F61C27EB575646A` |
| `projeto-dashboard/tests/test_dashboard.py` | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |
| `projeto-dashboard/site/index.html` | `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` |
| `projeto-dashboard/site/metodologia.html` | `278C7047989B617299AB580366210EB9DBE511BF29D5AD93A50BA1D638442385` |
| `projeto-dashboard/site/dados/vendas.json` | `5D2DD319DB0A2AFB23925F07F29C19E24C48918A35302D7526862F0E13779097` |
| `projeto-dashboard/site/dados/perfil.json` | `EC5BA37C22F037766EB8BF2B3E0D5B8A090FFC01EE68A3495A6C6DDC197CC899` |
| `projeto-dashboard/preparar_dados.py` | `6E0E57B62505F752D3143B0E2E6DD04961F3388DDE7236DA195670C6B80CE8A4` |
| `papelaria_limpa.csv` | `E25B6C2CDF05A6492F6495A91F9384565629F26E1318039F75734DCD9856995D` |
| `vendas_papelaria.csv` | `BF95B7609E30EB7E3E6A30CFC16E43D9FB5BDFC48A410E49148CCEB92E2494FF` |

Os hashes do CSS e JavaScript conferem com os informados pelo Construtor. README, testes, restante do produto e CSVs permanecem iguais aos hashes previamente registrados. Não alterei arquivos de produto nem testes.

## Comandos e evidências

Ambiente: Python 3.14.7, Node v24.21.0, Microsoft Edge 155.0.4283.45.

1. Suíte Python, comando exato do README: `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — **OK**, 8 testes passaram em 17,067 s, sem skips/falhas. Incluiu o fixture que chama a preparação real e interação browser.
2. Aceitação Edge, comando exato do README: `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK**; saída: `{"status":"passed","browser":"msedge.exe","http":"http://127.0.0.1:58082/","checks":["HTTP/recursos","KPIs versus tabela","filtros isolados e combinados","vazio e limpar","JavaScript","responsividade 390px/1365px","rótulos e foco por teclado"]}`.
3. Geometria adicional independente, com Edge headless/CDP e site servido por HTTP: `node %LOCALAPPDATA%\Temp\opencode\round06-geometry.mjs .\projeto-dashboard\site` — **OK**. Saída: em viewport 390 px, largura do documento 390 px e SVGs de 338 px/viewBox 338; em viewport 1365 px, documento 1350 px (sem overflow horizontal) e SVGs de 530 px/viewBox 530. Nos dois gráficos e nos dois tamanhos: menor fonte renderizada 13 px, nenhum rótulo fora do viewBox e nenhuma interseção entre caixas de rótulos. O script de diagnóstico ficou fora do workspace, em `%LOCALAPPDATA%\Temp\opencode\round06-geometry.mjs`.
4. Foco/funcionalidade: a aceitação verificou Tab/Shift+Tab, alteração por seta e botão limpar por Espaço; os testes funcionais também passaram com os novos gráficos. O script browser não verifica visualmente o anel de foco, mas o CSS conserva `:focus-visible` com contorno de 3 px.

## Verificação da fonte tipográfica e pendências

- Busca recursiva em `site/` por `.otf`, `.ttf`, `.woff` e `.woff2`: **nenhum arquivo encontrado**.
- Busca de `@font-face`, `url()`, extensões de fonte ou nome Decaydence nos assets HTML/CSS/JS: única ocorrência do nome é `font-family: "Decaydence", "Segoe UI", Arial, sans-serif` no título. Não há referência a URL de fonte nem fonte incorporada; portanto o site usa a família somente se estiver instalada localmente.
- Não encontrei falha a devolver ao Construtor nesta rodada. Revisão independente pelo Revisor e aprovação conjunta pelo coordenador: **PENDENTES**.
- **Status do Tester: APROVADO — rodada 06.**
