# Relatório do Construtor — rodada 02

## Versão examinada

Workspace sem repositório Git/commit. Correção limitada a `projeto-dashboard/README.md`; os testes e relatórios anteriores foram preservados.

| Arquivo | SHA-256 |
|---|---|
| `projeto-dashboard/README.md` | `D3409606D3DA88BDAE0DDBADF100F1D2485CE30077D8BF5D544A9ABDA22E5EED` |
| `projeto-dashboard/tests/test_dashboard.py` | `D6BD121A6DE9F58F64C900086C43711CD1E7402360C2D9D9E3F61B659B39D77A` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |
| `papelaria_limpa.csv` | `E25B6C2CDF05A6492F6495A91F9384565629F26E1318039F75734DCD9856995D` |
| `vendas_papelaria.csv` | `BF95B7609E30EB7E3E6A30CFC16E43D9FB5BDFC48A410E49148CCEB92E2494FF` |

## Alteração

- Corrigido o caminho dos testes Python no README de `projeto-dashboard/testes/` para `projeto-dashboard/tests/`.
- Removida a nota obsoleta que dizia que a suíte ainda não havia sido entregue.
- Documentados os dois comandos realmente usados: a suíte Python e os testes de aceitação no navegador com Node.js.
- Nenhum teste, CSV ou relatório de rodada anterior foi alterado.

## Comandos e resultados

Executados na raiz do workspace, em PowerShell:

1. `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — **OK**, 7 testes, 16,224 s. Incluiu verificações independentes dos dados e interação no navegador. A saída ficou no terminal desta rodada.
2. `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK**, saída: `{"status":"passed","browser":"msedge.exe","http":"http://127.0.0.1:59188/","checks":["HTTP/recursos","KPIs versus tabela","filtros isolados e combinados","vazio e limpar","JavaScript","responsividade 390px/1365px","rótulos e foco por teclado"]}`.
3. Os testes confirmaram que os hashes de `papelaria_limpa.csv` e `vendas_papelaria.csv` permanecem iguais aos valores previamente registrados pelo Tester.

## Pendências e status

- **PENDENTE:** atualização do relatório do Tester para registrar a nova execução após a correção do README.
- **PENDENTE:** revisão independente e aprovação conjunta pelo Revisor/coordenador. Este relatório não declara a entrega final aprovada.
- **Status do Construtor: APROVADO** para a correção solicitada; suíte completa e aceitação no navegador passaram.
