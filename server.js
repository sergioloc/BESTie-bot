require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
//const {token} = require('./config.json');
const prefix = '-'

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
    oldChannel = channels.get("752437665223409747");
    newChannel = channels.get("755350302646861836");
    var counter = await client.lib.move.channel(client, message.member, newChannel);
  }
  
});

client.login(process.env.BOT_TOKEN);