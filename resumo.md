# Tratamento e perfil: vendas_papelaria.csv

## Escopo e estrutura
- Fonte: `vendas_papelaria.csv`, preservado sem alterações. Processamento local com `.venv/Scripts/python.exe`; sem banco de dados nem integrações.
- Granularidade: uma linha por venda; identificador informado: `id_venda`.
- Original: **182 linhas e 8 colunas**.
- Período coberto: **2026-01-01 a 2026-03-31**.
- Cópia tratada: **180 linhas e 9 colunas**, incluindo a nova coluna `valor_venda`.

## Problemas encontrados e tratamento
- **2 linhas excedentes de duplicatas exatas**, comparando todas as colunas originais; mantida uma ocorrência de cada linha idêntica. Não removi registros apenas por coincidência de identificador.
- **Cidade:** espaços no início/fim em 6 linhas; removidos.
- **Categoria:** 3 valores padronizados para `Livros`, `Papelaria` ou `Acessórios`, normalizando caixa. 3 ocorrências estavam grafadas em minúsculas. Nenhuma categoria inesperada.
- **Forma de pagamento:** 4 campos vazios substituídos por `Não informado`.
- **Valor da venda:** calculado como `quantidade * preco_unitario` usando aritmética decimal.
- Na validação, após remover as duplicatas exatas, `id_venda` ficou único; não há datas inválidas nem outros campos vazios. Quantidades e preços são positivos.

## Perfil resumido da cópia tratada
- Categorias: Acessórios: 65, Livros: 54, Papelaria: 61.
- Formas de pagamento: Cartão: 52, Dinheiro: 56, Não informado: 4, Pix: 68.
- Período: 2026-01-01 a 2026-03-31; quantidade entre 1 e 5; preço unitário entre 3.5 e 95.
- Soma de `valor_venda`: **R$ 20.059,00**.

## Arquivos
- `papelaria_limpa.csv`: cópia de trabalho tratada.
- `resumo.md`: registro deste tratamento e dos problemas encontrados.
