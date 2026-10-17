# Relatório do Revisor — rodada 02

## Versão examinada

Workspace sem repositório Git/commit. SHA-256 da versão revisada:

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
| `projeto-dashboard/tests/test_dashboard.py` | `D6BD121A6DE9F58F64C900086C43711CD1E7402360C2D9D9E3F61B659B39D77A` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |

Os hashes do README, testes, fontes e artefatos principais conferem com os relatórios do Construtor/Tester. A preparação regenerou os JSON sem alterar seus hashes. Não alterei produto nem testes.

## Checagens e evidências

- Revisei `preparar_dados.py`, `ANALISE.md`, `README.md`, HTML/CSS/JS, JSON, os dois testes e os relatórios das rodadas 01/02.
- `& .\.venv\Scripts\python.exe .\projeto-dashboard\preparar_dados.py` — **OK**: 180 transações, 548 unidades, período 2026-01-01 a 2026-03-31 e total bruto de R$ 20.059,00. A fonte manteve o SHA-256 registrado.
- Recálculo independente em Python padrão, usando `csv` e `Decimal` diretamente de `papelaria_limpa.csv` — **OK**: 180 linhas/IDs únicos; total R$ 20.059,00; média R$ 111,44; categoria Acessórios R$ 10.517,00, Livros R$ 7.438,00, Papelaria R$ 2.104,00; cidade Campinas R$ 8.578,00, Santos R$ 6.937,50, Sorocaba R$ 4.543,50; meses janeiro R$ 6.235,00, fevereiro R$ 6.181,00, março R$ 7.643,00; nenhuma divergência entre quantidade × preço e valor informado.
- `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — **OK**, 7 testes, 16,373 s.
- `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK**, Edge (`msedge.exe`), saída `status: passed`; verificou HTTP/recursos, KPIs contra tabela, gráficos, filtros isolados/combinados, vazio/limpar, JavaScript, larguras 390/1365 px, rótulos e teclado.
- Servidor local documentado: iniciei `http.server` com o diretório `site/` e consultei `/` e `/dados/vendas.json` — **OK**, ambos HTTP 200. Usei o interpretador do ambiente para iniciar o módulo; o teste de navegador também confirmou carregamento HTTP do site.
- O README corrigido aponta para `tests/`, documenta preparação, suíte Python, aceitação no navegador e servidor HTTP; `site/` está identificado como pasta publicável. Referências locais do HTML estão presentes.

## Avaliação e problema a devolver

Metodologia, granularidade, arredondamento monetário em centavos, tratamento explícito de duplicatas, indicadores e limitações são coerentes com os dados observados. O dashboard contém os três KPIs, dois gráficos, tabela, filtros sincronizados, estado vazio, limpeza dos filtros e formatação monetária. Os cálculos e a interface atual passaram na execução independente.

- **Cobertura obrigatória incompleta — devolver ao Tester.** `test_independent_small_known_example` em `tests/test_dashboard.py` (linhas 136–145) só monta três pares quantidade/preço e recalcula asserções aritméticas dentro do próprio teste. Não fornece esse fixture à lógica testada nem compara o resultado conhecido com qualquer saída do produto. Reproduzível: execute a suíte atual; essas asserções passam mesmo que `preparar_dados.py` e o agregador do dashboard não implementem cálculo algum. Portanto, o teste conhecido não protege a lógica do produto e não satisfaz a intenção de um caso pequeno de resultado conhecido. Construa um teste independente que exercite o caminho de cálculo do produto com o fixture e compare a saída a totais esperados, sem copiar a implementação; depois rode novamente a suíte e preserve o critério.
- Evidências de execução das rodadas anteriores são resumos de terminal, não logs arquivados. Nesta revisão, porém, a suíte completa e a aceitação no Edge foram executadas e passaram nesta versão.
- **PENDENTES:** nova execução do Tester após a correção da cobertura fixture; nova revisão do Revisor da versão alterada e atualização do relatório final conjunto. Não editei testes, logo não houve mudança que exija reteste nesta rodada.

## Status

**REPROVADO** — produto e testes executados passaram, mas falta corrigir a cobertura do exemplo conhecido exigido. Isso não equivale a aprovação conjunta. Próximo passo: Tester acrescenta o teste significativo descrito acima, executa a suíte completa e entrega o relatório; em seguida, Revisor verifica a nova versão.
