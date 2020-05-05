
//Aqui é o requeirimento das "extenções"

const Discord = require('discord.js');
const firebase = require('firebase');
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
Phantom.prefix = config.prefix;

const Phantom = new Discord.Client({
    autoReconnect: true,
    messageCacheMaxSize: 4048,
    fetchAllMembers: false,
    disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking'],
    messageCacheLifetime: 1680,
    disableEveryone: false
});
Phantom.on('ready', () => {
  
  
  
    let tt = [
        { name: `Meu prefixo: !`, type: 'PLAYING'},
        { name: `Meus criador Fillipe#9200 xF4T4Lx#2341 🌳`, type: 'PLAYING'},
        { name: `${Phantom.users.size} Usuários, Muito obrigado 😊`, type: 'Watching'},
        { name: `${Phantom.guilds.size} Servidores`, type: 'Watching'},
        {name:`LipeGamer`, type: 'STREAMING', url:'https://www.twitch.tv/lipegamer_01'},
        {name:`TINHO`, type: 'STREAMING', url:'https://www.twitch.tv/llxf4t4lxll'}
    ];
    function setStatus() {
        let rs = tt[Math.floor(Math.random() * tt.length)];
        Phantom.user.setPresence({ game: rs });
    }
    setStatus();
  setInterval(() => setStatus(),4000)
  });
