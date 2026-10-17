# Relatório do Construtor — rodada 08

## Versão examinada

Workspace sem commit Git. Esta mudança limita-se ao cabeçalho em `site/index.html` e `site/estilos.css`; JavaScript e testes permanecem inalterados.

| Arquivo | SHA-256 |
|---|---|
| `projeto-dashboard/site/index.html` | `C3DE0E3F89434B502276485550968349BF694B730698E4907BC849CB10B0FB23` |
| `projeto-dashboard/site/estilos.css` | `B27660C136889D7F58CBAEB81D4D69EDFA0EB5C96B544A471A0F7D0356450B5D` |
| `projeto-dashboard/site/dashboard.js` (inalterado) | `4F3CA1861B5FDFB57D821B47DFD002F18E70A71CE847BF1875E2FA8014506E9B` |
| `projeto-dashboard/tests/browser_acceptance.mjs` (inalterado) | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |
| `projeto-dashboard/tests/test_dashboard.py` (inalterado) | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |

## Alterações

- Agrupei os textos existentes do cabeçalho em `.topo__texto` e acrescentei ao lado um contêiner vazio `.topo__imagem`, sem inserir imagem nem alterar os textos.
- Em desktop, o cabeçalho usa duas colunas: textos à esquerda e área delimitada à direita, com borda tracejada e fundo discreto na paleta existente. O CSS de `img` dentro do contêiner permite preenchê-lo futuramente.
- Até 760 px, o cabeçalho passa a uma coluna, com os textos antes da área reservada. A altura fixa e responsiva do espaço mantém a largura dentro da coluna. O grid do conteúdo, layout F, filtros, demais conteúdo e comportamento não foram alterados.

## Comandos e evidências

1. `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK**, Microsoft Edge; HTTP/recursos, valores, filtros, estado vazio/limpar, JavaScript, responsividade 390/1365 px e rótulos/foco por teclado.
2. `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — **OK**, 8 testes passaram, sem falhas.
3. `node C:\Users\IADADOS\AppData\Local\Temp\opencode\round08-layout-header.mjs` — medição no Edge headless a 1365, 1024, 900, 768 e 390 px. O texto e a área reservada ficam lado a lado em 1365/1024/900/768 px; a 390 px, o texto começa em y=28 e a área em y=167, portanto fica abaixo. Larguras do documento: 1350/1009/885/753/390 px, sem overflow horizontal do documento. A rolagem horizontal interna da tabela em 390 px permanece contida no wrapper já existente. Evidência temporária em `C:\Users\IADADOS\AppData\Local\Temp\opencode\round08-layout-header.mjs`; arquivo fora do workspace.
4. A primeira medição encontrou overflow horizontal da área reservada em larguras intermediárias por causa da combinação de aspect ratio com altura mínima. Removi essa combinação e repeti as medições; os resultados finais acima não mostram overflow do documento nas larguras verificadas.

## Pendências e status

- **PENDENTE:** avaliação independente do Tester e do Revisor sobre esta versão da rodada 08. Os testes executados acima são evidências desta etapa, não substituem essa revisão.
- `.agents/skills/{explore-data,data-visualization,validate-data}/SKILL.md` não existe neste workspace, conforme relatórios anteriores. Esta rodada alterou apenas o layout do cabeçalho; não alterou dados nem visualizações.
- **Status do Construtor: APROVADO** para a alteração do cabeçalho e as verificações descritas. Não é aprovação final conjunta do projeto.
