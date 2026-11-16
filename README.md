# Central do Conhecimento • Concurso São Mateus do Maranhão 2026

Área de estudos dos **três editais do concurso de São Mateus do Maranhão, de 16/11/2026**, organizados pela **CONSULPAM**: nº 001/2026 (cargos gerais), nº 002/2026 (Agente de Trânsito e Guarda Municipal) e nº 003/2026 (Magistério). Os cargos aparecem juntos na seleção do site, em ordem alfabética por escolaridade.

## Acessar

- [Página inicial](https://paulovenicio.github.io/Quest-es-para-Estudo/)
- [Simulados e questões de São Mateus](https://paulovenicio.github.io/Quest-es-para-Estudo/sao-mateus-2026.html)

O site original e seu ranking continuam no arquivo `index.html`. O novo módulo funciona independentemente, sem exigir alterações no servidor de ranking do Raspberry Pi.

## O que foi incluído

- Banco de **42.706 questões distintas por enunciado e resposta**, após deduplicação textual: **10.446 de conhecimentos gerais** e **32.260 de conhecimentos específicos**. Inclui exercícios de conceitos combinados e situações-problema numéricas parametrizadas. A contagem não equivale a 32 mil assuntos ou fatos independentes.
- Seleção integrada dos **57 cargos dos editais 001, 002 e 003**, agrupados por nível fundamental (5), médio/técnico (16) e superior (36), em ordem alfabética.
- **Simulado com 40 questões**, quatro alternativas e limite de três horas.
- Distribuição: 10 de Língua Portuguesa; 10 de conhecimentos gerais complementares; 20 de conhecimentos específicos. No nível fundamental, o bloco complementar tem Matemática e Raciocínio Lógico. No médio/técnico, as 10 questões são divididas didaticamente em 5 de Informática e 5 de Direito. No superior, a divisão didática é 4 de Matemática, 3 de Informática e 3 de Direito. O edital **não fixa a divisão individual** dessas matérias nos blocos complementares de médio/técnico e superior.
- Nos 14 cargos superiores da área de Saúde listados no edital: 15 questões específicas do cargo e 5 de Legislação SUS (composição didática dentro das 20 específicas).
- **Edital 002/2026** (Agente de Trânsito e Guarda Municipal): 10 questões de Português, 10 gerais complementares divididas didaticamente entre Matemática (4), Informática (3) e Direito (3), e 20 de conhecimentos específicos.
- **Edital 003/2026** (17 cargos do Magistério): 10 de Português, 10 gerais complementares divididas didaticamente entre Informática (5) e Direito (5), e 20 específicas com **15 da especialidade e 5 de Didática e Legislação Educacional**. O edital não detalha quantidade individual por tópico.
- **Atenção às demais etapas:** o Edital 002 inclui, além da objetiva, investigação social, exames médicos, avaliação psicológica, teste de aptidão física e curso de formação. O Edital 003 prevê prova de títulos.
- Nota de 0 a 100; critério de aprovação simulada de 50 pontos e ao menos um acerto em cada área.
- Treino por disciplina, prioridade para questões ainda não vistas, revisão de erros, correção comentada, tema claro/escuro, layout responsivo e impressão do resultado.
- **Sistema antirrepetição global no dispositivo:** marca questões exibidas com identificadores compactos; ao gerar novo simulado, seleciona primeiro questões ainda não apresentadas no aparelho, inclusive entre cargos. Só recorre a questões antigas ao esgotar as inéditas da disciplina; entre antigas, evita as mais recentes. O progresso é preservado no armazenamento local do navegador (sem sincronização entre aparelhos ou após limpeza de dados).
- Histórico local por dispositivo (`localStorage`). Não há sincronização dos resultados deste módulo com o ranking online original.

## Todos os cargos disponíveis

1. Agente Administrativo
2. Agente de Trânsito
3. Agente de Vigilância Sanitária
4. AOSD (Auxiliar Operacional de Serviços Diversos)
5. Assistente Social
6. Auditor Fiscal
7. Auxiliar de Saúde Bucal
8. Auxiliar de Turma
9. Biólogo
10. Biomédico
11. Bioquímico
12. Contador
13. Dentista
14. Eletricista
15. Enfermeiro
16. Engenheiro Ambiental
17. Engenheiro Civil
18. Engenheiro Elétrico
19. Farmacêutico
20. Fiscal Ambiental
21. Fiscal de Tributos
22. Fisioterapeuta
23. Fonoaudiólogo
24. Guarda Municipal
25. Médico - Clínico Geral
26. Motorista B
27. Motorista D
28. Nutricionista
29. Orientador Social
30. Pedagogo
31. Professor - 1º ao 5º Ano
32. Professor de AEE
33. Professor de Arte
34. Professor de Braille
35. Professor de Ciências
36. Professor de Cultura Digital
37. Professor de Educação Física
38. Professor de Educação Infantil
39. Professor de Educação Quilombola
40. Professor de Geografia
41. Professor de História
42. Professor de Língua Inglesa
43. Professor de Língua Portuguesa
44. Professor de Matemática
45. Professor EJAI - 1º ao 5º Ano
46. Professor Intérprete de Libras
47. Psicólogo
48. Radiologista
49. Recepcionista
50. Secretário de Escola
51. Técnico de Enfermagem
52. Técnico de Saúde Bucal
53. Técnico em Radiologia
54. Técnico em Segurança do Trabalho
55. Terapeuta Ocupacional
56. Topógrafo
57. Vigia

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
| `sao-mateus-2026-edital-002.js` | Banco específico de Agente de Trânsito e Guarda Municipal |
| `sao-mateus-2026-edital-003-a.js` | Didática, Pedagogia e nove bancos específicos do magistério |
| `sao-mateus-2026-edital-003-b.js` | Oito bancos específicos adicionais do magistério |
| `sao-mateus-2026-app.js` | Gerador de simulados, histórico, correção e interface |

Para acrescentar questões específicas, adicione pares `["Termo", "Definição precisa"]` nos arquivos de bancos específicos correspondentes; o gerador produzirá duas modalidades de exercício por par. O cadastro e o nível de escolaridade de cada um dos 38 cargos estão em `saoMateusCargos`, dentro de `sao-mateus-2026-app.js`. Atualizações do edital devem ser revisadas e refletidas no conteúdo.

## Referência principal

Editais oficiais da CONSULPAM, publicados em 16/11/2026:
- [Edital 001/2026 (cargos gerais)](https://consulpam.com.br/index.php?acao=ver&id=880&menu=concursos)
- [Edital 002/2026 (Trânsito e Guarda Municipal)](https://consulpam.com.br/index.php?acao=ver&id=881&menu=concursos)
- [Edital 003/2026 (Magistério)](https://consulpam.com.br/index.php?acao=ver&id=882&menu=concursos)

Para cada carreira, conferir o Anexo I (cargos e requisitos), o quadro de prova objetiva e o Anexo III (conteúdo programático). Recomenda-se acompanhar eventuais retificações publicadas pela organizadora.