var firebaseConfig = {
  apiKey: "AIzaSyBvElKywi3AMyURnkt6avy1vN8cvx__Yus",
  authDomain: "tf-bot.firebaseapp.com",
  databaseURL: "https://tf-bot.firebaseio.com",
  projectId: "tf-bot",
  storageBucket: "tf-bot.appspot.com",
  messagingSenderId: "235101004813",
  appId: "1:235101004813:web:2d272497ca060ce3592144",
  measurementId: "G-KM426LVV4W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
/////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////// ESTRUTURA DAS MENSAGEM COM ADIÇAO DAS REACT EM CADA ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var perg1 = ('Roleplay Significa?  \n\n 1⃣ Mata-Mata  \n\n 2⃣ Role com os Amigos \n\n 3⃣  Simular a vida real \n\n 4⃣ Simular a Fantasia')
var perg2 = ('O que é RDM? \n\n 1⃣ RDM é usada para quem abusou de bug. \n\n 2⃣ RDM é atropelar alguém sem motivos. \n\n 3⃣ RDM é matar alguém sem motivos. \n\n 4⃣ RDM é sacar uma arma e ameaçar alguém. ')
var perg3 = ('O que é considerado anti RP? \n\n 1⃣ Vender drogas em área safe \n\n 2⃣ É você quebrar as regras do servidor. \n\n 3⃣ E você cometer infrações de trânsito. \n\n 4⃣ É você fazer rp de bandido. ')
var perg4 = ('O que é AMOR A VIDA? \n\n 1⃣ Reagir a um assalto. \n\n 2⃣ É valorizar a sua vida como ela fosse única. \n\n 3⃣ É ter amor próprio. \n\n 4⃣ E pular de uma ponte para evitar não ser pego. ')
var perg5 = ('O que é PowerGaming? \n\n 1⃣ É você ter super forças no jogo. \n\n 2⃣ E você usar informação fora do jogo. \n\n 3⃣ É abusar da mecânica do jogo \n\n 4⃣ E você fazer um rp forçando com os players.')
var perg6 = ('O que é MetaGaming? \n\n 1⃣ É você usar algo do Discord dentro do Jogo. \n\n 2⃣ É você fazer RP baseado em metas de missões. \n\n 3⃣ É você pedir alguém em Casamento \n\n 4⃣ É você jogar usando Discord ')
var perg7 = ('O que é COMBAT LOGGING? \n\n 1⃣ É entrar em combate na ação. \n\n 2⃣ É chamar alguém para lutar. \n\n 3⃣ É deslogar do servidor para fugir de abordagem, prisão, roubo. \n\n 4⃣ É tentar fugir ao ser abordado. ')
var perg8 = ('Quais são as safe zones? \n\n 1⃣ Zonas Safes: Praça, Delegacia, Hospital, Concessionária \n\n 2⃣ Delegacia, Hospital, Concessionária, Areas de Farm Legal \n\n 3⃣ Aeroporto, Garagem, Areas de Farm Legal \n\n 4⃣ Praça, Areas de Farm Legal, Hospital, Delegacia. ')
var perg9 = ('O que é VDM? \n\n 1⃣ É usar um Veiculo para matar alguém \n\n 2⃣ É matar alguém sem motivo. \n\n 3⃣ É ato de abusar da mecânica do jogo \n\n 4⃣ VDM é subir uma montanha com carro de drift. ')
var perg10 = ('Se você morrer o que você deverá fazer? \n\n 1⃣ Reiniciar o FiveM e reentrar no servidor \n\n 2⃣ Aguardar a contagem terminar para voltar ao RP \n\n 3⃣ Pedir para um Staff me reviver \n\n 4⃣ Nenhuma das anterioresde drift. ')
var perg11 = ('Ao ser algemado(a) sua comunicação é cortada automaticamente, logo: \n\n 1⃣ Mando tirarem a algema porque o RP está errado \n\n 2⃣ Devo seguir o RP que está sendo feito no momento \n\n 3⃣ Chamo alguém pelo Discord para me ajudar \n\n 4⃣ Peço pra um staff vim resolver a situação ')
var perg12 = ('Nas áreas de risco elevado o crime é conhecidamente praticado e a policia não patrulha, sendo assim: \n\n 1⃣ Ao entrar numa dessas áreas posso praticar atropelamentos \n\n 2⃣ Posso matar só por matar \n\n 3⃣ Posso roubar e/ou matar, porém com motivos e abordagem correto \n\n 4⃣ Posso ser roubado e morto e depois me vingar ')
var perg13 = ('Ao entrar no servidor você concorda com todas as regras nele impostas? \n\n 1⃣ Discordo \n\n 2⃣ Que regras? \n\n 3⃣ Nulo \n\n 4⃣ Concordo   ')
var inst = (' Leia com atenção todas as questões e reaja com o emoji correspondente a alternativa correta! ')///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////s///////////////////////////////////////
Phantom.on('raw', async dados => {
if(dados.t === "MESSAGE_REACTION_ADD" && dados.t === "MESSAGE_REACTION_REMOVE")
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  global.xp = '';
if(dados.t === "MESSAGE_REACTION_ADD"){
  if(dados.d.user_id === `698659329422917662`)return
  let servidor = Phantom.guilds.get("698652217015533638")
  let membro = servidor.members.get(dados.d.user_id)
  let canal1 = servidor.channels.get('702329814568271973')
      if(dados.d.emoji.id === "702328957512450058"){
          if(dados.d.message_id != "704706279574339595") return 
              let ide = dados.d.user_id     
              database.ref(`Servidores/levels/${dados.d.user_id}`)
              .once('value').then(async function(snap){
                  if(snap.val() == null){
                      database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .set({
                              xp: 0,
                              ip: ide,
                              cont: 0,
                              canal: 0
                          });
                  } else {
                      database.ref(`Servidores/levels/${dados.d.user_id}`)
                      .update({
                          xp: 0,
                          ip: ide,
                          cont: 0,
                          canal: 0
                      });
                  }; 
              });
              let embed = new Discord.RichEmbed() 
              .setColor("GREEN")//COR DA CAIXA DE DIALOGO
              .setTitle(`SERVIDOR WL\n`)
              .addField("Instruções: ", `${inst}`)
              .setTimestamp(new Date())
              .setFooter(` Reaja com ✅ para iniciar a Wl automatica! `)
              membro.send(embed).then(msg => {
              msg.react('✅')
              },
          )
      };
      if(dados.d.emoji.name === "✅"){
          let opa1 = dados.d.channel_id
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().cont === 0){
                  if(dados.d.guild_id === undefined){
                      //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                      database.ref(`Servidores/levels/${dados.d.user_id}`)
                      .update({
                          xp: 0,
                          cont: 1,
                          canal: opa1
                      })
                      let pg1 = new Discord.RichEmbed()
                      .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                      .setTitle(`Pergunta: ** 1**\n`)
                      .addField("Pergunta: ", `${perg1}`)
                      .setTimestamp(new Date())
                      .setFooter(` Leia com atenção!  `)
                      membro.send(pg1).then(msg => {
                          msg.react('1⃣').then(() => {
                              msg.react('2⃣').then(() => {
                                  msg.react("3⃣").then(() => {
                                      msg.react("4⃣").then(() => {
                                      })
                                  })
                              })
                          })
                      }) 
                  }
              }    
          }            
          })
      };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 1 INCORETA   1ª - 3  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "4⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 1){
                      if(dados.d.guild_id === undefined){
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 2
                          })
                          let pg2 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#2**\n`)
                          .addField("Pergunta: ", `${perg2}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg2).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 2 INCORETA 2ª - 3 ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "4⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 2){
                      if(dados.d.guild_id === undefined){
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 3
                          })                        
                          let pg3 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#3**\n`)
                          .addField("Pergunta: ", `${perg3}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg3).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 3 INCORETA  3ª - 2 ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "4⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 3){
                      if(dados.d.guild_id === undefined){
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 4
                          })                        
                          let pg4 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#4**\n`)
                          .addField("Pergunta: ", `${perg4}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg4).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 4 INCORETA   4ª - 2  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "4⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 4){
                      if(dados.d.guild_id === undefined){
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 5
                          })                        
                          let pg5 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#5**\n`)
                          .addField("Pergunta: ", `${perg5}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg5).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 5 INCORETA   5ª - 3  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "4⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 5){
                      if(dados.d.guild_id === undefined){
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 6
                          })                        
                          let pg6 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#6**\n`)
                          .addField("Pergunta: ", `${perg6}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg6).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 6 INCORETA  6ª - 1  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "4⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 6){
                      if(dados.d.guild_id === undefined){
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 7
                          })                        
                          let pg7 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#7**\n`)
                          .addField("Pergunta: ", `${perg7}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg7).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 7 INCORETA   7ª - 3   ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "4⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 7){
                      if(dados.d.guild_id === undefined){
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 8
                          })                        
                          let pg8 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#8**\n`)
                          .addField("Pergunta: ", `${perg8}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg8).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 8 INCORETA   8ª - 2  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "4⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 8){
                      if(dados.d.guild_id === undefined){
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 9
                          })                        
                          let pg9 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#9**\n`)
                          .addField("Pergunta: ", `${perg9}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg9).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 9 INCORETA   9ª - 1  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "4⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 9){
                      if(dados.d.guild_id === undefined){
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 10
                          })                        
                          let pg10 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#10**\n`)
                          .addField("Pergunta: ", `${perg10}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg10).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 10 INCORETA   10ª - 2  ///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (dados.d.emoji.name === "4⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "1⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 10){
                      if(dados.d.guild_id === undefined){
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 11
                          })                        
                          let pg11 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#11**\n`)
                          .addField("Pergunta: ", `${perg11}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg11).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 11 INCORETA   11ª - 2  ///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (dados.d.emoji.name === "4⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "1⃣" ){ 
  database.ref(`Servidores/levels/${dados.d.user_id}`)
  .once('value').then(async function(snap3){
      //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
  if(snap3.val().ip === dados.d.user_id){
      if(snap3.val().canal === dados.d.channel_id){
          if(snap3.val().cont === 11){
              if(dados.d.guild_id === undefined){
                  //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                  database.ref(`Servidores/levels/${dados.d.user_id}`)
                  .update({
                      cont: 12
                  })                        
                  let pg12 = new Discord.RichEmbed()
                  .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                  .setTitle(`Pergunta: **#12**\n`)
                  .addField("Pergunta: ", `${perg12}`)
                  .setTimestamp(new Date())
                  .setFooter(` Leia com atenção! `)
                  membro.send(pg12).then(msg => {
                      msg.react('1⃣').then(() => {
                          msg.react('2⃣').then(() => {
                              msg.react("3⃣").then(() => {
                                  msg.react("4⃣").then(() => {
                                  })
                              })
                          })
                      })
                  })
              }
          }
      }
  }
  })
};



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 12 INCORETA   12ª - 3  ///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (dados.d.emoji.name === "4⃣" || dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "1⃣" ){ 
  database.ref(`Servidores/levels/${dados.d.user_id}`)
  .once('value').then(async function(snap3){
      //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
  if(snap3.val().ip === dados.d.user_id){
      if(snap3.val().canal === dados.d.channel_id){
          if(snap3.val().cont === 12){
              if(dados.d.guild_id === undefined){
                  //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                  database.ref(`Servidores/levels/${dados.d.user_id}`)
                  .update({
                      cont: 13
                  })                        
                  let pg13 = new Discord.RichEmbed()
                  .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                  .setTitle(`Pergunta: **#13**\n`)
                  .addField("Pergunta: ", `${perg13}`)
                  .setTimestamp(new Date())
                  .setFooter(` Leia com atenção! `)
                  membro.send(pg13).then(msg => {
                      msg.react('1⃣').then(() => {
                          msg.react('2⃣').then(() => {
                              msg.react("3⃣").then(() => {
                                  msg.react("4⃣").then(() => {
                                  })
                              })
                          })
                      })
                  })
              }
          }
      }
  }
  })
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 13 INCORETA  13ª - 4  ///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "1⃣" ){ 
  database.ref(`Servidores/levels/${dados.d.user_id}`)
  .once('value').then(async function(snap3){
      //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
  if(snap3.val().ip === dados.d.user_id){
      if(snap3.val().canal === dados.d.channel_id){
          if(snap3.val().cont === 13){
              if(dados.d.guild_id === undefined){
                  //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                  database.ref(`Servidores/levels/${dados.d.user_id}`)
                  .update({
                      cont: 14
                  })                        
                  let fim3 = new Discord.RichEmbed()
                  .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                  .setTitle(`OKAMI WL`)
                  .addField("Termos: ", 'Se você concorda com as regras e termos do servidor clique em 👾 e saiba se foi aprovado ou não!')
                  .setTimestamp(new Date())
                  .setFooter(` Reaja com 👾 para saber seu resultado! `)
                  membro.send(fim3).then(msg => {
                      msg.react('👾').then(() => {
                      })
                  })
              }
          }
      }
  }
  })
};








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// RESPOSTA CORRETAS 1ª - 3  //////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////// resposta 1
      if (dados.d.emoji.name === "3⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              let xp1 = snap3.val().xp
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 1){
                      if(dados.d.guild_id === undefined){
                          xp1 = xp1 + 1
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 2,
                              xp: xp1
                          })                        
                          let pg2 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#2**\n`)
                          .addField("Pergunta: ", `${perg2}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg2).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
///////////////// resposta 2   2ª - 3
      if (dados.d.emoji.name === "3⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              let xp1 = snap3.val().xp
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 2){
                      if(dados.d.guild_id === undefined){
                          xp1 = xp1 + 1
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 3,
                              xp: xp1
                          })                        
                          let pg3 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#3**\n`)
                          .addField("Pergunta: ", `${perg3}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `) 
                          membro.send(pg3).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
