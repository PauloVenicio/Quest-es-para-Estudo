/* Reforço de Língua Portuguesa — exercícios autorais de vocabulário,
   ortografia, sílaba tônica e classes gramaticais. */
function saoMateusPortuguesNovas(){
 const out=[];
 const add=(question,options,correct,explanation,topic)=>out.push({question,options,correct,explanation,topic});
 const sinonimos=[
 ["célebre","famoso","anônimo","insignificante","desconhecido"],
 ["preciso","exato","vago","aleatório","impreciso"],
 ["conciso","breve","prolixo","extenso","confuso"],
 ["idôneo","confiável","suspeito","imprudente","inadequado"],
 ["inerente","próprio","externo","alheio","acidental"],
 ["iminente","prestes a ocorrer","remoto","passado","encerrado"],
 ["eminente","notável","ordinário","medíocre","irrelevante"],
 ["prudente","cauteloso","impulsivo","descuidado","temerário"],
 ["tácito","implícito","expresso","escrito","declarado"],
 ["explícito","claro","oculto","subentendido","dúbio"],
 ["efêmero","passageiro","permanente","eterno","duradouro"],
 ["perene","duradouro","fugaz","momentâneo","ocasional"],
 ["adversidade","dificuldade","vantagem","facilidade","benefício"],
 ["benevolente","bondoso","hostil","severo","indiferente"],
 ["diligente","zeloso","negligente","distraído","desatento"],
 ["convergente","que se aproxima de um mesmo ponto","divergente","oposto","separado"],
 ["divergente","que se afasta ou discorda","convergente","coincidente","unânime"],
 ["anuir","concordar","discordar","rejeitar","impedir"],
 ["ratificar","confirmar","revogar","contestar","negar"],
 ["retificar","corrigir","confirmar","aprovar","repetir"],
 ["elucidar","esclarecer","ocultar","complicar","embaralhar"],
 ["mitigar","atenuar","agravar","ampliar","intensificar"],
 ["agravar","piorar","amenizar","reduzir","conter"],
 ["postergar","adiar","antecipar","concluir","acelerar"],
 ["preconizar","recomendar","proibir","ignorar","desprezar"],
 ["suprimir","eliminar","adicionar","restabelecer","multiplicar"],
 ["prescindir","dispensar","necessitar","exigir","depender"],
 ["corroborar","confirmar","contradizer","desmentir","negar"],
 ["refutar","contestar","corroborar","aceitar","endossar"],
 ["plausível","crível","absurdo","impossível","inverossímil"],
 ["coerente","lógico","contraditório","incompatível","caótico"],
 ["arbitrário","sem critério justificado","fundamentado","regulado","pactuado"],
 ["íntegro","honesto","desonesto","corrupto","fraudulento"],
 ["austero","rigoroso","permissivo","indulgente","flexível"],
 ["célere","rápido","lento","demorado","vagaroso"],
 ["moroso","lento","veloz","ágil","imediato"],
 ["inócuo","que não causa dano","perigoso","nocivo","prejudicial"],
 ["nocivo","prejudicial","benéfico","saudável","inofensivo"],
 ["notório","conhecido","obscuro","ignorado","anônimo"],
 ["suscitar","provocar","suprimir","eliminar","encerrar"],
 ["comedir","moderar","exagerar","estimular","ampliar"],
 ["ponderar","refletir","precipitar","desprezar","ignorar"],
 ["probo","honesto","fraudulento","ardiloso","corrupto"],
 ["negligente","descuidado","diligente","zeloso","atento"],
 ["exíguo","reduzido","amplo","vasto","abundante"],
 ["vasto","amplo","exíguo","restrito","diminuto"],
 ["insólito","incomum","habitual","corriqueiro","frequente"],
 ["contumaz","habitual","ocasional","esporádico","raro"],
 ["esporádico","ocasional","constante","contínuo","regular"],
 ["ubíquo","presente em muitos lugares","localizado","restrito","pontual"],
 ["ambíguo","que admite mais de uma interpretação","unívoco","claro","inequívoco"],
 ["inequívoco","indiscutível","ambíguo","duvidoso","incerto"],
 ["inexorável","inevitável","evitável","contornável","facultativo"],
 ["parcimônia","moderação","exagero","desperdício","excesso"],
 ["dissimular","ocultar","revelar","mostrar","expor"],
 ["perscrutar","investigar","ignorar","desprezar","abandonar"],
 ["dirimir","resolver","agravar","perpetuar","multiplicar"],
 ["premente","urgente","adiável","secundário","distante"],
 ["protelar","adiar","antecipar","acelerar","concluir"],
 ["destoar","divergir","harmonizar","coincidir","combinar"],
 ["elidir","eliminar","incluir","apresentar","adicionar"],
 ["conjetura","suposição","certeza","comprovação","evidência"],
 ["premissa","pressuposto","conclusão","refutação","resultado"],
 ["alusão","referência","omissão","negação","esquecimento"],
 ["equânime","justo","parcial","injusto","arbitrário"],
 ["impetuoso","arrebatado","comedido","cauteloso","ponderado"],
 ["coeso","unido","desarticulado","fragmentado","disperso"],
 ["resiliente","capaz de recuperar-se de adversidades","fragilizado","imóvel","inflexível"],
 ["incongruente","incompatível","coerente","compatível","harmônico"],
 ["lacônico","sucinto","verboso","prolixo","detalhista"],
 ["verboso","prolixo","conciso","breve","sucinto"],
 ["pragmático","voltado à prática","abstrato","meramente teórico","utópico"],
 ["pertinente","apropriado","inadequado","alheio","irrelevante"],
 ["consubstanciar","fundamentar","desconsiderar","desfazer","omitir"],
 ["dissentir","discordar","anuir","aprovar","ratificar"],
 ["resguardar","proteger","expor","ameaçar","desproteger"],
 ["instigar","incentivar","desestimular","conter","refrear"],
 ["desvelar","revelar","ocultar","encobrir","esconder"],
 ["descrever","relatar","omitir","calar","silenciar"]
 ];
 for(const [termo,certo,a,b,c] of sinonimos){
  add("Na leitura de um texto, qual alternativa apresenta o sentido mais próximo de \""+termo+"\"?",[certo,a,b,c],0,
   "Neste contexto vocabular, "+termo+" tem sentido próximo de "+certo+".","Sinonímia: "+termo);
 }
 const antonimos=[
 ["generoso","egoísta"],["claro","obscuro"],["otimista","pessimista"],
 ["denso","rarefeito"],["efêmero","duradouro"],["provisório","definitivo"],
 ["simples","complexo"],["pacífico","belicoso"],["dinâmico","estático"],
 ["singular","plural"],["superficial","profundo"],["frequente","raro"],
 ["escasso","abundante"],["rígido","flexível"],["parcial","imparcial"],
 ["modesto","arrogante"],["transparente","opaco"],["heterogêneo","homogêneo"],
 ["concreto","abstrato"],["explícito","implícito"],["urbano","rural"],
 ["anterior","posterior"],["vertical","horizontal"],["público","privado"],
 ["inicial","final"],["superior","inferior"],["dependente","independente"],
 ["obrigatório","facultativo"],["ativo","passivo"],["positivo","negativo"],
 ["útil","inútil"],["democrático","autoritário"],["verdadeiro","falso"],
 ["legal","ilegal"],["lícito","ilícito"],["justo","injusto"],
 ["adequado","inadequado"],["suficiente","insuficiente"],["possível","impossível"],
 ["regular","irregular"],["favorável","desfavorável"],["estável","instável"],
 ["formal","informal"],["material","imaterial"],["visível","invisível"],
 ["relevante","irrelevante"],["eficaz","ineficaz"],["humano","desumano"],
 ["imediato","mediato"],["presente","ausente"],["capaz","incapaz"],
 ["essencial","acessório"],["uniforme","variado"],["objetivo","subjetivo"],
 ["global","local"],["interno","externo"],["admissível","inadmissível"],
 ["compulsório","voluntário"],["concordante","discordante"],["constante","variável"],
 ["temporal","atemporal"],["racional","irracional"],["permanente","temporário"],
 ["exato","aproximado"],["coletivo","individual"],["completo","incompleto"],
 ["preciso","impreciso"],["complicado","descomplicado"],["puro","impuro"],
 ["favorito","preterido"],["preservado","deteriorado"],["coerente","incoerente"],
 ["conhecido","desconhecido"],["audível","inaudível"],["consciente","inconsciente"]
 ];
 for(let i=0;i<antonimos.length;i++){
  const [a,b]=antonimos[i];
  const outros=[antonimos[(i+11)%antonimos.length][0],antonimos[(i+23)%antonimos.length][0],antonimos[(i+37)%antonimos.length][0]];
  const alternativas=[b,...outros.filter(x=>x!==b&&x!==a)];
  if(new Set(alternativas).size===4)add("Qual é o antônimo de \""+a+"\"?",alternativas,0,
   "Antônimo é uma palavra de sentido oposto; neste caso, "+a+" contrapõe-se a "+b+".","Antonímia: "+a);
 }
 const tonicas={
  "Oxítona":["café","jacaré","maracujá","caju","sabiá","você","avô","até","também","parabéns","ninguém","alguém","além","refém","armazém","cipó","paletó","robô","carijó","pavê","filé","boné","bebê","chulé","vovó","avó","papel","animal","quintal","pastel"],
  "Paroxítona":["fácil","difícil","lápis","tênis","hífen","vírus","júri","bônus","álbum","tórax","órgão","bíceps","órfã","fóssil","tátil","ágil","útil","móvel","nível","túnel","caráter","amável","possível","incrível","saudável","amigo","caderno","janela","cadeira","escola","mesa"],
  "Proparoxítona":["médico","público","lâmpada","lógico","máquina","matemática","técnico","elétrico","histórico","gramática","rápido","pássaro","ônibus","página","prática","política","física","química","último","próximo","mínimo","máximo","código","música","câmera","dúvida","número","síntese","método","análise"]
 };
 const rotulos=["Oxítona","Paroxítona","Proparoxítona","Monossílabo tônico"];
 for(const [classificacao,palavras] of Object.entries(tonicas)){
  for(const palavra of palavras){
   add("Quanto à posição da sílaba tônica, como se classifica a palavra \""+palavra+"\"?",
    rotulos,rotulos.indexOf(classificacao),
    "A sílaba mais forte de \""+palavra+"\" determina a classificação como "+classificacao.toLowerCase()+".",
    "Tonicidade: "+classificacao);
  }
 }
 const ortografia=[
 ["exceção","eseção","excessão","exeção"],["necessário","nescessário","necesário","nesesário"],
 ["privilégio","previlégio","privilegio","previlêgio"],["paralisação","paralização","paralizaçao","paralizacao"],
 ["pesquisa","pesquiza","pesquissa","pequisa"],["análise","analize","analíse","analise"],
 ["suscetível","susceptivel","suscetivel","sussetível"],["assessoria","acesoria","asessoria","asseçoria"],
 ["concessão","conceção","consessão","conseção"],["ressarcimento","resarcimento","ressarsimento","ressarssimento"],
 ["manutenção","manutençao","manutensão","manuteção"],["intercessão","interseção","intercessao","interceção"],
 ["beneficente","beneficiente","benificente","benificiente"],["enxergar","enchergar","enxerguar","enxerga"],
 ["exigência","exijência","exigencia","exijencia"],["excesso","exesso","ecesso","exceço"],
 ["profissão","profição","profisao","profição"],["disciplina","diciplina","dissiplina","disiplina"],
 ["consciência","conciência","consciencia","conciencia"],["influência","influensia","influecia","influençia"],
 ["científico","sientífico","cientifico","científigo"],["atravessar","atraveçar","atrasvessar","atravessarh"],
 ["conhecimento","conhesimento","conheçimento","conhecimemto"],["responsável","responsavel","responçável","resposável"],
 ["iniciativa","inissiativa","inicativa","iniciatíva"],["consequência","consequencia","consequênsia","consequênçia"],
 ["transparência","tranparência","transparencia","transparençia"],["exequível","exequivel","exeqüível","exequivél"],
 ["desenvolvimento","desenvolvimemto","desenvolvimênto","desenbolvimento"],["eficiência","eficiencia","eficiênsia","eficiênçia"],
 ["credibilidade","credibilidáde","credibiliedade","credibilidaje"],["essencial","esencial","ecencial","essensial"],
 ["excepcional","excepsional","escepcional","execepcional"],["substituição","subistituição","substituissão","substituiçao"],
 ["hierarquia","ierarquia","hierarqia","hierarqüia"],["frequência","frequencia","freqüência","frequênçia"],
 ["contribuição","contribuissão","contribuiçao","comtribuição"],["conservação","conservassão","conservaçao","comservação"],
 ["satisfação","satisfaçao","satisfassão","satizfação"],["referência","referencia","refêrencia","referênsia"],
 ["comunicação","comunicaçao","comunicassão","comunicaçâo"],["informatização","informatisação","informatizassão","informatizaçao"],
 ["interpretação","interpretassão","interpretaçao","interpretacão"],["compreensão","compreenção","comprensão","comprenssão"],
 ["vigilância","vigilancia","vigillância","vigilânçia"],["segurança","seguransa","segurânça","segurançaç"],
 ["fiscalização","fiscalisação","fiscalizassão","fiscalizaçao"],["administração","adiministração","administrassão","administraçao"],
 ["esclarecimento","esclarescimento","esclarecimemto","esclarescimento"],["licitação","licitaçao","lissitação","licitaçâo"],
 ["qualificação","qualificaçao","qualificassão","qualificaçâo"],["organização","organisação","organizassão","organizaçao"]
 ];
 for(const [correta,...incorretas] of ortografia){
  add("Assinale a alternativa que apresenta a grafia correta na norma-padrão do português (termo: "+correta.length+" letras na escrita usual).",
    [correta,...incorretas],0,
    "A grafia reconhecida na norma-padrão é \""+correta+"\".", "Ortografia: "+correta);
 }
 const frases=[
 ["Os relatórios foram entregues ontem.","O sujeito da oração é","Os relatórios","Sujeito simples"],
 ["As crianças brincavam na escola.","O núcleo do sujeito é","crianças","Núcleo do sujeito"],
 ["Os documentos chegaram ao protocolo.","O verbo principal é","chegaram","Verbo"],
 ["A servidora respondeu prontamente.","O advérbio de modo é","prontamente","Advérbio"],
 ["A comissão analisou o recurso.","O objeto direto do verbo é","o recurso","Objeto direto"],
 ["Os alunos estudaram com atenção.","A expressão que indica modo é","com atenção","Adjunto adverbial"],
 ["O professor explicou o exercício.","O sujeito da oração é","O professor","Sujeito simples"],
 ["A equipe permaneceu atenta.","O predicativo do sujeito é","atenta","Predicativo do sujeito"],
 ["A reunião ocorreu na segunda-feira.","A expressão que indica tempo é","na segunda-feira","Adjunto adverbial"],
 ["O documento foi assinado pela diretora.","O agente da passiva é","pela diretora","Agente da passiva"],
 ["Havia muitos inscritos na sala.","O verbo haver, no sentido de existir, apresenta-se","sem sujeito","Oração sem sujeito"],
 ["A diretora e o professor chegaram.","O sujeito é","composto","Sujeito composto"],
 ["Precisa-se de profissionais qualificados.","A construção tem","sujeito indeterminado","Sujeito indeterminado"],
 ["O servidor que chegou cedo foi atendido.","A oração 'que chegou cedo' é","adjetiva restritiva","Oração adjetiva"],
 ["Embora estivesse cansado, continuou trabalhando.","A conjunção 'embora' expressa","concessão","Conjunção concessiva"],
 ["Se houver vagas, abriremos inscrições.","A conjunção 'se' indica","condição","Conjunção condicional"],
 ["Estudou bastante porque faria a prova.","A conjunção 'porque' expressa","causa","Conjunção causal"],
 ["Ela estudou tanto que passou.","A expressão 'tanto que' sinaliza","consequência","Conjunção consecutiva"],
 ["O estudante chegou antes que a prova começasse.","A expressão 'antes que' indica","tempo","Conjunção temporal"]
 ];
 const opcoes=["Os relatórios","as crianças","o protocolo","ontem","chegaram","prontamente","o recurso","com atenção","O professor","atenta","na segunda-feira","pela diretora","sem sujeito","composto","sujeito indeterminado","adjetiva restritiva","concessão","condição","causa","consequência","tempo"];
 for(const [frase,pergunta,resposta,topico] of frases){
  const usados=new Set([resposta]);const outros=[];
  for(const p of opcoes){if(!usados.has(p)){outros.push(p);usados.add(p);}if(outros.length===3)break;}
  add("Leia: \""+frase+"\" "+pergunta+"?",[resposta,...outros],0,"Resposta: "+resposta+".",topico);
 }
 return out;
}
