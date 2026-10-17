# Relatório do Tester — rodada 07

## Versão examinada

Workspace sem commit Git. Os testes foram executados sobre a versão final do Construtor da rodada 07. SHA-256 conferidos após os testes:

| Arquivo | SHA-256 |
|---|---|
| `projeto-dashboard/site/index.html` | `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` |
| `projeto-dashboard/site/estilos.css` | `0E204F87CD77EE89738A59487D1493010D989C57C45275A8934A594E68423231` |
| `projeto-dashboard/site/dashboard.js` | `4F3CA1861B5FDFB57D821B47DFD002F18E70A71CE847BF1875E2FA8014506E9B` |
| `projeto-dashboard/site/dados/vendas.json` | `5D2DD319DB0A2AFB23925F07F29C19E24C48918A35302D7526862F0E13779097` |
| `projeto-dashboard/site/dados/perfil.json` | `EC5BA37C22F037766EB8BF2B3E0D5B8A090FFC01EE68A3495A6C6DDC197CC899` |
| `projeto-dashboard/tests/test_dashboard.py` | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |
| `projeto-dashboard/README.md` | `1284E214AAE2A651670D6D8C81303BFD75BC72F0D4794DD09F61C27EB575646A` |

O hash do CSS confere com o fornecido pelo Construtor. HTML, JavaScript, dados, testes e README mantiveram os hashes registrados. Não alterei arquivos de produto ou testes; os scripts de diagnóstico e screenshots usados são temporários e estão fora do workspace.

## Comandos executados e resultados

Comandos do README, executados na raiz do workspace:

1. `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — **OK**, 8 testes passaram, 0 falharam, em 17,121 s. Inclui preparação dos dados por fixture conhecido, conferência independente da fonte/agrupamentos, recursos locais e uma execução de interação via browser.
2. `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK** no Microsoft Edge (`msedge.exe`). Saída indicou `status: passed`; verificou HTTP/recursos, KPIs versus tabela, filtros isolados e combinados, vazio/limpar, JavaScript, responsividade em 390/1365 px e rótulos/foco por teclado.

## Verificação visual e geométrica do layout F

Executei o diagnóstico temporário `node C:\Users\IADADOS\AppData\Local\Temp\opencode\round07-layout.mjs`, que serviu o site por HTTP, controlou Edge via CDP, mediu blocos renderizados e capturou screenshots. Resultados relevantes:

- **1365 px:** largura do documento 1350 px (sem overflow; 15 px correspondem à área da barra de rolagem). Cabeçalho no topo; filtros e indicadores na primeira faixa do conteúdo (início do bloco dos indicadores em x=480, y=215); gráficos empilhados abaixo e alinhados à esquerda (wrapper x=95, y=510, largura 920); tabela depois dos gráficos, em toda a largura do conteúdo (x=95, y=1333). A captura confirma faixa filtros/KPIs, trilha vertical de gráficos à esquerda e tabela abaixo, sem sobreposição visível.
- **390 px:** largura do documento 390 px, sem overflow horizontal. A ordem visual fica em coluna: filtros (título y=243), indicadores (y=487), gráficos (y=1023) e tabela (y=1854); os blocos ocupam a largura útil e continuam na ordem semântica do HTML.
- O mesmo diagnóstico também mediu 1024/900/768 px: larguras de documento 1009/885/753 px, sem overflow; em 900 e 768 px o conteúdo muda para uma coluna conforme o breakpoint.
- Screenshots full-page: `C:\Users\IADADOS\AppData\Local\Temp\opencode\round07-1365.png` (SHA-256 `CAFBE7307C39CD4BBB2A4E2EB946BE045A87FA1C814E0F9F50E8325107C93FEE`) e `C:\Users\IADADOS\AppData\Local\Temp\opencode\round07-mobile.png` (SHA-256 `6155395A8546DAD829ACD1A7F823358422A5A0B6365FCA2D7CA19E687B136C39`). As capturas foram inspecionadas visualmente.
- Checagem temporária de foco por teclado: `node C:\Users\IADADOS\AppData\Local\Temp\opencode\round07-focus-check.mjs` — **OK**. Após navegação por Tab, o foco chegou ao botão `limpar-filtros`, `:focus-visible` estava ativo e o navegador calculou contorno `solid` de 3 px (`rgb(111, 29, 27)`). A aceitação também passou por Tab/Shift+Tab, seta para seleção e Espaço para limpar filtros.

Sem defeitos de apresentação ou funcionalidade encontrados nesta verificação. Não alterei testes; portanto, não há mudança de cobertura a encaminhar ao Revisor.

## Skills e pendências

- `.agents/skills/{explore-data,data-visualization,validate-data}/SKILL.md` está ausente neste workspace. As instruções correspondentes estão em `.opencode/skills/`.
- Revisão do Revisor e aprovação do coordenador: **PENDENTES**. Este relatório registra aprovação apenas dos testes e da inspeção do Tester; **não é aprovação final conjunta**.

**Status do Tester: APROVADO — rodada 07.**