///////////////// resposta 3   3ª - 2
      if (dados.d.emoji.name === "2⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              let xp1 = snap3.val().xp
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 3){
                      if(dados.d.guild_id === undefined){
                          xp1 = xp1 + 1
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 4,
                              xp: xp1
                          })                        
                          let pg4 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#4**\n`)
                          .addField("Pergunta: ", `${perg4}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg4).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
///////////////// resposta 4   4ª - 2
      if (dados.d.emoji.name === "2⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              let xp1 = snap3.val().xp
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 4){
                      if(dados.d.guild_id === undefined){
                          xp1 = xp1 + 1
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 5,
                              xp: xp1
                          })                         
                          let pg5 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#5**\n`)
                          .addField("Pergunta: ", `${perg5}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg5).then(msg => {
                            msg.react('1⃣').then(() => {
                                msg.react('2⃣').then(() => {
                                    msg.react("3⃣").then(() => {
                                        msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
///////////////// resposta 5   5ª - 3
      if (dados.d.emoji.name === "3⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              let xp1 = snap3.val().xp
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 5){
                      if(dados.d.guild_id === undefined){
                          xp1 = xp1 + 1
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 6,
                              xp: xp1
                          })                        
                          let pg6 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#6**\n`)
                          .addField("Pergunta: ", `${perg6}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg6).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
///////////////// resposta 6  6ª - 1
      if (dados.d.emoji.name === "1⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              let xp1 = snap3.val().xp
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 6){
                      if(dados.d.guild_id === undefined){
                          xp1 = xp1 + 1
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 7,
                              xp: xp1
                          })                        
                          let pg7 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#7**\n`)
                          .addField("Pergunta: ", `${perg7}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg7).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
///////////////// resposta 7   7ª - 3
      if (dados.d.emoji.name === "3⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              let xp1 = snap3.val().xp
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 7){
                      if(dados.d.guild_id === undefined){
                          xp1 = xp1 + 1
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 8,
                              xp: xp1
                          })                        
                          let pg8 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#8**\n`)
                          .addField("Pergunta: ", `${perg8}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg8).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
///////////////// resposta 8    8ª - 2
      if (dados.d.emoji.name === "2⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              let xp1 = snap3.val().xp
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 8){
                      if(dados.d.guild_id === undefined){
                          xp1 = xp1 + 1
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 9,
                              xp: xp1
                          })                        
                          let pg9 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#9**\n`)
                          .addField("Pergunta: ", `${perg9}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg9).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
///////////////// resposta 9   9ª - 1
      if (dados.d.emoji.name === "1⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              let xp1 = snap3.val().xp
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 9){
                      if(dados.d.guild_id === undefined){
                          xp1 = xp1 + 1
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 10,
                              xp: xp1
                          })                        
                          let pg10 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#10**\n`)
                          .addField("Pergunta: ", `${perg10}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg10).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
///////////////// resposta 10   10ª - 2
      if (dados.d.emoji.name === "2⃣" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              let xp1 = snap3.val().xp
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 10){
                      if(dados.d.guild_id === undefined){
                          xp1 = xp1 + 1
                          //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                          database.ref(`Servidores/levels/${dados.d.user_id}`)
                          .update({
                              cont: 11,
                              xp: xp1
                          })                        
                          let pg11 = new Discord.RichEmbed()
                          .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Pergunta: **#11**\n`)
                          .addField("Pergunta: ", `${perg11}`)
                          .setTimestamp(new Date())
                          .setFooter(` Leia com atenção! `)
                          membro.send(pg11).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                          })
                                      })
                                  })
                              })
                          })
                      }
                  }
              }
          }
          })
      };
