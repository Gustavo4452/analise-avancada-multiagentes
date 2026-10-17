# Relatório do Construtor — rodada 07

## Versão examinada

Workspace sem commit Git registrado. A alteração desta rodada é limitada ao layout em `projeto-dashboard/site/estilos.css`; HTML, JavaScript, dados e testes foram preservados.

| Arquivo | SHA-256 | Estado |
|---|---|---|
| `projeto-dashboard/site/estilos.css` | `0E204F87CD77EE89738A59487D1493010D989C57C45275A8934A594E68423231` | Alterado nesta rodada |
| `projeto-dashboard/site/index.html` | `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` | Inalterado |
| `projeto-dashboard/site/dashboard.js` | `4F3CA1861B5FDFB57D821B47DFD002F18E70A71CE847BF1875E2FA8014506E9B` | Inalterado |

## Alteração

- Reorganizei o desktop com CSS Grid: a faixa de filtros fica à esquerda e os três indicadores à direita, na primeira varredura horizontal depois do cabeçalho.
- Os dois gráficos agora formam uma trilha vertical alinhada à esquerda, com destaque lateral discreto; a tabela continua abaixo, ocupando a largura disponível.
- Até 900 px, as seções voltam a uma única coluna e os filtros permanecem utilizáveis; não alterei a ordem semântica, os controles, gráficos, tabela nem seu comportamento.

## Verificações e evidências

1. `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — **OK**, 8 testes passaram.
2. `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK**, aceitação no Edge: recursos HTTP, indicadores e tabela, filtros isolados/combinados, estado vazio, JavaScript, responsividade em 390/1365 px e navegação por teclado.
3. Inspeção visual/geométrica por Edge headless/CDP, servindo o site por HTTP. O script temporário executado foi `C:\Users\IADADOS\AppData\Local\Temp\opencode\round07-layout.mjs`; em 1365 px, filtros e indicadores começam na mesma linha (y=215 px), gráficos empilhados abaixo e trilha dos gráficos alinhada à esquerda. Em 1024 px mantém-se essa primeira linha horizontal; em 900 e 768 px as seções passam a uma coluna para preservar espaço nos indicadores. Em 390 px, o conteúdo também ocupa uma coluna. Largura do documento: 1350/1365, 1009/1024, 885/900, 753/768 e 390/390 px, sem overflow horizontal.
4. Capturas usadas na conferência: `C:\Users\IADADOS\AppData\Local\Temp\opencode\round07-1365.png` e `C:\Users\IADADOS\AppData\Local\Temp\opencode\round07-mobile.png`. A primeira execução do script temporário de captura teve erro de sintaxe no rótulo do arquivo; corrigi o script fora do workspace e repeti a medição/captura com sucesso.
5. Consultei `.opencode/skills/data-visualization/SKILL.md` como referência de hierarquia/legibilidade. Os caminhos solicitados `.agents/skills/{explore-data,data-visualization,validate-data}/SKILL.md` não existem no workspace; os arquivos correspondentes estão em `.opencode/skills/`. Não alterei dados, então explore-data e validate-data não foram aplicadas nesta mudança de CSS.

## Pendências e status

- **PENDENTE:** Revisor deve examinar esta versão visual do layout.
- **Status do Construtor: APROVADO** para a mudança de layout e as verificações registradas. Não é aprovação final conjunta do projeto.
