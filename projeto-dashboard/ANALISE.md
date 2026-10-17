# Análise das vendas da papelaria

## Pergunta e fonte

Este painel resume como o valor bruto vendido se distribui por categoria e por mês, com recortes por cidade e categoria. A fonte utilizada pelo projeto é **`papelaria_limpa.csv`**, com 180 linhas e 9 colunas, cobrindo 1º de janeiro a 31 de março de 2026. A linhagem e a limpeza anterior estão registradas em `../resumo.md` e `../verificacao.md`; esses arquivos e os CSVs existentes são preservados.

## Granularidade e definições

- Cada linha representa uma transação/venda; `id_venda` identifica a transação e é único na fonte usada aqui.
- **Quantidade de vendas** = número de linhas/transações. Não é a soma de itens.
- **Unidades vendidas** = soma de `quantidade` (548 no conjunto completo).
- **Valor bruto vendido** = soma de `valor_venda`, que deve ser igual a `quantidade × preco_unitario` em cada linha.
- **Ticket médio** = valor bruto vendido dividido pelo número de transações. O painel mostra R$ 0,00 quando o filtro não retorna venda, sem dividir por zero.
- Os cálculos monetários do JSON são guardados em centavos inteiros; a exibição é formatada em reais no navegador.

## Preparação e regras

Execute `preparar_dados.py` com pandas. O script confirma as colunas esperadas e exige que os valores estejam completos, que `id_venda` seja único, que datas sejam ISO válidas e que quantidade, preço e valor sejam positivos. Também verifica em cada registro a igualdade entre valor informado e quantidade vezes preço. O script **não remove, corrige ou deduplica registros**: falha explicitamente se encontrar duplicatas ou inconsistências, para que a fonte seja investigada. Para o CSV atual foram encontrados zero nulos e zero duplicatas exatas; todos os 180 registros foram mantidos.

Saídas regeneráveis: `site/dados/vendas.json` (registros para o navegador) e `site/dados/perfil.json` (contagens, período e agregações de verificação). O dashboard calcula de novo os totais para aplicar filtros.

## Resultado do conjunto completo

- 180 transações; 548 unidades.
- Total bruto vendido: **R$ 20.059,00**.
- Ticket médio: **R$ 111,44** (R$ 20.059,00 ÷ 180; exibido arredondado a centavos).
- Totais por categoria: Acessórios **R$ 10.517,00**; Livros **R$ 7.438,00**; Papelaria **R$ 2.104,00**.
- Totais por cidade: Campinas **R$ 8.578,00**; Santos **R$ 6.937,50**; Sorocaba **R$ 4.543,50**.
- Os totais por categoria e por cidade somam R$ 20.059,00. O gráfico mensal é recalculado a partir das datas e valores de cada transação.

## Limitações

“Valor bruto vendido” não é lucro: os dados não incluem custos, despesas, margens, devoluções ou confirmação externa de pagamento. A contagem de venda depende da granularidade declarada de uma linha por transação e de `id_venda` único. A análise confirma consistência interna do CSV limpo e não reconcilia as vendas com um sistema financeiro. O período é de três meses, insuficiente para afirmar tendências sazonais anuais.