///////////////// resposta 11   11ª - 2
if (dados.d.emoji.name === "2⃣" ){ 
  database.ref(`Servidores/levels/${dados.d.user_id}`)
  .once('value').then(async function(snap3){
      let xp1 = snap3.val().xp
      //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
  if(snap3.val().ip === dados.d.user_id){
      if(snap3.val().canal === dados.d.channel_id){
          if(snap3.val().cont === 11){
              if(dados.d.guild_id === undefined){
                  xp1 = xp1 + 1
                  //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                  database.ref(`Servidores/levels/${dados.d.user_id}`)
                  .update({
                      cont: 12,
                      xp: xp1
                  })                        
                  let pg12 = new Discord.RichEmbed()
                  .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                  .setTitle(`Pergunta: **#12**\n`)
                  .addField("Pergunta: ", `${perg12}`)
                  .setTimestamp(new Date())
                  .setFooter(` Leia com atenção! `)
                  membro.send(pg12).then(msg => {
                      msg.react('1⃣').then(() => {
                          msg.react('2⃣').then(() => {
                              msg.react("3⃣").then(() => {
                                  msg.react("4⃣").then(() => {
                                  })
                              })
                          })
                      })
                  })
              }
          }
      }
  }
  })
};

///////////////// resposta 12   12ª - 3
if (dados.d.emoji.name === "3⃣" ){ 
  database.ref(`Servidores/levels/${dados.d.user_id}`)
  .once('value').then(async function(snap3){
      let xp1 = snap3.val().xp
      //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
  if(snap3.val().ip === dados.d.user_id){
      if(snap3.val().canal === dados.d.channel_id){
          if(snap3.val().cont === 12){
              if(dados.d.guild_id === undefined){
                  xp1 = xp1 + 1
                  //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                  database.ref(`Servidores/levels/${dados.d.user_id}`)
                  .update({
                      cont: 13,
                      xp: xp1
                  })                        
                  let pg13 = new Discord.RichEmbed()
                  .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                  .setTitle(`Pergunta: **#13**\n`)
                  .addField("Pergunta: ", `${perg13}`)
                  .setTimestamp(new Date())
                  .setFooter(` Leia com atenção! `)
                  membro.send(pg13).then(msg => {
                      msg.react('1⃣').then(() => {
                          msg.react('2⃣').then(() => {
                              msg.react("3⃣").then(() => {
                                  msg.react("4⃣").then(() => {
                                  })
                              })
                          })
                      })
                  })
              }
          }
      }
  }
  })
};


