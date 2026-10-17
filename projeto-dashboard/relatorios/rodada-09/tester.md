# Relatório do Tester — rodada 09

## Versão examinada

Workspace sem commit Git. Versão final do Construtor, descrita em `projeto-dashboard/relatorios/rodada-09/construtor.md`. Recalculei os hashes antes e depois das verificações; não houve divergência nem alteração dos arquivos do produto/testes durante a execução.

| Arquivo | SHA-256 final |
|---|---|
| `projeto-dashboard/site/index.html` | `C3DE0E3F89434B502276485550968349BF694B730698E4907BC849CB10B0FB23` |
| `projeto-dashboard/site/estilos.css` | `E1B3C34AF56DC88666DF559CA27C73444207D3DA51F45763ADD2B64054157DB6` |
| `projeto-dashboard/site/dashboard.js` | `4F3CA1861B5FDFB57D821B47DFD002F18E70A71CE847BF1875E2FA8014506E9B` |
| `projeto-dashboard/tests/test_dashboard.py` | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |

## Comandos executados e resultados

1. `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — **OK**, 8 testes passaram, 0 falharam ou foram ignorados. Inclui aceitação no navegador, transformação/preparação independente, exemplo conhecido, dados e agregações.
2. `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK** no Microsoft Edge (`msedge.exe`), `status: passed`. Conferiu recursos HTTP, KPIs versus tabela, filtros isolados/combinados, estado vazio, limpar, JavaScript, viewports 390/1365 px, rótulos e foco por teclado.
3. `node C:\Users\IADADOS\AppData\Local\Temp\opencode\round09-tester-layout.mjs` — **OK**, diagnóstico via HTTP/Edge headless em 1365, 1024, 900, 768 e 390 px. A saída foi salva em `C:\Users\IADADOS\AppData\Local\Temp\opencode\round09-tester-layout.txt`.
4. `Get-FileHash -Algorithm SHA256 ...` — **OK** antes e depois das verificações; os hashes acima permaneceram idênticos. Não alterei arquivos de produto ou testes.

## Conferência visual, estrutural e geométrica

- **Textos e placeholder:** o SHA-256 do `index.html` é idêntico ao registrado na rodada 08 (`C3DE...`), logo os textos/estrutura HTML permaneceram byte a byte iguais. A área `.topo__imagem` existe vazia, não há tag `<img>` no HTML e o diagnóstico contou 0 `img` descendentes.
- **Estilo computado do placeholder:** em 1365 e 390 px, borda `0px none`, fundo `rgba(0, 0, 0, 0)`, raio `0px`, outline `none` (largura computada 3 px, sem estilo) e sombra `none`. Portanto não há caixa, contorno, fundo ou borda arredondada.
- **Watermark e cabeçalho:** em 1365 px, os textos começam em x=95 e o placeholder em x=879; a linha é `1px solid rgba(255, 230, 167, 0.38)` à esquerda do placeholder, no vão entre colunas. Em 390 px, textos em y=28 e placeholder em y=167; a linha correspondente é `1px solid rgba(255, 230, 167, 0.38)` no topo, deslocada -11 px (antes do placeholder). O `text-align` calculado do título é `start`, que corresponde a alinhamento à esquerda no documento `pt-BR`/LTR.
- **Overflow e ordem:** `documentWidth` ficou em 1350/1365 px (desktop) e 390/390 px (mobile). Os blocos do cabeçalho cabem na largura útil. Em mobile, o texto precede o placeholder.
- **Padrão F:** em 1365 px, filtros x=95 e indicadores x=480 na mesma faixa (y=313); gráficos empilhados e alinhados à esquerda (x=95, y=608); tabela abaixo (y=1431). Em 390 px, filtros, indicadores, gráficos e tabela seguem em uma coluna/ordem vertical.
- **Inspeção visual:** capturei e inspecionei as imagens do Edge headless; não vi caixa/contorno no placeholder, sobreposição ou conteúdo cortado. O teste browser acceptance confirma interação dos filtros e limpar, teclado e visibilidade dos controles nas larguras testadas.

Evidências temporárias, fora do projeto:

| Evidência | SHA-256 |
|---|---|
| `C:\Users\IADADOS\AppData\Local\Temp\opencode\round09-tester-layout.mjs` | `01EAFE79229D128475B46A6B26E2101A468C8B442280D8BFC146E2F605160E6D` |
| `C:\Users\IADADOS\AppData\Local\Temp\opencode\round09-tester-layout.txt` | `FC77832720D564C1C886630D5F20C8D50B895193288F7C45A8538590A9D43EB1` |
| `C:\Users\IADADOS\AppData\Local\Temp\opencode\round09-tester-1365.png` | `02528E5AE22F5A211DF9E3C193FBF064B7E676F1CB366AAE90FDE724C5B3EE10` |
| `C:\Users\IADADOS\AppData\Local\Temp\opencode\round09-tester-mobile.png` | `2D3898D17E0F26B476140AC068E0DF3C35795D881E79EE72318BEE29F086284A` |

## Skills, pendências e status

- `.agents/skills/explore-data/SKILL.md`, `.agents/skills/data-visualization/SKILL.md` e `.agents/skills/validate-data/SKILL.md` estão ausentes. Documentos disponíveis: `.opencode/skills/explore-data/SKILL.md`, `.opencode/skills/data-visualization/SKILL.md` e `.opencode/skills/validate-data/SKILL.md`.
- Não encontrei falha nos critérios desta rodada. Leitor de tela e zoom ampliado não foram avaliados e não fazem parte do escopo visual solicitado.
- A revisão independente do Revisor e a aprovação conjunta do coordenador permanecem **PENDENTES**; este relatório aprova somente a verificação do Tester para os hashes listados.

**Status do Tester: APROVADO — rodada 09.**
