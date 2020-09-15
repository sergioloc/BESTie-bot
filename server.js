require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
//const {token} = require('./config.json');
const prefix = '-'

const roleA_ID = '755381690448478259' // Team A
const channelA_ID = '752441762743713842' // Team A

function presence(){
  client.user.setPresence({
      status: "online", //dnd, idle, invisible, online
      activity: {
          name: "Cantus",
          type: "PLAYING" //LISTENING, PLAYING, STREAMING, WATCHING
      }
  })
}

client.on("ready", () => {
    console.log("Estoy listo!");
    presence();
 });
 
client.on("message", (message) => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command == 'ping'){
    message.channel.send('pong');
  }

  else if (command == 'move'){
    //message.member.voice.setChannel('755350302646861836');
    const memberWithMORole = message.guild.roles.cache.get(`${roleA_ID}`).members.map(m=>m)
    for (var i = 0; i < memberWithMORole.length; i++) {
      memberWithMORole[i].voice.setChannel(`${channelA_ID}`);
    }
  }
  
});

client.login(process.env.BOT_TOKEN);