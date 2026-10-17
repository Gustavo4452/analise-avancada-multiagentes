# Relatório do Construtor — rodada 06

## Versão examinada

Workspace sem commit Git registrado. A correção cobre a falha bloqueadora registrada em `relatorios/rodada-05/revisor.md`: rótulos SVG reduzidos a cerca de 7 px no viewport móvel por causa do `viewBox` fixo de 560 unidades.

## Arquivos alterados e hashes SHA-256

| Arquivo | SHA-256 atual | Alteração |
|---|---|---|
| `projeto-dashboard/site/estilos.css` | `FAED65359471EE790D3F8917196A775B6C6C3C1ADD9232A4253C4E36DB212751` | Fonte dos SVGs elevada a 13 px e fonte opcional Decaydence aplicada somente ao título. |
| `projeto-dashboard/site/dashboard.js` | `4F3CA1861B5FDFB57D821B47DFD002F18E70A71CE847BF1875E2FA8014506E9B` | SVGs agora usam viewBox dimensionado em CSS pixels, com composição compacta para gráficos estreitos e redesenho no redimensionamento. |

HTML, dados e testes não foram alterados. Hashes confirmados:

| Arquivo | SHA-256 |
|---|---|
| `projeto-dashboard/site/index.html` | `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` |
| `projeto-dashboard/site/metodologia.html` | `278C7047989B617299AB580366210EB9DBE511BF29D5AD93A50BA1D638442385` |
| `projeto-dashboard/site/dados/vendas.json` | `5D2DD319DB0A2AFB23925F07F29C19E24C48918A35302D7526862F0E13779097` |
| `projeto-dashboard/site/dados/perfil.json` | `EC5BA37C22F037766EB8BF2B3E0D5B8A090FFC01EE68A3495A6C6DDC197CC899` |
| `projeto-dashboard/tests/test_dashboard.py` | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |
| `relatorios/rodada-05/tester.md` | `C7AEB9F190E36E3353BF70AB4C21E068BABBBF7ADB3E2620EF31571C1FB9DD36` |
| `relatorios/rodada-05/revisor.md` | `55BB986BCD2DA33E55F0CDB34C6149907A22D40C12E4C0FCA1C2982A8B33C882` |

## Correção e fonte Decaydence

- O JavaScript mede a largura real de cada gráfico, adapta o viewBox à mesma quantidade de CSS pixels e seleciona a composição compacta quando o gráfico é estreito. Assim, textos SVG de 13 px não encolhem com a largura; os rótulos de categorias/valores e pontos/meses são posicionados dentro da área disponível. Redimensionar a janela redesenha os gráficos.
- A paleta da rodada 05 foi preservada. O corpo e os rótulos SVG continuam com fontes de sistema legíveis.
- `h1` usa apenas `font-family: "Decaydence", "Segoe UI", Arial, sans-serif`, permitindo usar a fonte se ela já estiver instalada localmente. Não usei `@font-face`, nem extraí, copiei, embuti ou republiquei o OTF de `decaydence.zip`.

## Verificações realmente executadas

1. `node --check .\projeto-dashboard\site\dashboard.js` — **OK**, sem erro de sintaxe.
2. Verificação visual/geométrica direta no Microsoft Edge headless, servido por HTTP, a **390 × 1200** e **1365 × 1200**. As medições de `getBBox()` mostram, nos dois gráficos e nos dois tamanhos, fonte renderizada mínima de **13 px**, nenhum rótulo fora do viewBox e nenhuma interseção entre caixas de rótulos. As larguras medidas dos SVGs foram 338 px no móvel e 530 px no desktop, correspondendo às larguras dos respectivos viewBoxes.
3. Inspecionei as capturas Edge `C:\Users\IADADOS\AppData\Local\Temp\opencode\round06-mobile-categorias.png`, `round06-mobile-mensal.png` e `round06-desktop.png`. Categorias e valores ficam em linhas separadas no gráfico compacto; rótulos mensais e valores permanecem discerníveis no móvel. A captura desktop também mantém os rótulos visíveis.
4. A primeira tentativa de screenshot usando o comando standalone do Edge reutilizou uma sessão existente e não produziu captura. Substituí-a por Edge com perfil temporário isolado e captura via DevTools; as capturas e medições listadas acima foram geradas por esse método.
5. Não executei a suíte Python nem `browser_acceptance.mjs` nesta rodada. Os checks acima são específicos de sintaxe e legibilidade visual; não são uma aprovação da suíte funcional.

## Pendências e status

- **PENDENTE:** Tester deve executar a suíte completa e a aceitação de navegador sobre esta versão de CSS/JavaScript.
- **PENDENTE:** Revisor deve inspecionar a mesma versão, com atenção à legibilidade nos dois viewports.
- **Status do Construtor: APROVADO** para a correção de legibilidade e as verificações visuais/geométricas registradas. Isto não é aprovação final ou conjunta.
