# Central do Conhecimento • Concurso São Mateus do Maranhão 2026

Área de estudos adicional criada para o **Edital nº 001/2026 (16/11/2026)** da Prefeitura de São Mateus do Maranhão, com organização da **CONSULPAM**.

## Acessar

- [Página inicial](https://paulovenicio.github.io/Quest-es-para-Estudo/)
- [Simulados e questões de São Mateus](https://paulovenicio.github.io/Quest-es-para-Estudo/sao-mateus-2026.html)

O site original e seu ranking continuam no arquivo `index.html`. O novo módulo funciona independentemente, sem exigir alterações no servidor de ranking do Raspberry Pi.

## O que foi incluído

- Banco de **32.006 questões distintas por enunciado e resposta**, após deduplicação textual: **10.446 de conhecimentos gerais** e **21.560 de conhecimentos específicos**. Inclui exercícios de conceitos combinados e situações-problema numéricas parametrizadas. A contagem não equivale a 32 mil assuntos ou fatos independentes.
- Seleção dos **38 cargos do edital**, agrupados por nível fundamental (5), médio/técnico (14) e superior (19).
- **Simulado com 40 questões**, quatro alternativas e limite de três horas.
- Distribuição: 10 de Língua Portuguesa; 10 de conhecimentos gerais complementares; 20 de conhecimentos específicos. No nível fundamental, o bloco complementar tem Matemática e Raciocínio Lógico. No médio/técnico, as 10 questões são divididas didaticamente em 5 de Informática e 5 de Direito. No superior, a divisão didática é 4 de Matemática, 3 de Informática e 3 de Direito. O edital **não fixa a divisão individual** dessas matérias nos blocos complementares de médio/técnico e superior.
- Nos 14 cargos superiores da área de Saúde listados no edital: 15 questões específicas do cargo e 5 de Legislação SUS (composição didática dentro das 20 específicas).
- Nota de 0 a 100; critério de aprovação simulada de 50 pontos e ao menos um acerto em cada área.
- Treino por disciplina, prioridade para questões ainda não vistas, revisão de erros, correção comentada, tema claro/escuro, layout responsivo e impressão do resultado.
- **Sistema antirrepetição global no dispositivo:** marca questões exibidas com identificadores compactos; ao gerar novo simulado, seleciona primeiro questões ainda não apresentadas no aparelho, inclusive entre cargos. Só recorre a questões antigas ao esgotar as inéditas da disciplina; entre antigas, evita as mais recentes. O progresso é preservado no armazenamento local do navegador (sem sincronização entre aparelhos ou após limpeza de dados).
- Histórico local por dispositivo (`localStorage`). Não há sincronização dos resultados deste módulo com o ranking online original.

## Cargos com treinamento específico

1. Agente Administrativo
2. Agente de Vigilância Sanitária
3. AOSD (Auxiliar Operacional de Serviços Diversos)
4. Assistente Social
5. Auxiliar de Saúde Bucal
6. Auditor Fiscal
7. Auxiliar de Turma
8. Biólogo
9. Biomédico
10. Bioquímico
11. Contador
12. Dentista
13. Eletricista
14. Enfermeiro
15. Engenheiro Ambiental
16. Engenheiro Civil
17. Engenheiro Elétrico
18. Farmacêutico
19. Fiscal Ambiental
20. Fiscal de Tributos
21. Fisioterapeuta
22. Fonoaudiólogo
23. Médico - Clínico Geral
24. Motorista B
25. Motorista D
26. Nutricionista
27. Orientador Social
28. Psicólogo
29. Radiologista
30. Recepcionista
31. Secretário de Escola
32. Técnico de Enfermagem
33. Técnico em Radiologia
34. Técnico em Segurança do Trabalho
35. Técnico de Saúde Bucal
36. Terapeuta Ocupacional
37. Topógrafo
38. Vigia

O módulo oferece questões autorais para **todos os 38 cargos**, com pelo menos 28 conceitos por área de conhecimento específico. A contagem inclui variações parametrizadas de cálculos e exercícios que relacionam os mesmos conceitos em diferentes combinações. Portanto, **32.006 questões não significam 32.006 conteúdos diferentes**. A inclusão de um cargo não significa que todo o conteúdo extenso do edital esteja esgotado ou revisado por especialistas. Nenhuma questão foi reproduzida como prova oficial da CONSULPAM.

**Validação:** testes automáticos de todos os 38 cargos confirmaram 40 perguntas por simulado, 20 gerais e 20 específicas, quatro alternativas e nenhuma duplicata textual em cada prova. Também foram simuladas 25 provas consecutivas, sem repetição de pergunta, nos cargos de Biólogo, Motorista B, Agente Administrativo e Radiologista. O comportamento real depende do histórico acumulado no aparelho e do tamanho de cada filtro.

## Arquivos

| Arquivo | Finalidade |
| --- | --- |
| `index.html` | Site original, com atalho destacado para o concurso |
| `sao-mateus-2026.html` | Interface responsiva do novo módulo |
| `sao-mateus-2026-banco.js` | Reaproveitamento de bancos de matérias gerais do projeto |
| `sao-mateus-2026-especificas.js` | Banco conceitual autoral de conhecimentos específicos e SUS |
| `sao-mateus-2026-complementares.js` | Questões autorais adicionais de Português, Matemática, Informática e Direito |
| `sao-mateus-2026-superior-saude.js` | Questões autorais específicas de 10 novas áreas profissionais, incluindo Saúde e Serviço Social |
| `sao-mateus-2026-superior-demais.js` | Questões autorais específicas de outras 10 áreas, incluindo Contabilidade, Engenharias e Topografia |
| `sao-mateus-2026-topicos-mais.js` | Novos conceitos fundamentais em todas as áreas profissionais |
| `sao-mateus-2026-calculos.js` | Problemas matemáticos autorais parametrizados, com resolução |
| `sao-mateus-2026-associacoes.js` | Exercícios contextualizados de associação de dois, três e quatro conceitos |
| `sao-mateus-2026-portugues.js` | Vocabulário, ortografia, tonicidade e análise gramatical |
| `sao-mateus-2026-app.js` | Gerador de simulados, histórico, correção e interface |

Para acrescentar questões específicas, adicione pares `["Termo", "Definição precisa"]` nos arquivos de bancos específicos correspondentes; o gerador produzirá duas modalidades de exercício por par. O cadastro e o nível de escolaridade de cada um dos 38 cargos estão em `saoMateusCargos`, dentro de `sao-mateus-2026-app.js`. Atualizações do edital devem ser revisadas e refletidas no conteúdo.

## Referência principal

Edital nº 001/2026 de São Mateus do Maranhão, Anexo I (cargos), item 13 (prova objetiva) e Anexo III (conteúdo programático). Recomenda-se acompanhar eventuais retificações do edital publicadas pela organizadora.
