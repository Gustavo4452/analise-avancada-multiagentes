# Relatório do Tester — rodada 03

## Versão examinada

Workspace sem repositório Git/commit. SHA-256 após as execuções:

| Arquivo | SHA-256 |
|---|---|
| `projeto-dashboard/tests/test_dashboard.py` | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |
| `projeto-dashboard/preparar_dados.py` | `6E0E57B62505F752D3143B0E2E6DD04961F3388DDE7236DA195670C6B80CE8A4` |
| `projeto-dashboard/README.md` | `D3409606D3DA88BDAE0DDBADF100F1D2485CE30077D8BF5D544A9ABDA22E5EED` |
| `projeto-dashboard/site/index.html` | `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` |
| `projeto-dashboard/site/metodologia.html` | `278C7047989B617299AB580366210EB9DBE511BF29D5AD93A50BA1D638442385` |
| `projeto-dashboard/site/estilos.css` | `7030592DD9A902C5EB096FBF0FEF7258676C6B07B42AF7796F67970A82CCB165` |
| `projeto-dashboard/site/dashboard.js` | `8502221917A87014FA11C814E93A1171980E0541CCF0F9CFEEC1277354BAA28A` |
| `projeto-dashboard/site/dados/vendas.json` | `5D2DD319DB0A2AFB23925F07F29C19E24C48918A35302D7526862F0E13779097` |
| `projeto-dashboard/site/dados/perfil.json` | `EC5BA37C22F037766EB8BF2B3E0D5B8A090FFC01EE68A3495A6C6DDC197CC899` |
| `papelaria_limpa.csv` | `E25B6C2CDF05A6492F6495A91F9384565629F26E1318039F75734DCD9856995D` |
| `vendas_papelaria.csv` | `BF95B7609E30EB7E3E6A30CFC16E43D9FB5BDFC48A410E49148CCEB92E2494FF` |

Os hashes do produto e dos CSVs coincidem com a versão examinada na rodada 02. Só `tests/test_dashboard.py` foi alterado nesta atividade; os CSVs de fixture e as saídas temporárias foram criados fora do produto e removidos ao fim do teste. Relatórios das rodadas 01 e 02 foram preservados.

## Correção da lacuna apontada pelo Revisor

Acrescentei `test_small_known_fixture_through_real_preparation_path`. O teste grava um CSV temporário de três vendas com quantidades/preços `2 × 12.50`, `1 × 7.25` e `3 × 4.00`, redireciona `preparar_dados.FONTE` e `preparar_dados.PASTA_DADOS` com `unittest.mock`, e invoca o `preparar_dados.main()` real. Não reproduz a lógica de conversão ou agregação do produto; compara a saída JSON com expectativas manuais:

- valores por venda: `2500`, `725`, `1200` centavos;
- perfil: 3 transações, 6 unidades, total de `4425` centavos e ticket médio de `1475` centavos;
- 3 IDs únicos, zero duplicatas e nulos;
- totais por categoria `Papelaria`, cidade `Campinas` e mês `2026-01`: `4425` centavos cada.

O teste também confirma que os hashes dos CSVs originais e limpos permanecem iguais antes/depois da execução com fixture. As asserções aritméticas independentes anteriores foram preservadas.

## Comandos executados e evidências

Ambiente: Python 3.14.7, Node v24.21.0, Microsoft Edge 155.0.4283.45.

1. Teste focal: `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -p test_dashboard.py -k small_known_fixture -v` — **OK**, 1 teste. A saída do `main()` informou 3 vendas, 6 unidades e R$ 44,25, gravadas na pasta temporária.
2. Suíte completa: `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — **OK**, 8 testes passaram em 17,184 s, incluindo execução browser automatizada. Evidência: saída do comando nesta rodada.
3. Aceitação Edge independente: `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK**; saída: `{"status":"passed","browser":"msedge.exe","http":"http://127.0.0.1:60766/","checks":["HTTP/recursos","KPIs versus tabela","filtros isolados e combinados","vazio e limpar","JavaScript","responsividade 390px/1365px","rótulos e foco por teclado"]}`.
4. Recalculei SHA-256 do produto e dos dois CSVs após os testes; todos coincidem com a rodada anterior. Não houve falha de produto a devolver ao Construtor.

## Pendências e status

- Lacuna indicada pelo Revisor coberta pelo novo teste de integração do caminho real de preparação.
- Nova revisão independente do Revisor e aprovação conjunta pelo coordenador: **PENDENTES**. Este relatório aprova somente o trabalho do Tester.
- **Status do Tester: APROVADO.**
