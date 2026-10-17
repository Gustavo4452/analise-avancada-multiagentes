# Análise avançada com múltiplos agentes

Repositório público com os fluxos de trabalho, skills, relatórios em Markdown e o site estático do projeto de análise de vendas.

## Conteúdo publicado

- `AGENTS.md`: fluxo de trabalho e critérios da equipe de análise.
- `.opencode/skills/`: skills de exploração de dados, visualização e validação.
- `projeto-dashboard/relatorios/`: relatórios Markdown das rodadas e o relatório final.
- `projeto-dashboard/ANALISE.md`, `resumo.md` e `verificacao.md`: documentação e relatórios metodológicos.
- `projeto-dashboard/site/`: site estático com dashboard, assets otimizados e JSON necessário para os gráficos e filtros.
- `render.yaml`: configuração do serviço de site estático no Render.

## Conteúdo não publicado

Os CSVs originais, o ambiente `.venv`, imagens originais em alta resolução, arquivos ZIP de fontes e código Python de preparação/teste não são publicados. Os JSON dentro de `projeto-dashboard/site/dados/` contêm os registros apresentados pelo dashboard e ficam públicos junto com o site.

## Publicar no Render

No Render, crie um **Blueprint** e conecte este repositório. O arquivo `render.yaml` configura a pasta `projeto-dashboard/site` como conteúdo estático. Após sincronizar o Blueprint, o Render fará o deploy e publicará uma URL `onrender.com`.

## Skills

As skills estão em `.opencode/skills/` e seguem o formato OpenCode (`SKILL.md`).
