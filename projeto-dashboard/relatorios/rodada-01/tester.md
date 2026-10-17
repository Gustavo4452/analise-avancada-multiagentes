# Relatório do Tester — rodada 01

## Versão examinada

Não há repositório Git/commit neste workspace. SHA-256 dos arquivos relevantes:

| Arquivo | SHA-256 |
|---|---|
| `vendas_papelaria.csv` | `BF95B7609E30EB7E3E6A30CFC16E43D9FB5BDFC48A410E49148CCEB92E2494FF` |
| `papelaria_limpa.csv` | `E25B6C2CDF05A6492F6495A91F9384565629F26E1318039F75734DCD9856995D` |
| `projeto-dashboard/preparar_dados.py` | `6E0E57B62505F752D3143B0E2E6DD04961F3388DDE7236DA195670C6B80CE8A4` |
| `projeto-dashboard/site/index.html` | `2B0C7C800AB05D7BF7CCC334120D760839C0846348C5BF204B0B0C224F7EEA1A` |
| `projeto-dashboard/site/estilos.css` | `7030592DD9A902C5EB096FBF0FEF7258676C6B07B42AF7796F67970A82CCB165` |
| `projeto-dashboard/site/dashboard.js` | `8502221917A87014FA11C814E93A1171980E0541CCF0F9CFEEC1277354BAA28A` |
| `projeto-dashboard/site/dados/vendas.json` | `5D2DD319DB0A2AFB23925F07F29C19E24C48918A35302D7526862F0E13779097` |
| `projeto-dashboard/site/dados/perfil.json` | `EC5BA37C22F037766EB8BF2B3E0D5B8A090FFC01EE68A3495A6C6DDC197CC899` |
| `projeto-dashboard/README.md` | `A88BE96620B3BFB48B4E9A9EBADFA51357DD1A890A801F6636F4AD13FF8C05A8` |
| `projeto-dashboard/tests/test_dashboard.py` | `D6BD121A6DE9F58F64C900086C43711CD1E7402360C2D9D9E3F61B659B39D77A` |
| `projeto-dashboard/tests/browser_acceptance.mjs` | `4F9C282E94C42BF0F26947627D8AE77349D02D3E0B69C687D86663D4617BA53B` |

## Trabalho e verificações

Revisei e completei a suíte em `projeto-dashboard/tests/`, sem alterar arquivos do produto. Os testes comparam dados preparados com transformação independente do CSV original, verificam o fixture decimal conhecido, dimensões/colunas, ausência de vazios, tipos, duplicatas, validação de totais e agrupamentos independentes. No navegador, conferem a tabela e os KPIs, totais dos gráficos recalculados a partir da tabela, filtros isolados e combinados, estado vazio, limpar filtros, erros HTTP/JavaScript, responsividade e navegação/uso por teclado.

Uma diferença de representação monetária no teste (`42` versus `42.00`) foi corrigida comparando valores como `Decimal`, sem relaxar igualdade numérica. O teste de navegador foi alinhado aos IDs e à estrutura semântica realmente presentes no HTML (indicadores, tabela e gráficos mensal/categoria); continuou verificando os mesmos requisitos, incluindo os valores renderizados. A navegação observada foi testada pela ordem real do DOM; o filtro foi selecionado por seta e o botão limpar por teclado. A automação trata favicon opcional e aguarda o Edge encerrar antes de remover seu perfil temporário.

## Comandos e evidências

Ambiente: Python **3.14.7**, Node **v24.21.0**, Microsoft Edge **155.0.4283.45**.

1. `& .venv/Scripts/python.exe -m unittest discover -s projeto-dashboard/tests -v` — **OK**, 7 testes, 16,065 s. Cobertura de dados e execução automatizada real do navegador. A saída completa ficou no terminal desta rodada; resumo registrado neste relatório.
2. `node projeto-dashboard/tests/browser_acceptance.mjs projeto-dashboard/site` — **OK**; saída: `{"status":"passed","browser":"msedge.exe","http":"http://127.0.0.1:59534/","checks":["HTTP/recursos","KPIs versus tabela","filtros isolados e combinados","vazio e limpar","JavaScript","responsividade 390px/1365px","rótulos e foco por teclado"]}`.
3. Os testes de preservação confirmaram os hashes listados para os CSVs; os testes de dados também verificaram 182 linhas e 8 colunas na fonte, 180 linhas na cópia tratada, 548 unidades e R$ 20.059,00 recalculados independentemente.
4. Comando documentado em `README.md`: `py -m unittest discover -s .\projeto-dashboard\testes -v` — **FALHOU** com `ImportError: Start directory is not importable: '.\\projeto-dashboard\\testes'`. O diretório real da suíte é `projeto-dashboard/tests/`; o comando correto executado no item 1 passou.

## Problemas, pendências e status

- Defeito pendente para o Construtor: corrigir o caminho da suíte documentado em `projeto-dashboard/README.md` (atualmente `testes`, deve apontar para `tests`) e devolver para nova execução do comando documentado e da suíte completa.
- As falhas iniciais da suíte foram incompatibilidades dos testes com a representação decimal e os seletores/ordem de foco reais; as verificações foram ajustadas com justificativa sem enfraquecer critérios. A suíte de testes corrigida passou integralmente pelo comando correto.
- `.agents/skills/validate-data/SKILL.md` não foi encontrado neste workspace; não afirmo ter usado essa skill. Os recálculos desta rodada foram feitos diretamente pelos testes independentes.
- **PENDENTES:** correção do README pelo Construtor, nova execução do comando documentado e revisão independente pelo Revisor. Este relatório não aprova a entrega conjunta.
- **Status do Tester: REPROVADO** até a correção do README e nova rodada de verificação.
