# Relatório do Tester — rodada 04

## Versão examinada

Workspace sem repositório Git/commit. SHA-256 após os testes:

| Arquivo | SHA-256 |
|---|---|
| `projeto-dashboard/README.md` | `1284E214AAE2A651670D6D8C81303BFD75BC72F0D4794DD09F61C27EB575646A` |
| `projeto-dashboard/tests/test_dashboard.py` | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |
| `projeto-dashboard/preparar_dados.py` | `6E0E57B62505F752D3143B0E2E6DD04961F3388DDE7236DA195670C6B80CE8A4` |
| `projeto-dashboard/site/index.html` | `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` |
| `projeto-dashboard/site/metodologia.html` | `278C7047989B617299AB580366210EB9DBE511BF29D5AD93A50BA1D638442385` |
| `projeto-dashboard/site/estilos.css` | `7030592DD9A902C5EB096FBF0FEF7258676C6B07B42AF7796F67970A82CCB165` |
| `projeto-dashboard/site/dashboard.js` | `8502221917A87014FA11C814E93A1171980E0541CCF0F9CFEEC1277354BAA28A` |
| `projeto-dashboard/site/dados/vendas.json` | `5D2DD319DB0A2AFB23925F07F29C19E24C48918A35302D7526862F0E13779097` |
| `projeto-dashboard/site/dados/perfil.json` | `EC5BA37C22F037766EB8BF2B3E0D5B8A090FFC01EE68A3495A6C6DDC197CC899` |
| `papelaria_limpa.csv` | `E25B6C2CDF05A6492F6495A91F9384565629F26E1318039F75734DCD9856995D` |
| `vendas_papelaria.csv` | `BF95B7609E30EB7E3E6A30CFC16E43D9FB5BDFC48A410E49148CCEB92E2494FF` |

O hash do README coincide com o informado pelo Construtor. Os hashes dos testes, produto e CSVs coincidem com a versão da rodada 03; não alterei produto nem testes. Li `relatorios/rodada-03/construtor.md` e `relatorios/rodada-03/tester.md`; os relatórios históricos permanecem preservados.

## Comandos executados e evidências

Ambiente: Python 3.14.7, Node v24.21.0, Microsoft Edge 155.0.4283.45.

1. Comando Python exato do README: `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — **OK**, 8 testes passaram em 17,404 s, sem skips/falhas. Incluiu fixture de integração conhecido e teste automatizado no navegador. Evidência: saída do comando nesta rodada.
2. Aceitação Edge exata do README: `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK**; saída: `{"status":"passed","browser":"msedge.exe","http":"http://127.0.0.1:53377/","checks":["HTTP/recursos","KPIs versus tabela","filtros isolados e combinados","vazio e limpar","JavaScript","responsividade 390px/1365px","rótulos e foco por teclado"]}`.
3. Confirmação de destino README: `Test-Path projeto-dashboard/relatorios/rodada-02/construtor.md` — **True**.
4. Recalculei hashes após as execuções; CSVs, dados preparados, código e site mantêm os valores registrados na versão anterior.

## Pendências e status

- Não encontrei falhas a devolver ao Construtor nesta revalidação.
- Nova revisão independente e aprovação conjunta pelo Revisor/coordenador: **PENDENTES**. Este status cobre somente a verificação do Tester.
- **Status do Tester: APROVADO — rodada 04.**
