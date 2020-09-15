require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
//const {token} = require('./config.json');

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
  if(message.content.startsWith("ping")) {
    message.channel.send("Movido a teast");
    const mem = message.mentions.members.first()
    const chan = client.channels.get('test')
    mem.setVoiceChannel(chan)
  }
});

client.login(process.env.BOT_TOKEN);