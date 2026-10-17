# Relatório final do Revisor — rodada 04

## Versão examinada

Workspace sem repositório Git/commit. A versão é identificada pelo README atualizado e pelos hashes abaixo. `relatorios/rodada-02/construtor.md` existe; a referência relativa do README aponta para esse arquivo. A única alteração de produto desde a rodada-03 é documental no README. Os demais hashes conferem com as rodadas anteriores e com o relatório do Tester da rodada-04.

| Arquivo | SHA-256 |
|---|---|
| `papelaria_limpa.csv` | `E25B6C2CDF05A6492F6495A91F9384565629F26E1318039F75734DCD9856995D` |
| `vendas_papelaria.csv` | `BF95B7609E30EB7E3E6A30CFC16E43D9FB5BDFC48A410E49148CCEB92E2494FF` |
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

## Checagens e evidências

- Li `relatorios/rodada-02/revisor.md`, `relatorios/rodada-03/revisor.md`, `relatorios/rodada-03/construtor.md` e `relatorios/rodada-04/tester.md`. A sequência de versões e a correção documental estão consistentes; as rodadas anteriores foram preservadas.
- Confirmei o README SHA-256 solicitado (`1284E214…`) e que `projeto-dashboard/relatorios/rodada-02/construtor.md` existe.
- Recalculei hashes das fontes, preparação, análise, README, HTML/CSS/JS, JSON e testes. CSVs, produto e testes estão inalterados em relação à rodada-03; o README tem o novo hash esperado.
- `& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v` — **OK**, 8 testes passaram em 17,376 s, sem falhas nem skips. Incluiu o fixture conhecido que invoca `preparar_dados.main()` e a automação do navegador. O fixture produziu 3 vendas, 6 unidades e R$ 44,25.
- `node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site` — **OK**, Microsoft Edge, saída `status: passed`, URL local `http://127.0.0.1:60472/`. Verificações reportadas: HTTP/recursos, KPIs versus tabela, filtros isolados/combinados, vazio/limpar, JavaScript, responsividade 390/1365 px, rótulos e teclado.

## Validade da avaliação anterior

Os hashes do produto coincidem com a revisão aprovada da rodada-03; portanto, a avaliação de metodologia, fórmulas, dados preparados e dashboard continua válida. A suíte passou de novo, incluindo o teste de fixture real e as verificações independentes de fontes e agregações. A mudança documental do README é a referência para `rodada-02/construtor.md`; o alvo foi confirmado existente. Os comandos documentados de testes continuam corretos, conforme execução independente acima e evidências da rodada-04 do Tester.

Não alterei arquivos de produto, fontes ou testes. Não encontrei defeitos nem pendências nesta validação.

## Status

**APROVADO** — validação final do Revisor para a versão identificada pelos hashes acima. A aprovação cobre o produto, os testes e a correção documental atual; o coordenador pode consolidar o relatório `relatorios/FINAL.md`.