///////////////// resposta 13   13ª - 4
if (dados.d.emoji.name === "4⃣" ){ 
  database.ref(`Servidores/levels/${dados.d.user_id}`)
  .once('value').then(async function(snap3){
      let xp1 = snap3.val().xp
      //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
  if(snap3.val().ip === dados.d.user_id){
      if(snap3.val().canal === dados.d.channel_id){
          if(snap3.val().cont === 13){
              if(dados.d.guild_id === undefined){
                  xp1 = xp1 + 1
                  //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                  database.ref(`Servidores/levels/${dados.d.user_id}`)
                  .update({
                      cont: 14,
                      xp: xp1
                  })                        
                  let fim3 = new Discord.RichEmbed()
                  .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                  .setTitle(`SERVIDOR WL`)
                  .addField("Termos: ", 'Se você concorda com as regras e termos do servidor clique em 👾 e saiba se foi aprovado ou não!')
                  .setTimestamp(new Date())
                  .setFooter(` Reaja com 👾 para saber seu resultado! `)
                  membro.send(fim3).then(msg => {
                      msg.react('👾').then(() => {
                      })
                  })
              }
          }
      }
  }
  })
};
















///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////coletor e verfificador  /////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (dados.d.emoji.name === "👾" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              let xp1 = snap3.val().xp
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 14){
                      if(dados.d.guild_id === undefined){
                          if(snap3.val().xp != 8){
                              database.ref(`Servidores/levels/${dados.d.user_id}`)
                              .update({
                                  cont: 15
                              }) 
                              let fim2 = new Discord.RichEmbed()
                              .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                              .setTitle(`VOCÊ FOI REPROVADO!`)
                              .addField("Você nao atingiu pontuação: ", ` ${xp1} / 13 .`)
                              .setTimestamp(new Date())
                              .setFooter(` Reaja com 🔁 para refazer a wl! `)
                              membro.send(fim2).then(msg => {
                                  msg.react('🔁').then(() => {
                                  })
                              })
                          }
                      }
                  }
              }
          }
          })
      };
