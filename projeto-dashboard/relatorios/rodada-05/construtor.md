# Relatório do Construtor — rodada 05

## Versão examinada

Workspace sem commit Git registrado. Alterei somente `projeto-dashboard/site/estilos.css`; preservei layout, breakpoints, HTML, JavaScript, dados e testes.

**SHA-256 de `site/estilos.css`:** `D3A32EA234FA6F230731EB839FDAFE945D6B057EFEED5B9C75B27369F60298B4`

## Paleta aplicada

- Vinho `#6F1D1B`: links, indicador, foco de teclado, linha do gráfico e estado vazio.
- Ouro `#BB9457`: filete do cabeçalho, acentos, cartões e fundo do botão com texto marrom escuro.
- Marrom `#432818`: texto principal, cabeçalho, eixos e contorno dos elementos gráficos.
- Barro `#99582A`: controles e uma variação de barras.
- Creme `#FFE6A7`: fundo de cabeçalho/rótulos claros e cabeçalho da tabela; usado com texto escuro ou sobre fundo escuro, não como texto pequeno sobre branco.
- Tons neutros quentes derivados foram aplicados em fundo, bordas, hover de tabela e texto auxiliar.

As barras de categoria usam vinho, barro e ouro com contorno escuro; a série temporal usa linha vinho e pontos creme com contorno marrom. O contraste continua apoiado também por rótulos, e não apenas pela cor.

## Comandos e verificações desta rodada

- Verificador estático executado por PowerShell, usando `.venv/Scripts/python.exe`: conferiu equilíbrio de chaves CSS, presença das cinco cores e contraste WCAG de combinações de texto. Resultados: texto principal/fundo **12,64:1**; auxiliar/fundo **6,80:1**; creme/cabeçalho **11,01:1**; descrição/cabeçalho **12,77:1**; texto do botão ouro **4,81:1**; texto da tabela **11,01:1**; foco/fundo **10,52:1**. Todas as combinações verificadas excedem 4,5:1.
- `Get-FileHash -Algorithm SHA256 -LiteralPath '.\projeto-dashboard\site\estilos.css'` — hash registrado acima.
- Não executei a suíte Python nem testes de navegador nesta rodada. A verificação estática não substitui testes de interface.

## Pendências e status

- **PENDENTE:** Tester deve validar a apresentação e as interações após a mudança de CSS.
- **PENDENTE:** Revisor deve revisar a mesma versão após a rodada do Tester.
- **Status do Construtor: APROVADO** para a aplicação da paleta e as verificações estáticas registradas; isto não representa aprovação conjunta nem aprovação final dos testes visuais.
