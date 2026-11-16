/* Exercícios combinados autorais para todos os cargos.
   Não são reproduções de provas oficiais. Para cada área, combina conceitos
   de maneira estável, cobra associações verdadeiras/falsas e sequências,
   aumentando a diversidade sem criar fatos não verificados. */
function saoMateusConceituaisNovas(chave,itens){
 const out=[];
 const total=itens.length;
 if(total<7)return out;
 const nomes={
  portugues:"Língua Portuguesa",informatica:"Informática",direito:"Direito Administrativo e Constitucional",
  administrativo:"Administração Pública",recepcao:"Recepção e Atendimento",escola:"Secretaria Escolar",
  enfermagem:"Enfermagem",vigia:"Vigilância Patrimonial",motorista:"Condução de Veículos",
  aosd:"Serviços Operacionais",vigilancia:"Vigilância Sanitária",ambiental:"Meio Ambiente",
  tributos:"Tributação Municipal",social:"Assistência Social",seguranca_trabalho:"Segurança do Trabalho",
  turma:"Apoio Escolar",eletricista:"Eletricidade",saude_bucal:"Saúde Bucal",radiologia:"Radiologia",
  sus:"Sistema Único de Saúde",assistente_social:"Serviço Social",biologo:"Biologia",
  biomedico:"Biomedicina",bioquimico:"Bioquímica",dentista:"Odontologia",enfermeiro:"Enfermagem",
  farmaceutico:"Farmácia",fisioterapeuta:"Fisioterapia",fonoaudiologo:"Fonoaudiologia",
  medico:"Medicina",nutricionista:"Nutrição",psicologo:"Psicologia",radiologista:"Diagnóstico por Imagem",
  terapeuta_ocupacional:"Terapia Ocupacional",auditor_fiscal:"Auditoria Fiscal",contador:"Contabilidade",
  engenheiro_ambiental:"Engenharia Ambiental",engenheiro_civil:"Engenharia Civil",
  engenheiro_eletrico:"Engenharia Elétrica",topografo:"Topografia"
 };
 const area=nomes[chave]||chave.replaceAll("_"," ");
 const conceito=i=>itens[(i+total*10)%total];
 const par=(i,j)=>conceito(i)[0]+" — "+conceito(j)[1];
 // Variar combinações de conceitos em associações de dois enunciados.
 const distancias=[1,3,5,7,9,11,13,16];
 for(let i=0;i<total;i++){
  for(const delta of distancias){
   const ia=i, ib=(i+delta)%total, ic=(i+delta+1)%total, id=(i+delta+2)%total;
   if(new Set([ia,ib,ic,id]).size!==4)continue;
   const [ta,da]=conceito(ia),[tb,db]=conceito(ib),[tc,dc]=conceito(ic),[td,dd]=conceito(id);
   const verdadeiro=ta+" — "+da+"; "+tb+" — "+db;
   const alternativas=[
    verdadeiro,
    ta+" — "+db+"; "+tb+" — "+da,
    ta+" — "+dc+"; "+tb+" — "+dd,
    ta+" — "+dd+"; "+tb+" — "+dc
   ];
   out.push({
    question:"Na área de "+area+", considere os conceitos "+ta+", "+tb+", "+tc+" e "+td+". Qual alternativa associa CORRETAMENTE dois termos às suas definições?",
    options:alternativas,correct:0,
    explanation:"As correspondências corretas são: "+verdadeiro+".",
    topic:"Associação: "+ta+" e "+tb
   });
  }
 }
 // Combinação em três itens: exige efetivamente comparar três fatos.
 const conjuntos=[2,4,6,8,10,12];
 for(let i=0;i<total;i++)for(const passo of conjuntos){
  const a=i,b=(i+passo)%total,c=(i+passo+3)%total;
  if(new Set([a,b,c]).size!==3)continue;
  const [ta,da]=conceito(a),[tb,db]=conceito(b),[tc,dc]=conceito(c);
  const pergunta="Em "+area+", associe os termos (1) "+ta+", (2) "+tb+" e (3) "+tc+" às definições, na ordem: "+db+" | "+dc+" | "+da+". Qual é a sequência correta?";
  out.push({
   question:pergunta,
   options:["2 - 3 - 1","1 - 3 - 2","3 - 1 - 2","2 - 1 - 3"],
   correct:0,explanation:"A primeira definição corresponde a (2) "+tb+"; a segunda a (3) "+tc+"; a terceira a (1) "+ta+".",
   topic:"Três conceitos: "+ta+" / "+tb+" / "+tc
  });
 }
 // Quatro associações: três corretas, uma trocada. Verifica compreensão de
 // vários conceitos, em vez de decorar um único termo da lista.
 const distancias4=[2,5,8,11];
 for(let i=0;i<total;i++)for(const delta of distancias4){
  const ids=[i,(i+delta)%total,(i+delta+1)%total,(i+delta+3)%total];
  if(new Set(ids).size!==4)continue;
  const [ta,da]=conceito(ids[0]),[tb,db]=conceito(ids[1]);
  const [tc,dc]=conceito(ids[2]),[td,dd]=conceito(ids[3]);
  out.push({
   question:"Na área de "+area+", analise quatro associações envolvendo "+ta+", "+tb+", "+tc+" e "+td+". Qual está INCORRETA?",
   options:[ta+" — "+db,tb+" — "+db,tc+" — "+dc,td+" — "+dd],
   correct:0,explanation:ta+" corresponde a "+da+"; não a "+db+". As outras relações estão corretas.",
   topic:"Comparações: "+ta+" / "+tb+" / "+tc+" / "+td
  });
 }
 return out;
}
