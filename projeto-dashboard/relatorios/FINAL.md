# Relatório final — projeto-dashboard

**Status conjunto: APROVADO**

## Fonte, definições e entrega

- CSV confirmado pelo usuário: `papelaria_limpa.csv`; `vendas_papelaria.csv` e os resultados anteriores foram preservados.
- Granularidade: uma linha por venda; `id_venda` identifica a transação. Quantidade de vendas = linhas; unidades = soma de `quantidade`.
- KPIs: valor bruto vendido (`quantidade × preco_unitario`), transações e ticket médio (valor bruto dividido por transações). Valor vendido não é lucro.
- Referência dos dados: 180 transações, 548 unidades, R$ 20.059,00 vendidos e ticket médio R$ 111,44.
- A entrega em `projeto-dashboard/` inclui preparação Python/pandas, metodologia, dashboard estático responsivo, filtros, gráficos, tabela, testes e relatórios. `site/` é a pasta publicável; publicação não incluída.
- Visual: paleta `#6F1D1B`, `#BB9457`, `#432818`, `#99582A`, `#FFE6A7`; rótulos dos gráficos legíveis em telas testadas de 390 px e 1365 px.
- `Decaydence` está configurada apenas como fonte local opcional do título. Não há fonte incorporada no site; só aparecerá em dispositivos onde estiver instalada. A licença no ZIP é não comercial e restringe incorporação/redistribuição.

## Versão final

Sem commit Git. SHA-256 dos arquivos centrais da versão aprovada:

| Arquivo | SHA-256 |
|---|---|
| `papelaria_limpa.csv` | `E25B6C2CDF05A6492F6495A91F9384565629F26E1318039F75734DCD9856995D` |
| `vendas_papelaria.csv` | `BF95B7609E30EB7E3E6A30CFC16E43D9FB5BDFC48A410E49148CCEB92E2494FF` |
| `preparar_dados.py` | `6E0E57B62505F752D3143B0E2E6DD04961F3388DDE7236DA195670C6B80CE8A4` |
| `README.md` | `1284E214AAE2A651670D6D8C81303BFD75BC72F0D4794DD09F61C27EB575646A` |
| `site/estilos.css` | `FAED65359471EE790D3F8917196A775B6C6C3C1ADD9232A4253C4E36DB212751` |
| `site/dashboard.js` | `4F3CA1861B5FDFB57D821B47DFD002F18E70A71CE847BF1875E2FA8014506E9B` |
| `site/index.html` | `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` |
| `site/dados/vendas.json` | `5D2DD319DB0A2AFB23925F07F29C19E24C48918A35302D7526862F0E13779097` |
| `site/dados/perfil.json` | `EC5BA37C22F037766EB8BF2B3E0D5B8A090FFC01EE68A3495A6C6DDC197CC899` |
| `tests/test_dashboard.py` | `7A46428BC05E555B3CEEE72F9E908E53E062441C93BC7725463E4E737AD9B459` |
| `tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |

Construtor (`rodada-06/construtor.md`), Tester (`rodada-06/tester.md`) e Revisor (`rodada-06/revisor.md`) aprovaram a mesma versão. O histórico das rodadas 01–06 foi preservado.

## Testes e evidências

- Suíte Python: **8 testes aprovados**, incluindo integridade dos CSVs, cálculos independentes e fixture conhecido que executa a preparação real e compara os dados produzidos.
- Aceitação automatizada no Microsoft Edge: **aprovada**, verificando HTTP/recursos, KPIs, gráficos, tabela, filtros, estado vazio, limpeza, JavaScript, teclado e viewports 390/1365 px.
- Geometria dos gráficos: fonte renderizada mínima de 13 px; sem rótulos fora da área ou sobrepostos nos dois viewports testados. Evidências nos relatórios da rodada 06.
- Revisão independente: **aprovada**. Ressalvas não bloqueadoras: Decaydence depende de instalação local; o foco foi inspecionado visualmente, mas seu anel não é medido por pixels na automação; a barra ouro isolada tem contraste inferior a 3:1, compensado por contorno escuro e rótulos textuais.

## Como preparar, testar e abrir

Execute na raiz do workspace, no PowerShell:

```powershell
& .\.venv\Scripts\python.exe .\projeto-dashboard\preparar_dados.py
& .\.venv\Scripts\python.exe -m unittest discover -s .\projeto-dashboard\tests -v
node .\projeto-dashboard\tests\browser_acceptance.mjs .\projeto-dashboard\site
py -m http.server 8000 --directory .\projeto-dashboard\site
```

Com o servidor ativo, abra `http://localhost:8000`; encerre com `Ctrl+C`. Para usar Decaydence localmente, extraia `Decaydence.otf` de `projeto-dashboard/decaydence.zip`, instale-a no Windows e atualize a página. Respeite a licença não comercial incluída; não publique nem distribua o arquivo da fonte. Para hospedagem estática, publique somente `projeto-dashboard/site/`.
