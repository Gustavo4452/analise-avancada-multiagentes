# Verificação da análise de vendas da papelaria

## Avaliação geral: pronta para compartilhar, com ressalva

Os cálculos da cópia limpa e as agregações dos gráficos conferem. A ressalva principal é que `valor_venda` representa valor bruto vendido, não lucro. A validação foi feita somente com os arquivos locais, sem cruzamento com registros financeiros externos.

## Arquivos e método conferidos

- `vendas_papelaria.csv`: 182 linhas de dados e 8 colunas.
- `papelaria_limpa.csv`: 180 linhas de dados e 9 colunas.
- `resumo.md`: conferi as quantidades e o tratamento descrito; estão consistentes com os CSVs.
- `graficos.py`: conferi a leitura da cópia limpa e os agrupamentos usados para os gráficos.
- Recalculei os valores com `.venv/Scripts/python.exe`, usando `Decimal` e a fórmula `quantidade × preco_unitario`.
- Comparei cada linha limpa com a transformação esperada das linhas originais após remover apenas duplicatas exatas. Não encontrei diferenças.

## Recálculos

- **Vendas:** 180 linhas e 180 `id_venda` distintos na cópia limpa.
- **Unidades vendidas:** soma da coluna `quantidade` = 548. É uma medida diferente da quantidade de vendas.
- **Total vendido:** soma recalculada de `quantidade × preco_unitario` = **R$ 20.059,00**.
- Soma da coluna calculada `valor_venda` = **R$ 20.059,00**; coincide com o recálculo independente.
- O CSV original contém 2 linhas excedentes de duplicatas exatas. Se contadas antes da deduplicação, o total seria R$ 20.066,00, ou R$ 7,00 a mais. As linhas repetidas são `V0010` e `V0020`, cada uma com valor de R$ 3,50; removê-las uma vez cada explica a diferença.

### Totais por categoria

| Categoria | Valor vendido |
|---|---:|
| Acessórios | R$ 10.517,00 |
| Livros | R$ 7.438,00 |
| Papelaria | R$ 2.104,00 |
| **Soma das categorias** | **R$ 20.059,00** |

A soma por categoria coincide com o total geral recalculado.

### Totais por cidade

| Cidade | Valor vendido |
|---|---:|
| Campinas | R$ 8.578,00 |
| Santos | R$ 6.937,50 |
| Sorocaba | R$ 4.543,50 |
| **Soma das cidades** | **R$ 20.059,00** |

A soma por cidade também coincide com o total geral.

## Revisão do código e das conclusões

- `graficos.py` lê `papelaria_limpa.csv` pelo caminho relativo à pasta do próprio script, converte `valor_venda` para número e soma esse campo por `categoria` e por `cidade`.
- Os totais calculados pelo código correspondem aos recálculos acima. Os gráficos usam eixo vertical com limite inferior zero e exibem valores em reais.
- A conclusão suportada pelos dados é comparativa: Acessórios tem o maior valor vendido entre as categorias; Campinas tem o maior entre as cidades. Isso não indica lucro ou margem, pois custos não estão disponíveis.
- `resumo.md` informa corretamente 182 × 8 no original, 180 × 9 na cópia limpa e total de R$ 20.059,00. Não encontrei erro que exigisse alterar o resumo ou `graficos.py`.

## Ressalvas

- “Quantidade de vendas” foi interpretada como número de transações, pois cada linha representa uma venda e `id_venda` a identifica: **180 vendas**. A soma de unidades é **548**.
- O total de R$ 20.059,00 é valor bruto calculado a partir de quantidade e preço unitário; não desconta custos, devoluções ou outras despesas e, portanto, não é lucro.
- A validação confirma consistência interna dos arquivos locais, não a exatidão das vendas frente a uma fonte financeira independente.