////////////// SE FOR PONT MAXIMA
      if (dados.d.emoji.name === "👾" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              let xp1 = snap3.val().xp
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 14){
                      if(dados.d.guild_id === undefined){
                          if(snap3.val().xp === 8){
                              database.ref(`Servidores/levels/${dados.d.user_id}`)
                              .update({
                                  cont: 15
                              }) 
                              let fim1 = new Discord.RichEmbed()
                              .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                              .setTitle(`VOCÊ FOI APROVADO!`)
                              .addField("Pontuação: ", ` ${xp1} / 13.`)
                              .setTimestamp(new Date())
                              .setFooter(` Parabéns você foi aprovado tenha um bom jogo! Reaja com 🔝 para escrever sua historia!`)
                              membro.send(fim1).then(msg => {
                                  msg.react('🔝').then(() => {
                                  })
                              })
                          }
                      }
                  }
              }
          }
          })
      };
////////////// se nao atingir pontuaçao
      if (dados.d.emoji.name === "🔁" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              let xp1 = snap3.val().xp
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 15){
                      if(dados.d.guild_id === undefined){
                          if(snap3.val().xp != 8){
                              database.ref(`Servidores/levels/${dados.d.user_id}`)
                              .update({
                                  cont: 16
                              }) 
                              let embed1 = new Discord.RichEmbed()
                              .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                              .setTitle(`SERVIDOR WL\n`)
                              .addField("Instruções: ", `${inst}`)
                              .setTimestamp(new Date())
                              .setFooter(` Reaja com ✅ para iniciar a Wl automatica! `)
                              membro.send(embed1).then(msg => {
                                msg.react('✅')
                              })
                          }
                      }
                  }
              }
          }
          })
      };
