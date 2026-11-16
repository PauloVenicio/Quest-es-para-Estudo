"use strict";
/* São Mateus do Maranhão 2026 — questões autorais, não oficiais. */
const saoMateusCargos = [
 {id:"1",nome:"Agente Administrativo",nivel:"medio",area:"administrativo"},
 {id:"2",nome:"Agente de Vigilância Sanitária",nivel:"medio",area:"vigilancia"},
 {id:"3",nome:"AOSD (Auxiliar Operacional de Serviços Diversos)",nivel:"fundamental",area:"aosd"},
 {id:"4",nome:"Assistente Social",nivel:"superior",area:"assistente_social",saude:true},
 {id:"5",nome:"Auxiliar de Saúde Bucal",nivel:"medio",area:"saude_bucal"},
 {id:"6",nome:"Auditor Fiscal",nivel:"superior",area:"auditor_fiscal"},
 {id:"7",nome:"Auxiliar de Turma",nivel:"medio",area:"turma"},
 {id:"8",nome:"Biólogo",nivel:"superior",area:"biologo",saude:true},
 {id:"9",nome:"Biomédico",nivel:"superior",area:"biomedico",saude:true},
 {id:"10",nome:"Bioquímico",nivel:"superior",area:"bioquimico",saude:true},
 {id:"11",nome:"Contador",nivel:"superior",area:"contador"},
 {id:"12",nome:"Dentista",nivel:"superior",area:"dentista",saude:true},
 {id:"13",nome:"Eletricista",nivel:"fundamental",area:"eletricista"},
 {id:"14",nome:"Enfermeiro",nivel:"superior",area:"enfermeiro",saude:true},
 {id:"15",nome:"Engenheiro Ambiental",nivel:"superior",area:"engenheiro_ambiental"},
 {id:"16",nome:"Engenheiro Civil",nivel:"superior",area:"engenheiro_civil"},
 {id:"17",nome:"Engenheiro Elétrico",nivel:"superior",area:"engenheiro_eletrico"},
 {id:"18",nome:"Farmacêutico",nivel:"superior",area:"farmaceutico",saude:true},
 {id:"19",nome:"Fiscal Ambiental",nivel:"medio",area:"ambiental"},
 {id:"20",nome:"Fiscal de Tributos",nivel:"medio",area:"tributos"},
 {id:"21",nome:"Fisioterapeuta",nivel:"superior",area:"fisioterapeuta",saude:true},
 {id:"22",nome:"Fonoaudiólogo",nivel:"superior",area:"fonoaudiologo",saude:true},
 {id:"23",nome:"Médico - Clínico Geral",nivel:"superior",area:"medico",saude:true},
 {id:"24",nome:"Motorista B",nivel:"fundamental",area:"motorista"},
 {id:"25",nome:"Motorista D",nivel:"fundamental",area:"motorista"},
 {id:"26",nome:"Nutricionista",nivel:"superior",area:"nutricionista",saude:true},
 {id:"27",nome:"Orientador Social",nivel:"medio",area:"social"},
 {id:"28",nome:"Psicólogo",nivel:"superior",area:"psicologo",saude:true},
 {id:"29",nome:"Radiologista",nivel:"superior",area:"radiologista",saude:true},
 {id:"30",nome:"Recepcionista",nivel:"medio",area:"recepcao"},
 {id:"31",nome:"Secretário de Escola",nivel:"medio",area:"escola"},
 {id:"32",nome:"Técnico de Enfermagem",nivel:"medio",area:"enfermagem"},
 {id:"33",nome:"Técnico em Radiologia",nivel:"medio",area:"radiologia"},
 {id:"34",nome:"Técnico em Segurança do Trabalho",nivel:"medio",area:"seguranca_trabalho"},
 {id:"35",nome:"Técnico de Saúde Bucal",nivel:"medio",area:"saude_bucal"},
 {id:"36",nome:"Terapeuta Ocupacional",nivel:"superior",area:"terapeuta_ocupacional",saude:true},
 {id:"37",nome:"Topógrafo",nivel:"medio",area:"topografo"},
 {id:"38",nome:"Vigia",nivel:"fundamental",area:"vigia"}
];
const el=id=>document.getElementById(id);
const shuffle=items=>{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const clearTags=s=>String(s??"").replace(/<[^>]+>/g,"").replaceAll("&nbsp;"," ").replaceAll("&amp;","&").replaceAll("&lt;","<").replaceAll("&gt;",">").trim();
const canonical=s=>clearTags(s).toLocaleLowerCase("pt-BR").replace(/^em uma prova,\s*/,"").replace(/\s*\(item\s+\d+\)/gi,"").replace(/\s+/g," ").replace(/[?!.]+$/,"").trim();
function normalize(raw,area){
 const opts=raw&&raw.options;if(!raw||!raw.question||!Array.isArray(opts)||opts.length!==4)return null;
 const correct=Number(raw.correct),options=opts.map(v=>clearTags(v));
 if(!Number.isInteger(correct)||correct<0||correct>3||options.some(v=>!v)||new Set(options.map(canonical)).size<4)return null;
 const question=clearTags(raw.question);
 return {question,options,correct,explanation:clearTags(raw.explanation)||"Resposta correta: "+options[correct]+".",topic:raw.topic||"",area};
}
function idOf(q){
 if(!q._qid)q._qid=canonical(q.question)+"|"+canonical(q.options[q.correct]);
 return q._qid;
}
function unique(items){
 const map=new Map();
 for(const q of items){if(!q)continue;const k=idOf(q);if(!map.has(k))map.set(k,q);}
 return [...map.values()];
}
// Bancos incluem problemas resolvíveis, estudos de conceitos e conteúdos anteriores.
const geral={
 portugues:unique([...saoMateusGeneral.portugues,...saoMateusExpandirGerais("portugues"),...saoMateusPortuguesNovas(),...saoMateusConceituaisNovas("portugues",saoMateusConceitosGerais.portugues)].map(q=>normalize(q,"Português"))),
 matematica:unique([...saoMateusGeneral.matematica,...saoMateusExpandirGerais("matematica"),...saoMateusCalculosNovos()].map(q=>normalize(q,"Matemática e Raciocínio Lógico"))),
 informatica:unique([...saoMateusGeneral.informatica,...saoMateusExpandirGerais("informatica"),...saoMateusConceituaisNovas("informatica",saoMateusConceitosGerais.informatica)].map(q=>normalize(q,"Noções de Informática"))),
 direito:unique([...saoMateusGeneral.direito,...saoMateusExpandirGerais("direito"),...saoMateusConceituaisNovas("direito",saoMateusConceitosGerais.direito)].map(q=>normalize(q,"Direito Administrativo e Constitucional"))),
 etica:unique(saoMateusGeneral.etica.map(q=>normalize(q,"Ética e Administração"))),
 ambiente:unique(saoMateusGeneral.ambiente.map(q=>normalize(q,"Meio Ambiente")))
};
const poolsEspecificas={};
for(const chave of Object.keys(saoMateusConceitos)){
 const itens=saoMateusConceitos[chave];
 poolsEspecificas[chave]=unique([...saoMateusExpandirConceitos(chave),...saoMateusConceituaisNovas(chave,itens)].map(q=>normalize(q,"Conhecimentos Específicos")));
}
const cargoSelect=el("cargo"),subjectSelect=el("disciplina"),countNote=el("availableCount");
const errorKey="saomateus26_erradas_v1",seenPrefix="saomateus26_vistas_v1_",recordPrefix="saomateus26_record_v1_";
const globalSeenKey="saomateus26_vistas_globais_v2",recentKey="saomateus26_recentes_v2";
let mode="simulado",session=null,ticker=null;
function readArray(key){try{const v=JSON.parse(localStorage.getItem(key)||"[]");return Array.isArray(v)?v:[];}catch{return[];}}
function storeArray(key,arr){try{localStorage.setItem(key,JSON.stringify(arr));}catch{}}
// IDs curtos e persistentes evitam registros extensos no armazenamento móvel.
function shortId(q){
 const src=idOf(q);
 if(q._shortId)return q._shortId;
 let hash=2166136261;
 for(let i=0;i<src.length;i++){hash^=src.charCodeAt(i);hash=Math.imul(hash,16777619);}
 q._shortId=(hash>>>0).toString(36)+"_"+src.length.toString(36);
 return q._shortId;
}
const globalSeen=new Set(readArray(globalSeenKey)),recentSeen=readArray(recentKey).slice(-600);
const recentSet=new Set(recentSeen);
function markPresented(q){
 const id=shortId(q);
 globalSeen.add(id);
 const last=recentSeen.indexOf(id);if(last>=0)recentSeen.splice(last,1);
 recentSeen.push(id);recentSet.add(id);
 if(recentSeen.length>600){recentSeen.splice(0,recentSeen.length-600);recentSet.clear();for(const item of recentSeen)recentSet.add(item);}
 storeArray(globalSeenKey,[...globalSeen]);storeArray(recentKey,recentSeen);
}
function selectedCargo(){return saoMateusCargos.find(c=>c.id===cargoSelect.value)||saoMateusCargos[0];}
function specificFor(c){
 let bank=poolsEspecificas[c.area]||[];
 // Complementos próximos ao conteúdo previsto, sem substituir o núcleo específico do cargo.
 const relacionados={
  assistente_social:"social", auditor_fiscal:"tributos",
  dentista:"saude_bucal",enfermeiro:"enfermagem",
  engenheiro_ambiental:"ambiental", radiologista:"radiologia"
 };
 const extra=relacionados[c.area];
 if(extra)bank=bank.concat(poolsEspecificas[extra]||[]);
 if(c.area==="enfermagem")bank=bank.concat(poolsEspecificas.sus);
 if(["administrativo","recepcao","vigia","aosd","social"].includes(c.area))bank=bank.concat(geral.etica);
 if(["ambiental","vigilancia","motorista"].includes(c.area))bank=bank.concat(geral.ambiente);
 return unique(bank);
}
function availablePools(c){
 const specific=specificFor(c);
 const sus=c.saude?(poolsEspecificas.sus||[]):[];
 return {
  tudo:unique([...geral.portugues,...geral.matematica,...geral.informatica,...geral.direito,...specific,...sus]),
  portugues:geral.portugues,matematica:geral.matematica,
  informatica:geral.informatica,direito:geral.direito,
  sus,especificos:unique([...specific,...sus])
 };
}
const labels={tudo:"Todas as disciplinas",portugues:"Língua Portuguesa",matematica:"Matemática e Raciocínio Lógico",informatica:"Noções de Informática",direito:"Direito Administrativo e Constitucional",sus:"Legislação do SUS",especificos:"Conhecimentos Específicos"};
function setMode(next){
 mode=next;
 document.querySelectorAll(".mode").forEach(btn=>btn.setAttribute("aria-pressed",String(btn.dataset.mode===mode)));
 el("quantityRow").style.display=mode==="simulado"?"none":"grid";
 subjectSelect.disabled=mode==="simulado";
 updateAvailability();
}
function updateSubjects(){
 const c=selectedCargo(),keep=subjectSelect.value;
 const entries=c.nivel==="fundamental"?
  ["tudo","portugues","matematica","especificos"]:
  c.nivel==="superior"?
  ["tudo","portugues","matematica","informatica","direito",...(c.saude?["sus"]:[]),"especificos"]:
  ["tudo","portugues","informatica","direito","especificos"];
 subjectSelect.replaceChildren();
 for(const k of entries){const opt=document.createElement("option");opt.value=k;opt.textContent=labels[k];subjectSelect.append(opt);}
 subjectSelect.value=entries.includes(keep)?keep:"tudo";
 updateAvailability();
}
function updateAvailability(){
 const c=selectedCargo(),pools=availablePools(c),key=subjectSelect.value||"tudo";
 const err=new Set(readArray(errorKey));
 const total=mode==="erros"?pools[key].filter(q=>err.has(idOf(q))).length:pools[key].length;
 const ineditas=mode==="erros"?0:pools[key].reduce((sum,q)=>sum+(!globalSeen.has(shortId(q))?1:0),0);
 countNote.textContent=mode==="simulado"?"40 questões • 2,5 pontos por acerto • até 3 horas • sem repetição enquanto houver inéditas":total.toLocaleString("pt-BR")+" questões neste filtro • "+ineditas.toLocaleString("pt-BR")+" ainda não exibidas neste aparelho";
 el("startBtn").disabled=mode==="erros"&&total===0;
 el("startBtn").style.opacity=el("startBtn").disabled?".55":"1";
 try{const r=JSON.parse(localStorage.getItem(recordPrefix+c.id)||"null");el("recordText").textContent=r?"🏅 Seu melhor simulado neste cargo: "+r.best.toFixed(1).replace(".",",")+" pontos.":"Faça seu primeiro simulado neste cargo e acompanhe seu melhor resultado.";}catch{}
}
function takeQuestions(pool,n,scope){
 // Primeiro consome todas as perguntas genuinamente inéditas, inclusive entre cargos.
 const oldScope=new Set(readArray(seenPrefix+scope)),fresh=[],review=[];
 for(const q of shuffle(unique(pool))){
  if(globalSeen.has(shortId(q))||oldScope.has(idOf(q)))review.push(q);
  else fresh.push(q);
 }
 // Se o banco acabar, as menos recentes vêm primeiro.
 const lastIndex=new Map(recentSeen.map((id,i)=>[id,i]));
 review.sort((a,b)=>(lastIndex.get(shortId(a))??-1)-(lastIndex.get(shortId(b))??-1));
 const selected=[],selectedIds=new Set(),topics=new Set();
 const consume=(items)=>{
  for(const q of items){
   const topic=q.topic?canonical(q.topic):idOf(q);
   if(topics.has(topic))continue;
   selected.push(q);topics.add(topic);selectedIds.add(idOf(q));
   if(selected.length>=n)return true;
  }
  for(const q of items){
   if(selectedIds.has(idOf(q)))continue;
   selected.push(q);selectedIds.add(idOf(q));
   if(selected.length>=n)return true;
  }
  return false;
 };
 consume(fresh);if(selected.length<n)consume(review);
 return selected;
}
function makeExam(c){
 const specs=specificFor(c);
 const a=takeQuestions(geral.portugues,10,c.id+"_pt").map(q=>({...q,trackingScope:c.id+"_pt"}));
 let b;
 if(c.nivel==="fundamental"){
  b=takeQuestions(geral.matematica,10,c.id+"_mat").map(q=>({...q,trackingScope:c.id+"_mat"}));
 }else if(c.nivel==="superior"){
  // O edital agrupa estas disciplinas em um bloco de 10 sem definir suas quantidades individuais.
  b=[
   ...takeQuestions(geral.matematica,4,c.id+"_mat").map(q=>({...q,trackingScope:c.id+"_mat"})),
   ...takeQuestions(geral.informatica,3,c.id+"_inf").map(q=>({...q,trackingScope:c.id+"_inf"})),
   ...takeQuestions(geral.direito,3,c.id+"_dir").map(q=>({...q,trackingScope:c.id+"_dir"}))
  ];
 }else{
  b=[
   ...takeQuestions(geral.informatica,5,c.id+"_inf").map(q=>({...q,trackingScope:c.id+"_inf"})),
   ...takeQuestions(geral.direito,5,c.id+"_dir").map(q=>({...q,trackingScope:c.id+"_dir"}))
  ];
 }
 const specificCount=c.saude?15:20;
 const d=takeQuestions(specs,specificCount,c.id+"_spec").map(q=>({...q,trackingScope:c.id+"_spec"}));
 if(c.saude){
  d.push(...takeQuestions(poolsEspecificas.sus||[],5,c.id+"_sus").map(q=>({...q,trackingScope:c.id+"_sus"})));
 }
 if(a.length!==10||b.length!==10||d.length!==20)throw new Error("Banco insuficiente para esse cargo.");
 return [...shuffle(a).map(q=>({...q,group:"gerais"})),...shuffle(b).map(q=>({...q,group:"gerais"})),...shuffle(d).map(q=>({...q,group:"especificos"}))];
}
function makePractice(c){
 const pools=availablePools(c),key=subjectSelect.value;
 let chosen=pools[key]||pools.tudo;
 if(mode==="erros"){const errors=new Set(readArray(errorKey));chosen=chosen.filter(q=>errors.has(idOf(q)));}
 const size=Number(el("quantidade").value)||40;
 return takeQuestions(chosen,Math.min(size,chosen.length),c.id+"_"+key).map(q=>({...q,trackingScope:c.id+"_"+key,group:key==="especificos"?"especificos":"gerais"}));
}
function begin(){
 const cargo=selectedCargo();let qs;
 try{qs=mode==="simulado"?makeExam(cargo):makePractice(cargo);}catch(e){alert(e.message);return;}
 if(qs.length===0){alert("Não existem questões neste filtro. Escolha outra disciplina ou resolva algumas questões primeiro.");return;}
 session={cargo,mode,questions:qs,index:0,answers:[],start:Date.now(),elapsed:0,finished:false};
 el("welcome").classList.add("hidden");el("setupPanel").style.display="none";el("resultPanel").style.display="none";el("quizPanel").style.display="block";
 el("currentCargo").textContent=cargo.nome;el("modeBadge").textContent=mode==="simulado"?"📝 SIMULADO":mode==="erros"?"🔁 REVISÃO":"📖 TREINO";
 clearInterval(ticker);ticker=setInterval(updateClock,1000);updateClock();renderQuestion();window.scrollTo({top:0,behavior:"smooth"});
}
function formatTime(sec){const h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60),s=sec%60;return [h,m,s].map(v=>String(v).padStart(2,"0")).join(":");}
function updateClock(){
 if(!session||session.finished)return;
 session.elapsed=Math.floor((Date.now()-session.start)/1000);
 const remaining=session.mode==="simulado"?Math.max(0,10800-session.elapsed):session.elapsed;
 el("timerBadge").textContent="⏱ "+formatTime(remaining);
 if(session.mode==="simulado"&&remaining===0)finish(false);
}
function renderQuestion(){
 if(!session)return;
 const q=session.questions[session.index];const i=session.index,n=session.questions.length;
 markPresented(q);
 el("questionText").textContent=q.question;el("stepBadge").textContent=(i+1)+" / "+n;
 el("sectionBadge").textContent=q.group==="especificos"?"Conhecimentos específicos":q.area;
 const p=Math.round((i/n)*100);el("progressFill").style.width=p+"%";el("progress").setAttribute("aria-valuenow",String(p));
 el("correctCount").textContent=session.mode==="simulado"?"Respostas registradas: "+session.answers.length:"Acertos: "+session.answers.filter(a=>a.correct).length;
 const box=el("answers");box.replaceChildren();el("explanation").style.display="none";el("explanation").textContent="";
 el("nextBtn").style.display="none";
 const shuffled=shuffle(q.options.map((txt,idx)=>({text:txt,isCorrect:idx===q.correct})));
 shuffled.forEach((opt,idx)=>{
 const btn=document.createElement("button");btn.type="button";btn.className="answer";
 const letter=document.createElement("span");letter.className="letter";letter.textContent="ABCD"[idx];
 const text=document.createElement("span");text.textContent=opt.text;btn.append(letter,text);
 btn.addEventListener("click",()=>answer(opt,btn));box.append(btn);
 });
}
function answer(option,btn){
 if(!session||session.finished||session.answers[session.index])return;
 const q=session.questions[session.index];
 session.answers[session.index]={q,choice:option.text,correct:option.isCorrect,group:q.group};
 const seenKey=seenPrefix+(q.trackingScope||session.cargo.id+"_"+q.area.replaceAll(" ","_"));
 const seen=new Set(readArray(seenKey));seen.add(idOf(q));storeArray(seenKey,[...seen]);
 const errors=new Set(readArray(errorKey));if(option.isCorrect)errors.delete(idOf(q));else errors.add(idOf(q));storeArray(errorKey,[...errors]);
 el("answers").querySelectorAll("button").forEach(b=>{b.disabled=true;if(session.mode!=="simulado"&&b.textContent.slice(1)===q.options[q.correct])b.classList.add("correct");});
 if(session.mode==="simulado"){btn.style.borderColor="#aaa0ff";}else{
 btn.classList.add(option.isCorrect?"correct":"wrong");
 const explain=el("explanation");explain.className=option.isCorrect?"good":"bad";explain.textContent=(option.isCorrect?"✅ Resposta correta. ":"❌ Resposta incorreta. ")+q.explanation;
 explain.style.display="block";
 }
 el("nextBtn").style.display="inline-block";
 el("nextBtn").textContent=session.index===session.questions.length-1?"✅ VER RESULTADO":"PRÓXIMA QUESTÃO →";
 el("correctCount").textContent=session.mode==="simulado"?"Respostas registradas: "+session.answers.filter(Boolean).length:"Acertos: "+session.answers.filter(a=>a&&a.correct).length;
}
function nextQuestion(){
 if(!session||!session.answers[session.index])return;
 if(session.index>=session.questions.length-1){finish(false);return;}
 session.index++;renderQuestion();window.scrollTo({top:0,behavior:"smooth"});
}
function finish(ask){
 if(!session||session.finished)return;
 if(ask&&!confirm("Encerrar agora? Questões não respondidas serão consideradas erradas."))return;
 session.finished=true;clearInterval(ticker);ticker=null;session.elapsed=Math.min(10800,Math.floor((Date.now()-session.start)/1000));
 el("quizPanel").style.display="none";el("resultPanel").style.display="block";
 const done=session.answers.filter(Boolean),hits=done.filter(a=>a.correct),all=session.questions,points=(100*hits.length/all.length);
 let passed=false;
 if(session.mode==="simulado"){
  const generalHit=hits.some(a=>a.group==="gerais"),specificHit=hits.some(a=>a.group==="especificos");
  passed=points>=50&&generalHit&&specificHit;
  el("resultTitle").textContent=passed?"🎉 Pontuação de aprovação no simulado":"📊 Simulado encerrado";
  el("resultSubtitle").textContent="Critérios do edital: 50 pontos ou mais e ao menos um acerto em cada área (gerais e específicos). Resultado de treino, sem valor oficial.";
  const key=recordPrefix+session.cargo.id;
  try{const old=JSON.parse(localStorage.getItem(key)||"null");localStorage.setItem(key,JSON.stringify({best:Math.max(Number(old?.best||0),points),last:points,date:new Date().toISOString()}));}catch{}
 }else{
  el("resultTitle").textContent="📚 Treino concluído";
  el("resultSubtitle").textContent="Você respondeu "+done.length+" de "+all.length+" questões. Reveja os erros e tente novamente.";
 }
 el("resultScore").textContent=points.toFixed(1).replace(".",",");el("resultHits").textContent=hits.length+" / "+all.length;el("resultTime").textContent=formatTime(session.elapsed);
 const review=el("review");review.replaceChildren();
 all.forEach((q,i)=>{
  const a=session.answers[i];const item=document.createElement("div");item.className="reviewitem";
  const name=document.createElement("strong");name.textContent=(a?.correct?"✅":"❌")+" "+(i+1)+". "+q.question;
  const resp=document.createElement("p");resp.textContent="Sua resposta: "+(a?.choice||"Não respondida")+" | Gabarito: "+q.options[q.correct];
  const explain=document.createElement("p");explain.textContent=q.explanation;
  item.append(name,resp,explain);review.append(item);
 });
 updateAvailability();window.scrollTo({top:0,behavior:"smooth"});
}
function reset(){
 if(ticker){clearInterval(ticker);ticker=null;}
 session=null;el("resultPanel").style.display="none";el("quizPanel").style.display="none";el("welcome").classList.remove("hidden");el("setupPanel").style.display="block";updateAvailability();window.scrollTo({top:0,behavior:"smooth"});
}
function init(){
 for(const [nivel,titulo] of [["fundamental","Nível fundamental"],["medio","Nível médio / técnico"],["superior","Nível superior"]]){
  const grupo=document.createElement("optgroup");grupo.label=titulo;
  for(const c of saoMateusCargos.filter(item=>item.nivel===nivel)){
   const opt=document.createElement("option");opt.value=c.id;opt.textContent=String(c.id).padStart(2,"0")+" • "+c.nome;grupo.append(opt);
  }
  cargoSelect.append(grupo);
 }
 el("cargoCount").textContent=saoMateusCargos.length;
 const all=unique([...Object.values(geral).flat(),...Object.values(poolsEspecificas).flat()]);
 el("totalCount").textContent=all.length.toLocaleString("pt-BR");
 const saved=localStorage.getItem("saomateus26_cargo");
 cargoSelect.value=saved&&saoMateusCargos.some(x=>x.id===saved)?saved:"1";
 cargoSelect.addEventListener("change",()=>{localStorage.setItem("saomateus26_cargo",cargoSelect.value);updateSubjects();});
 subjectSelect.addEventListener("change",updateAvailability);
 document.querySelectorAll(".mode").forEach(btn=>btn.addEventListener("click",()=>setMode(btn.dataset.mode)));
 el("quantidade").addEventListener("change",updateAvailability);el("startBtn").addEventListener("click",begin);el("nextBtn").addEventListener("click",nextQuestion);el("finishBtn").addEventListener("click",()=>finish(true));
 el("retryBtn").addEventListener("click",reset);el("printBtn").addEventListener("click",()=>window.print());
 el("themeBtn").addEventListener("click",()=>{const light=document.body.classList.toggle("light");localStorage.setItem("saomateus26_theme",light?"light":"dark");el("themeBtn").textContent=light?"🌙 Tema":"☀️ Tema";});
 if(localStorage.getItem("saomateus26_theme")==="light"){document.body.classList.add("light");el("themeBtn").textContent="🌙 Tema";}
 document.addEventListener("keydown",event=>{
 if(!session||session.finished||/INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName||""))return;
 if(["1","2","3","4"].includes(event.key)){const btn=el("answers").children[Number(event.key)-1];if(btn&&!btn.disabled)btn.click();}
 if(event.key==="Enter"&&el("nextBtn").style.display==="inline-block"){event.preventDefault();nextQuestion();}
 });
 updateSubjects();setMode("simulado");
}
try{init();}catch(error){console.error(error);el("setupPanel").insertAdjacentText("beforeend","Erro ao carregar o banco de questões. Atualize a página.");}
