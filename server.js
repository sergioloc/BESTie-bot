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
    //Check
    if (!message.member.hasPermission("MOVE_MEMBERS")) {
      message.channel.send("You do not have the correct permissions!");
      
    }
    else{
      message.channel.send("You have the correct permissions.");
    }

    //Set channels
    alias = client.guild.config.alias;
    newChannel = message.member.voice.channel;
    oldChannelId = "";
    oldChannelName = "test";

    for (var key in alias) {
      if (alias[key].includes(oldChannelName)) {
        oldChannelId = key;
        break;
      }
    }

    oldChannel = message.guild.channels.cache.find(
      (val) => val.id === oldChannelId
    );

    //Moving users
    var counter = await client.lib.move.channel(client, oldChannel, newChannel);
    if (!counter) {
      message.channel.send(
        "Could not move to " + newChannel.name + ", is it full?"
      );
      return {
        success: false,
        message: "Could not move to " + newChannel.name + ", is it full?",
      };
    }

  }
  
});

client.login(process.env.BOT_TOKEN);