////////////// TERMINOU WL PONT MAXIMA
      if (dados.d.emoji.name === "🔝" ){ 
          database.ref(`Servidores/levels/${dados.d.user_id}`)
          .once('value').then(async function(snap3){
              let xp1 = snap3.val().xp
              //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
          if(snap3.val().ip === dados.d.user_id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 15){
                      if(dados.d.guild_id === undefined){
                          if(snap3.val().xp === 13){
                              database.ref(`Servidores/levels/${dados.d.user_id}`)
                              .update({
                                  cont: 16
                              }) 
                              //let cargof = servidor.roles.get('672803069670588438')
                              //membro.addRole(cargof)
                              let embed12 = new Discord.RichEmbed()
                              .setColor("RED")//COR DA CAIXA DE DIALOGO
                              .setTitle(`OKAMI WL\n`)
                              .addField(" Você passou na WL ", `<@${dados.d.user_id}>, execute o comando !historia (e a historia de seu personagem) aqui memso! `)
                              .setTimestamp(new Date())
                              .setFooter(` Quase la! `)
                              membro.send(embed12)
                          }
                      }
                  }
              }
          }
          })
      };
  };

  if(dados.t == 'MESSAGE_CREATE'){
      if(dados.d.author.id == '701541118436835440') return;
      let args = dados.d.content
      let msg = args.slice(0, 9)
      let msge = args.slice(0, 4)
      let msge1 = args.slice(4,22)
     
      if(msg == '!historia'){
          let servidor = Phantom.guilds.get(`460945945236996107`)
          let membro = servidor.members.get(dados.d.author.id)
          let canal1 = servidor.channels.get(dados.d.channel_id)
    
    
         
         
          let msg2 = args.slice(10, 120000)
          let msg3 = args.slice(50, 120000)

          if (!msg3) return membro.send(`Historia curta ou inexistente! Repita o comando!`);
          database.ref(`Servidores/levels/${dados.d.author.id}`)
          .once('value').then(async function(snap3){
              //let xp1 = snap3.val().xp
              console.log(`${snap3.val().ip}`);
          if(snap3.val().ip === dados.d.author.id){
              if(snap3.val().canal === dados.d.channel_id){
                  if(snap3.val().cont === 16){
                      if(dados.d.guild_id === undefined){
                          if(snap3.val().xp === 0){
                              database.ref(`user/${dados.d.author.id}`)
                              .once('value').then(async function(snap){
                                  if(snap.val() == null){
                                      database.ref(`user/${dados.d.author.id}`)
                                          .set({
                                            hs: msg2,
                                            name: 0
                                          });
                                  } else {
                                      database.ref(`user/${dados.d.author.id}`)
                                      .update({
                                        hs: msg2
                                      });
                                  }; 
                              });
                              database.ref(`Servidores/levels/${dados.d.author.id}`)
                              .update({
                                  cont: 17
                              }); 
                              let embed203 = new Discord.RichEmbed()
                              .setColor("BLUE")//COR DA CAIXA DE DIALOGO
                              .setTitle(`:man_detective: |\n`)
                              .addField("Mensagem: ", ` <@${dados.d.author.id}> FOI APROVADO NA WL`)
                              .setTimestamp(new Date())
                              let embed12 = new Discord.RichEmbed()
                              .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                              .setTitle(`OKAMI WL\n`)
                              .addField(" Agora so falta a entrevista fique de olho no chat dos aprovados! ")
                              .setFooter(` Bom jogo! `)
                              membro.send(embed12) 
                              let cargof = servidor.roles.get('703711652402429952')
                              let cargoh = servidor.roles.get('671359044144857109')
                              membro.addRole(cargof)
                              membro.removeRole(cargoh)
                              canal1.send(embed203)
                          }
                      }
                  }
              }
          }
          })
      }
      let servidor = Phantom.guilds.get(dados.d.guild_id)
      let canal12 = servidor.channels.get(`702639540745011309`)


      if(msge == '!hs'){
          if(dados.d.channel_id == `702639540745011309`){
              database.ref(`user/${dados.d.author.id}`)
                .once('value').then(async function(snap){
              canal12.send(`<@${dados.d.author.id}>     ${snap.val().hs}  `);
              })
          }
      }
      




  }




})
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Aqui quando o bot estiver online vai registrar no console as seguintes informações abaixos!
Phantom.on("ready", () => {
  console.log(`Phantom\nServidores:${Phantom.guilds.size}\nUsuários:${Phantom.users.size}\nEmojis:${Phantom.emojis.size}`);
});

