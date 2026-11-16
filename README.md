# Central do Conhecimento • Concurso São Mateus do Maranhão 2026

Área de estudos adicional criada para o **Edital nº 001/2026 (16/11/2026)** da Prefeitura de São Mateus do Maranhão, com organização da **CONSULPAM**.

## Acessar

- [Página inicial](https://paulovenicio.github.io/Quest-es-para-Estudo/)
- [Simulados e questões de São Mateus](https://paulovenicio.github.io/Quest-es-para-Estudo/sao-mateus-2026.html)

O site original e seu ranking continuam no arquivo `index.html`. O novo módulo funciona independentemente, sem exigir alterações no servidor de ranking do Raspberry Pi.

## O que foi incluído

- Banco de **1.595 questões distintas** após filtragem de duplicidades textuais: 831 gerais e 764 específicas (inclui variações autorais de conceitos).
- Seleção de **18 cargos** com conteúdos específicos preparados nesta etapa.
- **Simulado com 40 questões**, quatro alternativas e limite de três horas.
- Distribuição: 10 de Língua Portuguesa; 10 de conhecimentos gerais adicionais; 20 de conhecimentos específicos. Para o nível médio/técnico, o bloco geral adicional mistura Informática e Direito, como **arranjo didático**: o edital não detalha a quantidade isolada de cada uma dessas duas disciplinas.
- Nota de 0 a 100; critério de aprovação simulada de 50 pontos e ao menos um acerto em cada área.
- Treino por disciplina, prioridade para questões ainda não vistas, revisão de erros, correção comentada, tema claro/escuro, layout responsivo e impressão do resultado.
- Histórico local por dispositivo (`localStorage`). Não há sincronização dos resultados deste módulo com o ranking online original.

## Cargos com treinamento específico

1. Agente Administrativo
2. Agente de Vigilância Sanitária
3. AOSD
4. Auxiliar de Saúde Bucal
5. Auxiliar de Turma
6. Eletricista
7. Fiscal Ambiental
8. Fiscal de Tributos
9. Motorista B
10. Motorista D
11. Orientador Social
12. Recepcionista
13. Secretário de Escola
14. Técnico de Enfermagem
15. Técnico em Radiologia
16. Técnico em Segurança do Trabalho
17. Técnico de Saúde Bucal
18. Vigia

**Importante:** os demais cargos previstos no edital ainda não possuem treinamento específico neste módulo. As perguntas são materiais **autorais de treino**, elaborados com referência aos assuntos do Anexo III do edital. Não são reproduções de provas oficiais nem foram revisadas ou endossadas pela Prefeitura ou pela banca. Questões devem ser conferidas contra legislação e bibliografia atualizadas.

## Arquivos

| Arquivo | Finalidade |
| --- | --- |
| `index.html` | Site original, com atalho destacado para o concurso |
| `sao-mateus-2026.html` | Interface responsiva do novo módulo |
| `sao-mateus-2026-banco.js` | Reaproveitamento de bancos de matérias gerais do projeto |
| `sao-mateus-2026-especificas.js` | Banco conceitual autoral de conhecimentos específicos e SUS |
| `sao-mateus-2026-complementares.js` | Questões autorais adicionais de Português, Matemática, Informática e Direito |
| `sao-mateus-2026-app.js` | Gerador de simulados, histórico, correção e interface |

Para acrescentar questões específicas, adicione pares `["Termo", "Definição precisa"]` ao conjunto do cargo em `sao-mateus-2026-especificas.js`; o gerador produzirá duas modalidades de exercício por par. Para incluir cargos adicionais, estenda `saoMateusCargos` no arquivo `sao-mateus-2026-app.js` e adicione o conteúdo específico correspondente.

## Referência principal

Edital nº 001/2026 de São Mateus do Maranhão, Anexo I (cargos), item 13 (prova objetiva) e Anexo III (conteúdo programático). Recomenda-se acompanhar eventuais retificações do edital publicadas pela organizadora.
