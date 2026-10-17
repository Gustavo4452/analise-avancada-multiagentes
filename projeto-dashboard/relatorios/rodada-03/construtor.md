# Relatório do Construtor — rodada 03

## Versão examinada

Workspace sem repositório Git/commit. Nesta rodada, a única alteração de produto foi corrigir a referência textual no README de `relatorios/rodada-01/construtor.md` para `relatorios/rodada-02/construtor.md`. O destino existe. Não alterei testes nem relatórios anteriores.

## Hashes SHA-256 atuais

| Arquivo | SHA-256 |
|---|---|
| `projeto-dashboard/README.md` | `1284E214AAE2A651670D6D8C81303BFD75BC72F0D4794DD09F61C27EB575646A` |
| `projeto-dashboard/preparar_dados.py` | `6E0E57B62505F752D3143B0E2E6DD04961F3388DDE7236DA195670C6B80CE8A4` |
| `projeto-dashboard/ANALISE.md` | `F5CFF52A48E32F63BE4B220CC2D5893673F4CC819842BA8B1996363ED4FC6EE3` |
| `projeto-dashboard/site/index.html` | `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` |
| `projeto-dashboard/site/metodologia.html` | `278C7047989B617299AB580366210EB9DBE511BF29D5AD93A50BA1D638442385` |
| `projeto-dashboard/site/estilos.css` | `7030592DD9A902C5EB096FBF0FEF7258676C6B07B42AF7796F67970A82CCB165` |
| `projeto-dashboard/site/dashboard.js` | `8502221917A87014FA11C814E93A1171980E0541CCF0F9CFEEC1277354BAA28A` |
| `projeto-dashboard/site/dados/vendas.json` | `5D2DD319DB0A2AFB23925F07F29C19E24C48918A35302D7526862F0E13779097` |
| `projeto-dashboard/site/dados/perfil.json` | `EC5BA37C22F037766EB8BF2B3E0D5B8A090FFC01EE68A3495A6C6DDC197CC899` |
| `projeto-dashboard/tests/test_dashboard.py` | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |

### Relatórios preservados e contexto das rodadas

| Relatório | SHA-256 | Registro relevante |
|---|---|---|
| `relatorios/rodada-02/construtor.md` | `0A07EEA069ADC30DA3FD972AB1C40030F20AD3E6C48FB64CD213A07C57600E4A` | Construtor aprovou a correção do caminho `tests/`; 7 testes e aceitação browser foram executados naquela rodada. |
| `relatorios/rodada-02/tester.md` | `857383E9CBE29107BA8057B7FEAEFC57D7AE1312BC574A15F88C903E15E9D5E2` | Tester aprovou a versão então examinada após 7 testes; aguardava revisão independente. |
| `relatorios/rodada-02/revisor.md` | `513EEDF7332EE60572F88405788BF03B0C2B02595858A808808BC83F53F00F3C` | Revisor reprovou a cobertura do exemplo conhecido, pois não exercitava a preparação real. |
| `relatorios/rodada-03/tester.md` | `0E0E0D4D767610D6EC12D3B6EC207E8E541504E2BB9851336CB372AC438B522D` | Tester aprovou a versão examinada após fixture de integração e 8 testes, incluindo aceitação Edge. |
| `relatorios/rodada-03/revisor.md` | `5DB6F8A004E0845CEDB75A3213D40DBF31C5E68650B7208C7D2BC90211926847` | Revisor aprovou a versão identificada no seu relatório. |

Os relatórios do Tester e do Revisor da rodada 03 registram README com hash `D3409606…`, anterior à correção textual desta rodada. As aprovações deles não cobrem o README atual, de hash `1284E214…`.

## Comandos e evidências desta rodada

- Alteração: somente referência relativa no README, de `rodada-01` para `rodada-02`.
- Não executei a suíte Python nem o teste browser nesta rodada: a alteração é exclusivamente documental. Portanto, não registro novos resultados de teste.
- Os hashes acima identificam a versão atual; os hashes de testes, script, site e dados permanecem os examinados nos relatórios de rodada 03.

## Pendências e status

- **PENDENTE:** Tester deve revalidar esta versão do README, junto à versão atual identificada pelos hashes acima, e atualizar o seu relatório.
- **PENDENTE:** Revisor deve revalidar a mesma versão após a atualização do Tester.
- **Status do Construtor: APROVADO** para a correção documental solicitada e para o produto identificado acima. Isto não é aprovação conjunta nem substitui a revalidação pendente dos demais papéis.
