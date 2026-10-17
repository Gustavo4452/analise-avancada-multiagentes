# Relatório do Revisor — rodada 03

## Versão examinada

Workspace sem repositório Git/commit. Os hashes dos arquivos de produto e dos CSVs coincidem com a rodada-02. Apenas `tests/test_dashboard.py` mudou entre as versões revisadas; seu hash confere com o relatório do Tester da rodada-03.

| Arquivo | SHA-256 |
|---|---|
| `papelaria_limpa.csv` | `E25B6C2CDF05A6492F6495A91F9384565629F26E1318039F75734DCD9856995D` |
| `vendas_papelaria.csv` | `BF95B7609E30EB7E3E6A30CFC16E43D9FB5BDFC48A410E49148CCEB92E2494FF` |
| `projeto-dashboard/preparar_dados.py` | `6E0E57B62505F752D3143B0E2E6DD04961F3388DDE7236DA195670C6B80CE8A4` |
| `projeto-dashboard/ANALISE.md` | `F5CFF52A48E32F63BE4B220CC2D5893673F4CC819842BA8B1996363ED4FC6EE3` |
| `projeto-dashboard/README.md` | `D3409606D3DA88BDAE0DDBADF100F1D2485CE30077D8BF5D544A9ABDA22E5EED` |
| `projeto-dashboard/site/index.html` | `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` |
| `projeto-dashboard/site/metodologia.html` | `278C7047989B617299AB580366210EB9DBE511BF29D5AD93A50BA1D638442385` |
| `projeto-dashboard/site/estilos.css` | `7030592DD9A902C5EB096FBF0FEF7258676C6B07B42AF7796F67970A82CCB165` |
| `projeto-dashboard/site/dashboard.js` | `8502221917A87014FA11C814E93A1171980E0541CCF0F9CFEEC1277354BAA28A` |
| `projeto-dashboard/site/dados/vendas.json` | `5D2DD319DB0A2AFB23925F07F29C19E24C48918A35302D7526862F0E13779097` |
| `projeto-dashboard/site/dados/perfil.json` | `EC5BA37C22F037766EB8BF2B3E0D5B8A090FFC01EE68A3495A6C6DDC197CC899` |
| `projeto-dashboard/tests/test_dashboard.py` | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |

## Revisão do fixture e evidências

- Em `test_small_known_fixture_through_real_preparation_path`, confirmei que o teste importa o módulo real `preparar_dados.py`, redireciona `FONTE` e `PASTA_DADOS` para um CSV/pasta temporários e chama `preparar_dados.main()` (linhas 149–185). O teste então lê os JSON efetivamente produzidos e compara com valores esperados definidos manualmente (linhas 187–203): vendas de 2500, 725 e 1200 centavos; 3 transações; 6 unidades; total de 4425 centavos; ticket médio de 1475 centavos; e agrupamentos por categoria, cidade e mês de 4425 centavos. Confere também IDs, nulos, duplicatas e hashes originais antes/depois. Esta cobertura corrige a lacuna apontada na rodada-02; não copia o código de cálculo do produto para gerar os resultados esperados.
- Execução independente da suíte completa: `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — **OK**, 8 testes passaram em 17,563 s, incluindo o fixture e automação do navegador. A saída do fixture mostrou 3 vendas, 6 unidades e total R$ 44,25.
- Aceitação independente: `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK**, Edge (`msedge.exe`), `status: passed`, URL local `http://127.0.0.1:61076/`; verificações: HTTP/recursos, KPIs contra tabela, filtros isolados/combinados, estado vazio/limpar, JavaScript, larguras 390/1365 px, rótulos e teclado.
- A suíte inclui recálculo independente a partir das fontes, exemplo conhecido e preservação dos hashes dos CSVs. A verificação browser cobre os indicadores, gráficos, tabela, atualização por filtros e interação. Hashes do produto e CSVs foram conferidos nesta revisão e permanecem iguais aos da rodada-02.

## Validade da revisão anterior

Revalidei os artefatos de produto examinados na rodada-02: preparação, metodologia, README, HTML/CSS/JS e JSON mantêm exatamente os hashes então registrados. A metodologia e as fórmulas permanecem coerentes; os resultados são valor bruto (não lucro), a granularidade de venda está documentada e as limitações estão explícitas. A interface mantém três indicadores, dois gráficos, tabela, filtros sincronizados, limpeza, mensagem para seleção vazia, formatação e comportamento responsivo/acessível verificados no navegador. O README mantém os caminhos corretos, comandos de preparação/teste/servidor e identifica `site/` como pasta publicável.

Não encontrei alteração adicional de produto ou fonte. Não editei produto nem testes nesta revisão; nenhuma nova execução do Tester é necessária por alteração do Revisor.

## Achados e status

- A pendência registrada pelo Revisor na rodada-02 foi atendida pelo novo teste de integração do fixture e passou na execução independente da suíte.
- Sem defeitos ou pendências encontrados nesta revisão. A aprovação é desta versão identificada pelos hashes acima; a rodada anterior permanece preservada.

**Status do Revisor: APROVADO.**
