# Plano inicial do Tester — rodada 10

## Versão de partida e hashes amostrais

Workspace sem commit Git. Li `projeto-dashboard/relatorios/rodada-09/construtor.md`, `projeto-dashboard/relatorios/rodada-09/tester.md`, `site/index.html`, `site/estilos.css` e os testes existentes. A amostra corresponde aos hashes finais registrados para a rodada 09; recalcular após a entrega do Construtor antes dos testes finais.

| Arquivo | SHA-256 amostral |
|---|---|
| `projeto-dashboard/site/index.html` | `C3DE0E3F89434B502276485550968349BF694B730698E4907BC849CB10B0FB23` |
| `projeto-dashboard/site/estilos.css` | `E1B3C34AF56DC88666DF559CA27C73444207D3DA51F45763ADD2B64054157DB6` |
| `projeto-dashboard/site/dashboard.js` | `4F3CA1861B5FDFB57D821B47DFD002F18E70A71CE847BF1875E2FA8014506E9B` |
| `projeto-dashboard/tests/test_dashboard.py` | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |

Não executei testes e não alterei arquivos de produto ou teste nesta etapa.

### Referência da rodada 09

O relatório final do Tester registra que, a 1365 px, `.topo__texto` começava em x=95 e `.conteudo` também em x=95; placeholder à direita em x=879 e watermark vertical. A suíte Python passou com 8 testes e a aceitação no Edge passou. Essas medidas e resultados servem apenas como baseline; não são validação da mudança da rodada 10. Evidências anteriores estão em `C:\Users\IADADOS\AppData\Local\Temp\opencode\round09-tester-layout.txt` e capturas `round09-tester-1365.png`/`round09-tester-mobile.png`.

## Critérios pendentes para a versão final

1. **Deslocamento do título:** em desktop (1365 px), o título e seu contêiner textual devem estar bem mais à esquerda, próximo de x≈20 px (em vez do x=95 px da rodada 09); verificar `getBoundingClientRect()` do `.topo__interno`, `.topo__texto` e `h1` para tornar explícita a posição alcançada.
2. **Conteúdo preservado:** `.conteudo` deve manter o alinhamento/posição da rodada 09 (x≈95 px a 1365 px); não deslocar nem reformatar o dashboard para mover o cabeçalho.
3. **Placeholder e watermark desktop:** placeholder permanece à direita dos textos, sem caixa decorativa; watermark discreta vertical entre texto e área reservada.
4. **Mobile:** em 390 px, margens laterais confortáveis, título/textos antes do placeholder, divisor horizontal antes da área reservada e conteúdo dentro da largura.
5. **Sem overflow:** confirmar `document.documentElement.scrollWidth <= innerWidth` em 1365 e 390 px e medir se os elementos de cabeçalho não extrapolam a viewport; incluir larguras intermediárias (1024/900/768 px) se viável.
6. **Padrão F:** no desktop, filtros e indicadores mantêm a faixa inicial; gráficos permanecem alinhados à esquerda abaixo e tabela depois. No mobile, fluxo e ordem verticais permanecem coerentes.
7. **Interações e acessibilidade:** repetir aceitação de filtros isolados/combinados, estado vazio, limpar e navegação por teclado; verificar rótulos, visibilidade/alcance dos controles, foco visível, ordem de leitura e semântica (H1 e link pular conteúdo) sem regressão.
8. **Textos/divisória:** preservar textos existentes e a separação responsiva/placeholder estabelecidos na rodada 09, salvo alteração visual de posicionamento solicitada.

## Comandos e evidências pendentes

Executar somente após o Construtor confirmar a entrega final da rodada 10:

1. Recalcular SHA-256 dos cinco arquivos acima e confirmar hashes estáveis antes/depois dos testes.
2. `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — suíte completa; **PENDENTE**.
3. `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — interação HTTP real no Edge/Chrome, filtros, botões, teclado e larguras 390/1365 px; **PENDENTE**.
4. Inspeção HTTP/Edge headless em 1365 e 390 px (e pontos intermediários se possível): medir alinhamento do cabeçalho versus `.conteudo`, posição do placeholder/divisor, ordem, estilos computados e overflow. Salvar saída e capturas em `C:\Users\IADADOS\AppData\Local\Temp\opencode\`, fora do projeto; **PENDENTE**.
5. Inspecionar visualmente as capturas e conferir padrão F, controles visíveis/utilizáveis e ordem de leitura; **PENDENTE**.

## Skills, pendências e status

Os caminhos `.agents/skills/explore-data/SKILL.md`, `.agents/skills/data-visualization/SKILL.md` e `.agents/skills/validate-data/SKILL.md` não existem neste workspace. Documentos correspondentes disponíveis em `.opencode/skills/explore-data/SKILL.md`, `.opencode/skills/data-visualization/SKILL.md` e `.opencode/skills/validate-data/SKILL.md`. Não consultei skills para este plano visual.

- Execução dos testes e inspeção da versão final: **PENDENTES**, aguardando o Construtor.
- Não declarar aprovação nesta etapa.

**Status do Tester: PENDENTE — rodada 10.**
