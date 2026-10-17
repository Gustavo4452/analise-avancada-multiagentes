# Relatório do Revisor — rodada 07

## Versão examinada

Workspace sem commit Git. Os hashes atuais conferem com os registrados pelo Construtor e Tester; a revisão refere-se a esta versão:

| Arquivo | SHA-256 |
|---|---|
| `projeto-dashboard/site/index.html` | `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` |
| `projeto-dashboard/site/estilos.css` | `0E204F87CD77EE89738A59487D1493010D989C57C45275A8934A594E68423231` |
| `projeto-dashboard/site/dashboard.js` | `4F3CA1861B5FDFB57D821B47DFD002F18E70A71CE847BF1875E2FA8014506E9B` |
| `projeto-dashboard/site/dados/vendas.json` | `5D2DD319DB0A2AFB23925F07F29C19E24C48918A35302D7526862F0E13779097` |
| `projeto-dashboard/site/dados/perfil.json` | `EC5BA37C22F037766EB8BF2B3E0D5B8A090FFC01EE68A3495A6C6DDC197CC899` |
| `projeto-dashboard/tests/test_dashboard.py` | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |

## Revisão visual e estrutural

- Inspecionei `site/index.html`, `estilos.css` e `dashboard.js`. No desktop, o Grid posiciona filtros e indicadores na primeira faixa horizontal; os gráficos formam uma trilha vertical alinhada à esquerda e a tabela vem abaixo. Essa composição cria a hierarquia F descrita, sem reordenar o DOM.
- A ordem semântica/leitura permanece: filtros, indicadores, gráficos, tabela e nota metodológica. Em até 900 px o CSS passa a uma coluna; em 390 px a disposição visual segue a mesma ordem do HTML. Rótulos associados, controles nativos, link para pular ao conteúdo e estilos de `:focus-visible` permanecem presentes.
- Inspecionei as capturas de desktop e celular declaradas no relatório do Tester. Seus SHA-256 conferem com os valores relatados: `round07-1365.png` (`CAFBE7307C39CD4BBB2A4E2EB946BE045A87FA1C814E0F9F50E8325107C93FEE`) e `round07-mobile.png` (`6155395A8546DAD829ACD1A7F823358422A5A0B6365FCA2D7CA19E687B136C39`). Não observei sobreposição ou conteúdo fora da largura útil.
- Reexecutei `node C:\Users\IADADOS\AppData\Local\Temp\opencode\round07-layout.mjs` sobre o workspace atual. O script mediu, entre outros pontos, 1365 px: documento 1350 px, filtros/KPIs na primeira faixa, gráficos em coluna e tabela abaixo; 390 px: documento 390 px e todas as seções em uma coluna na ordem esperada. Também não houve overflow horizontal em 1024, 900 ou 768 px.
- Reexecutei `node C:\Users\IADADOS\AppData\Local\Temp\opencode\round07-focus-check.mjs`: **OK**, foco de teclado no botão `limpar-filtros`, `:focus-visible` ativo, contorno sólido de 3 px na cor `rgb(111, 29, 27)`. A automação comprova o estilo calculado, não uma auditoria completa com leitor de tela/zoom.

## Testes e evidências

- Li `relatorios/rodada-07/construtor.md`, `tester.md`, `tests/test_dashboard.py` e `tests/browser_acceptance.mjs`. Hashes dos arquivos de produto/teste registrados pelo Tester coincidem com o workspace no momento da revisão.
- `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK**, Edge, `status: passed`; HTTP/recursos, valores renderizados, filtros isolados/combinados, estado vazio, limpar, teclado, JavaScript e responsividade 390/1365 px.
- `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — **OK**, 8 testes passaram, sem falhas ou skips; inclui nova execução da aceitação no navegador.
- Li `.opencode/skills/data-visualization/SKILL.md` como referência de layout e acessibilidade. Os caminhos `.agents/skills` citados nas instruções não estão presentes.

## Achados, pendências e status

- Não encontrei defeito real de hierarquia F, ordem de leitura, acessibilidade dos controles/foco ou comportamento responsivo que exija retorno ao Construtor.
- **PENDENTE:** validação com leitor de tela e variações adicionais de zoom/dispositivo não foi executada nesta rodada. Não foi requisito da checagem visual solicitada nem invalida as verificações registradas; não afirmo cobertura dessas condições.
- Não alterei arquivos de produto ou testes. Este status aprova somente a revisão da rodada 07; não substitui a aprovação final conjunta do projeto.

**Status do Revisor: APROVADO — rodada 07.**
