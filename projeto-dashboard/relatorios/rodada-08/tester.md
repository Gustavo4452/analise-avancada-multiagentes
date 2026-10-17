# Relatório inicial do Tester — rodada 08

## Versão examinada

Workspace sem commit Git. Esta é uma leitura inicial, durante a edição do Construtor; os hashes abaixo identificam a amostra examinada e devem ser conferidos novamente após o Construtor sinalizar a versão final. Nenhum teste foi executado nesta etapa.

| Arquivo | SHA-256 da amostra |
|---|---|
| `projeto-dashboard/site/index.html` | `C3DE0E3F89434B502276485550968349BF694B730698E4907BC849CB10B0FB23` |
| `projeto-dashboard/site/estilos.css` | `02C453A0E9A697A42E759CFFE8F8598E1A7971E7FF0BFC3CE9737847619D1FBF` |
| `projeto-dashboard/tests/test_dashboard.py` | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |

Referência da rodada 07: `index.html` `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` e `estilos.css` `0E204F87CD77EE89738A59487D1493010D989C57C45275A8934A594E68423231`. A amostra atual já contém alterações de cabeçalho em relação à referência; como a edição está em andamento, não trato isso como versão final.

## Escopo e critérios pendentes

Examinei `site/index.html`, `site/estilos.css`, `tests/test_dashboard.py`, `tests/browser_acceptance.mjs` e os três relatórios da rodada 07. A aceitação existente cobre HTTP, dados/KPIs, filtros, teclado e largura global a 390/1365 px, mas não verifica especificamente a geometria nem a semântica do novo cabeçalho. Após autorização do Construtor, conferir:

1. **Textos:** título, sobrelinha e introdução existentes permanecem textualmente inalterados; os demais textos da página não sofrem regressão.
2. **Placeholder:** há uma área vazia reservada para futura imagem, sem elemento `<img>` inserido.
3. **Alinhamento/desktop:** título alinhado à esquerda e bloco textual e placeholder em colunas lado a lado em viewport desktop (1365 px).
4. **Mobile:** em viewport estreito (390 px), os blocos empilham-se, com título/texto antes do placeholder.
5. **Overflow:** `document.documentElement.scrollWidth <= innerWidth` em desktop e mobile; nenhum dos blocos do cabeçalho excede a largura disponível.
6. **Padrão F e filtros:** preservar a composição da rodada 07 (filtros à esquerda e indicadores à direita no primeiro nível desktop; gráficos alinhados à esquerda abaixo e tabela depois; fluxo em coluna no mobile), sem regressão em visibilidade, uso por teclado ou interação dos filtros.

## Comandos e evidências pendentes

Não executar enquanto o Construtor estiver editando HTML/CSS. Após confirmação da versão final:

1. Recalcular SHA-256 dos quatro arquivos acima e confirmar que nenhum mudou durante a rodada de testes.
2. `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — suíte reproduzível existente; resultado **PENDENTE**.
3. `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — aceitação no Edge/Chrome, incluindo filtros, teclado e larguras 390/1365 px; resultado **PENDENTE**.
4. Conferência geométrica do cabeçalho em navegador HTTP real, em 1365 e 390 px, com inspeção de `getBoundingClientRect()`, ordem dos blocos, textos, ausência de `<img>` e largura do documento; salvar saída/capturas como evidência temporária fora do workspace. Resultado **PENDENTE**.
5. Conferir novamente o padrão F e a posição/usabilidade dos filtros em ambas as larguras; registrar evidência. Resultado **PENDENTE**.

## Skills e documentação

Os caminhos pedidos nas instruções `.agents/skills/explore-data/SKILL.md`, `.agents/skills/data-visualization/SKILL.md` e `.agents/skills/validate-data/SKILL.md` não existem neste workspace. Os documentos correspondentes estão disponíveis em `.opencode/skills/explore-data/SKILL.md`, `.opencode/skills/data-visualization/SKILL.md` e `.opencode/skills/validate-data/SKILL.md`. Não consultei skills nesta etapa de teste visual.

## Problemas, encaminhamentos e status

- O navegador de aceitação existente não cobre diretamente os novos critérios geométricos do cabeçalho; complementar essa verificação após o fim da edição.
- Não alterei arquivos de produto ou testes e não executei comandos de teste.
- Execução final, evidências e revisão após a edição: **PENDENTES**.

**Status do Tester: PENDENTE — rodada 08.**
