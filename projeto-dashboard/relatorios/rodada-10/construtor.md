# Relatório do Construtor — rodada 10

## Versão examinada

Workspace sem commit Git. Alterei apenas as regras CSS do cabeçalho; HTML, JavaScript, dados e testes foram preservados.

| Arquivo | SHA-256 |
|---|---|
| `projeto-dashboard/site/estilos.css` | `192872C7CD2EF3AEEB60057CF1678F9441A42FB2B091CFE351242FCE3E29E6D3` |
| `projeto-dashboard/site/index.html` (inalterado) | `C3DE0E3F89434B502276485550968349BF694B730698E4907BC849CB10B0FB23` |
| `projeto-dashboard/site/dashboard.js` (inalterado) | `4F3CA1861B5FDFB57D821B47DFD002F18E70A71CE847BF1875E2FA8014506E9B` |
| `projeto-dashboard/tests/browser_acceptance.mjs` (inalterado) | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |
| `projeto-dashboard/tests/test_dashboard.py` (inalterado) | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |

## Alteração

- Sobrescrevi somente a largura máxima herdada por `.topo__interno`: `width: calc(100% - 40px); max-width: none`. Assim, o cabeçalho usa margens de 20 px em desktop largo, em vez de parar em 1160 px. As regras existentes dos media queries seguem definindo largura menor, centralizada e com margens confortáveis em telas estreitas.
- `.conteudo` e `.rodape` continuam usando `min(1160px, calc(100% - 40px))`. Mantive o placeholder vazio, sua posição à direita, a linha watermark vertical/horizontal, os textos, breakpoints e layout F.

## Comandos e evidências

1. `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK** no Microsoft Edge: HTTP/recursos, KPIs e tabela, filtros, estado vazio/limpar, JavaScript, viewports 390/1365 px e rótulos/foco por teclado.
2. `node C:\Users\IADADOS\AppData\Local\Temp\opencode\round10-layout.mjs` — medições no Edge headless a 1365, 1024, 900, 768 e 390 px. A 1365 px, `.topo__interno` e textos começam em x=20 (largura do wrapper 1310 px; textos x=20); placeholder começa em x=904. `.conteudo` e `.rodape` seguem em x=95, largura 1160 px. O layout F manteve filtros/indicadores na primeira faixa (x=95/480, y=313), gráficos empilhados a partir de x=95, y=608 e tabela em x=95, y=1431. A 390 px, wrapper e textos começam em x=12, e a área reservada fica abaixo do texto (y=167); a regra mobile continua centralizada e a linha permanece horizontal. Largura do documento em 1365/1024/900/768/390 px: 1350/1009/885/753/390 px, sem overflow horizontal. Inspecionei visualmente as capturas desktop e mobile. Script e capturas temporários em `C:\Users\IADADOS\AppData\Local\Temp\opencode\round10-layout.mjs` e `round10-*.png`.
3. Não executei `unittest`; a suíte completa fica **PENDENTE** para a verificação desta versão.

## Pendências e status

- Os relatórios do Construtor e Tester da rodada 09 foram consultados; `projeto-dashboard/relatorios/rodada-09/revisor.md` não foi localizado.
- **PENDENTE:** execução da suíte completa e verificações independentes do Tester/Revisor nesta versão. Este relatório não aprova o projeto em conjunto.
- **Status do Construtor: APROVADO** para o deslocamento do cabeçalho e as verificações listadas.
