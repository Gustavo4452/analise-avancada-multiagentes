# Relatório do Construtor — rodada 09

## Versão examinada

Workspace sem commit Git. Alterei apenas `site/estilos.css`; o HTML e demais recursos/testes foram preservados.

| Arquivo | SHA-256 |
|---|---|
| `projeto-dashboard/site/index.html` (inalterado) | `C3DE0E3F89434B502276485550968349BF694B730698E4907BC849CB10B0FB23` |
| `projeto-dashboard/site/estilos.css` | `E1B3C34AF56DC88666DF559CA27C73444207D3DA51F45763ADD2B64054157DB6` |
| `projeto-dashboard/site/dashboard.js` (inalterado) | `4F3CA1861B5FDFB57D821B47DFD002F18E70A71CE847BF1875E2FA8014506E9B` |
| `projeto-dashboard/tests/browser_acceptance.mjs` (inalterado) | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |
| `projeto-dashboard/tests/test_dashboard.py` (inalterado) | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |

## Alteração

- Removi do placeholder o fundo, a borda tracejada, os cantos arredondados e o recorte por `overflow: hidden`. Mantive seu tamanho, posicionamento, contêiner vazio e regra de dimensionamento para futura imagem.
- Uma única linha de 1 px em creme translúcido (`rgb(255 230 167 / 38%)`) ocupa o meio do vão entre texto e placeholder no desktop. Até 760 px, a mesma linha passa a horizontal, acima do placeholder. Não alterei `index.html`, textos, layout F, breakpoints ou comportamento.

## Comandos e evidências

1. `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK** no Microsoft Edge: HTTP/recursos, valores, filtros, estado vazio/limpar, JavaScript, responsividade 390/1365 px e rótulos/foco por teclado.
2. `node C:\Users\IADADOS\AppData\Local\Temp\opencode\round09-layout.mjs` — medições no Edge headless a 1365, 1024, 900, 768 e 390 px. A 1365 px, textos em x=95 e placeholder em x=879, com a linha vertical no vão; a 390 px, texto em y=28 e placeholder em y=167, com a linha horizontal acima. O placeholder mede 376×210 px em 1365 e 366×130 px em 390; document width foi 1350, 1009, 885, 753 e 390 px, sem overflow horizontal do documento. O diagnóstico confirmou borda, fundo e raio zerados no placeholder e o estilo/orientação esperados na linha. Inspecionei visualmente as capturas desktop e mobile geradas pelo script; não observei caixa ou sobreposição. Evidências fora do workspace: script `C:\Users\IADADOS\AppData\Local\Temp\opencode\round09-layout.mjs` e capturas `round09-1365.png`/`round09-mobile.png` na mesma pasta temporária.
3. Não executei `unittest`; a suíte completa e a verificação independente desta alteração ficam para o Tester.

## Pendências e status

- **PENDENTE:** verificação independente do Tester e revisão do Revisor para esta versão. Não há aprovação final conjunta.
- **Status do Construtor: APROVADO** para a alteração visual solicitada e as evidências listadas.
