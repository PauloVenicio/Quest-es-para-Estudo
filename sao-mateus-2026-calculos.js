/* QUESTÕES NUMÉRICAS PARAMETRIZADAS — material autoral, não oficial.
   Cada questão utiliza valores e operações verificáveis. Sementes fixas geram IDs
   estáveis, permitindo evitar repetição mesmo após atualizar ou recarregar a página. */
function saoMateusCalculosNovos(){
 const saida=[];
 let seed=20261116;
 function rand(){seed=(Math.imul(1664525,seed)+1013904223)>>>0;return seed/4294967296;}
 function ri(a,b){return a+Math.floor(rand()*(b-a+1));}
 const fmt=n=>Number(n).toLocaleString("pt-BR");
 function add(question,resposta,formula,topico,passo){
  if(!Number.isFinite(resposta)||!Number.isInteger(resposta))return;
  const off=passo||Math.max(2,Math.round(Math.abs(resposta)*0.09));
  const cand=[resposta+off,resposta-off,resposta+2*off,resposta-2*off,resposta+3*off,resposta-3*off,resposta*2,resposta+1,resposta-1,resposta+off+1];
  const opts=[resposta,...cand.filter(n=>Number.isInteger(n)&&n!==resposta&&n>=0)];
  const distinct=[...new Set(opts)].slice(0,4);
  if(distinct.length!==4)return;
  saida.push({question,options:distinct.map(fmt),correct:0,explanation:formula,topic:topico});
 }
 const ciclos=220;
 for(let i=0;i<ciclos;i++){
  let a=ri(25,700),b=ri(15,650),c=ri(2,11),d=ri(2,9);
  // Aritmética e situações-problema
  add("Uma secretaria recebeu "+a+" solicitações pela manhã e "+b+" à tarde. Quantas solicitações recebeu no total?",a+b,
   "Somam-se as duas quantidades: "+a+" + "+b+" = "+(a+b)+".","Adição contextual");
  add("Um almoxarifado tinha "+(a+b)+" itens e distribuiu "+b+". Quantos itens restaram?",a,
   "Subtração: "+(a+b)+" − "+b+" = "+a+".","Subtração contextual");
  add("Foram separados "+a+" materiais em cada um de "+c+" lotes. Qual é o total de materiais?",a*c,
   "Multiplicação: "+a+" × "+c+" = "+(a*c)+".","Multiplicação contextual");
  add("Um órgão possui "+(a*c)+" formulários para repartir igualmente em "+c+" setores. Quantos formulários recebe cada setor?",a,
   "Divisão: "+(a*c)+" ÷ "+c+" = "+a+".","Divisão contextual");
  const perc=[5,10,15,20,25,30,40,50][ri(0,7)],base=ri(4,30)*100;
  add("Quanto corresponde a "+perc+"% de "+fmt(base)+"?",base*perc/100,
   "Calcula-se "+base+" × "+perc+"/100 = "+base*perc/100+".","Porcentagem direta",Math.max(5,base/20));
  add("De "+fmt(base)+" inscrições, "+perc+"% foram canceladas. Quantas inscrições permaneceram válidas?",base*(100-perc)/100,
   "Válidas = "+base+" × (100 − "+perc+")/100 = "+base*(100-perc)/100+".","Porcentagem restante");
  add("Um material custava R$ "+fmt(base)+". Com desconto de "+perc+"%, qual é seu preço final, em reais?",base*(100-perc)/100,
   "Preço final: "+base+" × "+(100-perc)+"/100 = "+base*(100-perc)/100+" reais.","Desconto percentual");
  add("Após um aumento de "+perc+"%, uma tarifa de R$ "+fmt(base)+" passa a valer quantos reais?",base*(100+perc)/100,
   "Novo valor = "+base+" × "+(100+perc)+"/100 = "+base*(100+perc)/100+" reais.","Acréscimo percentual");
  const preco=ri(5,90),qtd1=ri(2,7),qtd2=ri(8,21);
  add("Se "+qtd1+" materiais iguais custam R$ "+fmt(preco*qtd1)+", qual é o valor de "+qtd2+" materiais, em reais?",preco*qtd2,
   "Cada material custa "+preco+" reais; "+qtd2+" unidades custam "+(preco*qtd2)+" reais.","Regra de três direta");
  const equipe=ri(2,8),dias=ri(3,14),novaEquipe=ri(2,9);
  add("Uma equipe de "+equipe+" pessoas realiza uma tarefa em "+(dias*novaEquipe)+" dias. Mantido o ritmo, "+(equipe*novaEquipe)+" pessoas levam quantos dias?",dias,
   "Trabalho constante: "+equipe+" × "+(dias*novaEquipe)+" ÷ "+(equipe*novaEquipe)+" = "+dias+" dias.","Proporção inversa");
  const med=ri(18,70),delta=ri(2,18);
  add("As três notas de um estudante foram "+(med-delta)+", "+med+" e "+(med+delta)+". Qual é a média aritmética?",med,
   "Média = ("+(med-delta)+" + "+med+" + "+(med+delta)+") ÷ 3 = "+med+".","Média aritmética",Math.max(2,ri(2,5)));
  const med5=ri(20,60),p=ri(1,9),q=ri(2,9);
  add("Cinco valores são "+(med5-p)+", "+(med5+p)+", "+(med5-q)+", "+(med5+q)+" e "+med5+". Qual é a média?",med5,
   "A soma é "+(med5*5)+" e a quantidade é 5: média = "+med5+".","Média de cinco valores");
  const mediana=ri(10,80),l1=ri(1,8),l2=ri(1,8),r1=ri(1,8),r2=ri(1,8);
  add("Determine a mediana do conjunto: "+[mediana-l1-l2,mediana-l1,mediana,mediana+r1,mediana+r1+r2].join(", ")+".",mediana,
   "Com cinco valores em ordem, a mediana é o terceiro: "+mediana+".","Mediana");
  const x=ri(3,75),coef=ri(2,10),termo=ri(10,90);
  add("Resolva a equação "+coef+"x + "+termo+" = "+(coef*x+termo)+". Qual é o valor de x?",x,
   "Isolando x: ("+(coef*x+termo)+" − "+termo+") ÷ "+coef+" = "+x+".","Equação de primeiro grau");
  add("Se "+coef+"x − "+termo+" = "+(coef*x-termo)+", qual é o valor de x?",x,
   "Somando "+termo+" aos dois lados e dividindo por "+coef+", obtém-se x = "+x+".","Equação com subtração");
  const u=ri(15,90),v=ri(3,Math.min(13,u-1));
  add("Se x + y = "+(u+v)+" e x − y = "+(u-v)+", qual é o valor de x?",u,
   "Somando as equações: 2x = "+(2*u)+"; logo x = "+u+".","Sistema de equações");
  const retA=ri(8,85),retB=ri(5,73);
  add("Qual é o perímetro, em metros, de um terreno retangular com "+retA+" m de comprimento e "+retB+" m de largura?",2*(retA+retB),
   "Perímetro = 2 × ("+retA+" + "+retB+") = "+(2*(retA+retB))+" m.","Perímetro do retângulo");
  add("Qual é a área, em metros quadrados, de um retângulo de "+retA+" m por "+retB+" m?",retA*retB,
   "Área do retângulo = "+retA+" × "+retB+" = "+(retA*retB)+" m².","Área do retângulo");
  const triBase=ri(5,85)*2,triAlt=ri(6,59);
  add("A base de um triângulo mede "+triBase+" cm e sua altura mede "+triAlt+" cm. Qual é a área em cm²?",triBase*triAlt/2,
   "Área = base × altura ÷ 2 = "+triBase+" × "+triAlt+" ÷ 2 = "+(triBase*triAlt/2)+".","Área do triângulo");
  const quad=ri(8,83);
  add("Um jardim quadrado tem lado de "+quad+" m. Qual é sua área em metros quadrados?",quad*quad,
   "Área do quadrado = lado² = "+quad+" × "+quad+" = "+(quad*quad)+".","Área do quadrado");
  add("Um quadrado tem lado de "+quad+" m. Qual é seu perímetro em metros?",4*quad,
   "O perímetro de um quadrado corresponde a quatro lados: 4 × "+quad+" = "+(4*quad)+" m.","Perímetro do quadrado");
  const prisma=ri(2,20),alt=ri(2,17),larg=ri(2,19);
  add("Uma caixa retangular tem medidas de "+prisma+" cm, "+alt+" cm e "+larg+" cm. Qual é seu volume em cm³?",prisma*alt*larg,
   "Volume = comprimento × largura × altura = "+prisma+" × "+alt+" × "+larg+" = "+(prisma*alt*larg)+".","Volume do paralelepípedo");
  const r=ri(3,30);
  add("Adotando π = 3, qual é a área de um círculo com raio de "+r+" cm, em cm²?",3*r*r,
   "Área = π × r² = 3 × "+r+"² = "+(3*r*r)+".","Área do círculo");
  add("Adotando π = 3, qual é o comprimento de uma circunferência com raio de "+r+" cm, em cm?",6*r,
   "Comprimento = 2 × π × r = 2 × 3 × "+r+" = "+(6*r)+".","Circunferência");
  const capital=ri(2,30)*100,taxa=ri(1,8),meses=ri(2,15);
  add("No regime de juros simples, um capital de R$ "+fmt(capital)+" rende "+taxa+"% ao mês por "+meses+" meses. Qual é o juro, em reais?",capital*taxa*meses/100,
   "Juro simples = "+capital+" × "+taxa+"/100 × "+meses+" = "+(capital*taxa*meses/100)+" reais.","Juros simples");
  add("Uma aplicação de R$ "+fmt(capital)+" gera juros simples de "+taxa+"% ao mês por "+meses+" meses. Qual é o montante final, em reais?",capital*(100+taxa*meses)/100,
   "Montante = capital + juros = "+capital+" + "+(capital*taxa*meses/100)+" = "+capital*(100+taxa*meses)/100+" reais.","Montante com juros simples");
  const metros=ri(5,250);
  add("Quantos centímetros existem em "+metros+" metros?",metros*100,
   "Um metro tem 100 centímetros: "+metros+" × 100 = "+(metros*100)+".","Conversão metro-centímetro");
  const quilogramas=ri(2,150);
  add("Quantos gramas correspondem a "+quilogramas+" quilogramas?",quilogramas*1000,
   "Um quilograma tem 1.000 gramas: "+quilogramas+" × 1.000 = "+(quilogramas*1000)+".","Conversão kg-g");
  const litros=ri(2,100);
  add("Quantos mililitros há em "+litros+" litros?",litros*1000,
   "Um litro corresponde a 1.000 mililitros: "+litros+" × 1.000 = "+(litros*1000)+".","Conversão litro-mililitro");
  const horas=ri(2,45);
  add("Quantos minutos existem em "+horas+" horas?",horas*60,
   "Cada hora contém 60 minutos: "+horas+" × 60 = "+(horas*60)+".","Conversão horas-minutos");
  const velo=ri(30,110),tempo=ri(2,13);
  add("Um veículo mantém velocidade média de "+velo+" km/h por "+tempo+" horas. Qual é a distância percorrida em km?",velo*tempo,
   "Distância = velocidade × tempo = "+velo+" × "+tempo+" = "+(velo*tempo)+" km.","Distância e velocidade");
  const viagem=ri(30,110),duracao=ri(2,12);
  add("Um trajeto de "+(viagem*duracao)+" km foi percorrido em "+duracao+" horas. Qual foi a velocidade média em km/h?",viagem,
   "Velocidade média = distância ÷ tempo = "+(viagem*duracao)+" ÷ "+duracao+" = "+viagem+" km/h.","Velocidade média");
  const tipos=ri(3,12),cores=ri(3,13);
  add("Para montar um uniforme, é possível escolher entre "+tipos+" modelos de camisa e "+cores+" modelos de calça. Quantas combinações são possíveis?",tipos*cores,
   "Pelo princípio multiplicativo, "+tipos+" × "+cores+" = "+(tipos*cores)+" combinações.","Contagem pelo produto");
  const primeiro=ri(2,50),razao=ri(2,14),pos=ri(6,30);
  add("Na progressão aritmética de primeiro termo "+primeiro+" e razão "+razao+", qual é o termo de posição "+pos+"?",primeiro+(pos-1)*razao,
   "Termo n = a₁ + (n − 1)r = "+primeiro+" + "+(pos-1)+" × "+razao+" = "+(primeiro+(pos-1)*razao)+".","Progressão aritmética");
  const caixas=ri(4,39),itens=ri(4,40),fora=ri(1,itens-1);
  add("Um estoque contém "+caixas+" caixas com "+itens+" unidades cada; "+fora+" unidades são retiradas de cada caixa. Quantas unidades permanecem?",caixas*(itens-fora),
   "Cada caixa fica com "+(itens-fora)+" unidades; no total são "+caixas+" × "+(itens-fora)+" = "+(caixas*(itens-fora))+".","Expressão numérica contextual");
  const n1=ri(2,25),n2=ri(2,25),n3=ri(2,10);
  add("Calcule o valor de ("+n1+" + "+n2+") × "+n3+".",(n1+n2)*n3,
   "Primeiro resolvem-se os parênteses: ("+n1+" + "+n2+") × "+n3+" = "+((n1+n2)*n3)+".","Prioridade das operações");
  const pct=ri(1,19)*5;
  add("Em uma pesquisa com 100 pessoas, "+pct+" responderam 'sim'. Qual é o percentual de respostas 'sim'?",pct,
   "Como a base é de 100 pessoas, o percentual equivale diretamente à contagem: "+pct+"%.","Frequência percentual",5);
  const sol=ri(2,26),tom=ri(2,25);
  add("Em uma sala com "+(sol+tom)+" pessoas, "+sol+" escolheram o turno da manhã. Quantas escolheram o outro turno?",tom,
   "Total − pessoas da manhã = "+(sol+tom)+" − "+sol+" = "+tom+".","Problemas com tabelas");
 }
 return saida;
}
