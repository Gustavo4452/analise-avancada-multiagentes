# Relatório do Tester — rodada 02

## Versão examinada

Workspace sem repositório Git/commit. SHA-256 dos arquivos examinados:

| Arquivo | SHA-256 |
|---|---|
| `projeto-dashboard/README.md` | `D3409606D3DA88BDAE0DDBADF100F1D2485CE30077D8BF5D544A9ABDA22E5EED` |
| `projeto-dashboard/tests/test_dashboard.py` | `D6BD121A6DE9F58F64C900086C43711CD1E7402360C2D9D9E3F61B659B39D77A` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |
| `projeto-dashboard/preparar_dados.py` | `6E0E57B62505F752D3143B0E2E6DD04961F3388DDE7236DA195670C6B80CE8A4` |
| `projeto-dashboard/site/index.html` | `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` |
| `projeto-dashboard/site/estilos.css` | `7030592DD9A902C5EB096FBF0FEF7258676C6B07B42AF7796F67970A82CCB165` |
| `projeto-dashboard/site/dashboard.js` | `8502221917A87014FA11C814E93A1171980E0541CCF0F9CFEEC1277354BAA28A` |
| `projeto-dashboard/site/dados/vendas.json` | `5D2DD319DB0A2AFB23925F07F29C19E24C48918A35302D7526862F0E13779097` |
| `projeto-dashboard/site/dados/perfil.json` | `EC5BA37C22F037766EB8BF2B3E0D5B8A090FFC01EE68A3495A6C6DDC197CC899` |
| `papelaria_limpa.csv` | `E25B6C2CDF05A6492F6495A91F9384565629F26E1318039F75734DCD9856995D` |
| `vendas_papelaria.csv` | `BF95B7609E30EB7E3E6A30CFC16E43D9FB5BDFC48A410E49148CCEB92E2494FF` |

O hash do README confere com o registrado pelo Construtor na rodada 02. Os hashes dos testes, produto e fontes também conferem com a versão examinada anteriormente; nenhum arquivo de produto foi alterado pelo Tester.

## Comandos executados e evidências

Ambiente registrado na rodada anterior: Python 3.14.7, Node v24.21.0 e Microsoft Edge 155.0.4283.45.

1. Comando Python exato documentado no README, executado na raiz em PowerShell:
   `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v`
   **OK** — 7 testes passaram em 16,082 s, incluindo os testes de dados e automação de navegador. Evidência: saída do comando na execução desta rodada.
2. Comando de aceitação de navegador exato documentado no README:
   `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site`
   **OK** — saída: `{"status":"passed","browser":"msedge.exe","http":"http://127.0.0.1:57180/","checks":["HTTP/recursos","KPIs versus tabela","filtros isolados e combinados","vazio e limpar","JavaScript","responsividade 390px/1365px","rótulos e foco por teclado"]}`.
3. Os testes aprovados verificam preservação dos CSVs, estrutura e dados preparados, ausência de valores vazios, tipos, duplicatas, fixture conhecido, cálculos independentes e totais apresentados. A aceitação no Edge cobre carregamento HTTP/recursos, indicadores, gráficos e tabela, filtros isolados/combinados, vazio/limpar, JavaScript, larguras 390 px e 1365 px, rótulos e teclado.

## Problemas, pendências e status

- O caminho corrigido para `projeto-dashboard/tests/` no README funcionou. Não encontrei falhas nesta execução; nada a devolver ao Construtor.
- Revisão independente pelo Revisor e aprovação conjunta pelo coordenador: **PENDENTES**. Este status cobre somente a verificação do Tester.
- **Status do Tester: APROVADO.**