let prefix = "!" //prefix do bot

Phantom.on("message", async message => {

    if(message.content.startsWith(prefix + 'aprovar')) { //nome do comando
        const mysql = require('mysql'); 
        //Entrando na mysql
        const connection = mysql.createConnection({ //Info da database, para conectar
          host: '127.0.0.1',
          user: 'root',
          password: '',
          database: 'allstar'
        });
        connection.connect((err) => {
        });
        if(!message.guild.member(message.author.id).hasPermission("BAN_MEMBERS")) return message.channel.send({ //Só é liberado o comando caso a pessoa tenha a permissão de banir
            embed:{title: 'Você não tem permissão para usar este comando!',color: 0xFFFF00}
          })
    
const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const sayMessage = args.slice(1).join(" ");

          setInterval(function () {
            connection.query('SELECT 1');
          }, 5000);
      
        
            connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${sayMessage}'`, (err, rows) => { //atualizando a whitelist do servidor
    
            message.reply(`**o id ${sayMessage} foi ativado**`) //Falando q o id foi ativado
    
            var usuario = new Discord.RichEmbed()
            .setTitle("SKRoleplay | Aprovado ")
            .setDescription(`O id **${sayMessage}** foi aprovado na **whitelist** com sucesso\n pelo staff **${message.author.username}!**`)
            .setColor(0xFFFF00)
            .setTimestamp(new Date())
            .setThumbnail('http://queropassaremconcursos.com.br/wp-content/uploads/2016/07/aprovado-concurso-TJ-MG.png')
            Phantom.guilds.get('698652217015533638').channels.get('698652618578329632').send(usuario); //id do servidor/canal 
          });
    }
    })

    Phantom.on("message", message => {

      if(message.content.startsWith(prefix + 'reprovar')) { //nome do comando
          const mysql = require('mysql'); 
          //Entrando na mysql
          const connection = mysql.createConnection({ //Info da database, para conectar
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'allstar'
          });
          connection.connect((err) => {
          });
          if(!message.guild.member(message.author.id).hasPermission("BAN_MEMBERS")) return message.channel.send({ //Só é liberado o comando caso a pessoa tenha a permissão de banir
              embed:{title: 'Você não tem permissão para usar este comando!',color: 0xFFFF00}
            })
      
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
          const sayMessage = args.slice(1).join(" ");
  
            setInterval(function () {
              connection.query('SELECT 0');
            }, 5000);
        
          
              connection.query(`UPDATE vrp_users SET whitelisted = '0' WHERE id = '${sayMessage}'`, (err, rows) => { //atualizando a whitelist do servidor
      
              message.reply(`**o id ${sayMessage} foi reprovado**`) //Falando q o id foi ativado
      
              var usuario = new Discord.RichEmbed()
              .setTitle("SKRoleplay | Reprovado ")
              .setDescription(`O id **${sayMessage}** foi reprovado na **whitelist** \n pelo staff **${message.author.username}!**`)
              .setColor(0xFFFF00)
              .setTimestamp(new Date())
              .setThumbnail('http://www.blogdorobertosantos.com.br/wp-content/uploads/2016/06/Reprovado.jpg')
              Phantom.guilds.get('698652217015533638').channels.get('698652618578329632').send(usuario); //id do servidor/canal 
            })
        
      }
      })
      Phantom.on("message", async message => {
      
        let args = message.content.split(" ").slice(1);
        let command = message.content.split(" ")[0];
        command = command.slice(config.prefix.length);
        try {
          let commandFile = require(`./comandos/${command}.js`);
          delete require.cache[require.resolve(`./comandos/${command}.js`)];
          return commandFile.run(Phantom, message, args);
        } catch (err) {
          console.error("Erro:" + err);
        }
      });
Phantom.on("message", message => {

if(message.channel.type == "dm") return 
})
Phantom.login("AQUI NAO DIVULGO"); //Token do bot