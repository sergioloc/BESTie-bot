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
    alias = client.guild.config.alias;

    if (message.webhookID) {
      return client.lib.message.send(client, message.channel, "CANNOT_WEBHOOK");
    }

    oldChannel = message.member.voice.channel;
    var newChannel;

    //Check if no argument is passed
    if (typeof args[0] == "undefined") {
      return client.lib.message.send(
        client,
        message.channel,
        "PROVIDE_CHANNELNAME"
      );
    }

    //Check if the user is part of a voicechannel.
    if (typeof oldChannel === "undefined") {
      return client.lib.message.send(
        client,
        message.channel,
        "NOT_IN_VOICECHANNEL"
      );
    }

    //Tried to find the channelID from the name
    for (var key in alias) {
      if (alias[key].includes(args[0])) {
        //newChannelId = key;
        newChannel = message.guild.channels.cache.find((val) => val.id === key);
        break;
      }
    }

    //Check if no key is found
    if (typeof newChannel === "undefined") {
      return client.lib.message.send(client, message.channel, "NO_SUCH_CHANNEL", {
        newChannelName: args[0],
      });
    }

    //Check if it is the same channel.
    if (oldChannel.id == newChannel.id) {
      return client.lib.message.send(
        client,
        message.channel,
        "ALREADY_IN_CHANNEL"
      );
    }

    //Check bot permissions for the channel
    if (!client.lib.checkPermissions(client, oldChannel)) {
      return client.lib.message.send(
        client,
        message.channel,
        "BOT_NO_PERMISSION",
        { oldChannelName: oldChannel.name }
      );
    }

    //Check if the user have permission for the channel.
    if (!newChannel.memberPermissions(message.member).has("CONNECT")) {
      return client.lib.message.send(
        client,
        message.channel,
        "USER_NO_PERMISSION",
        { newChannelName: newChannel.name }
      );
    }

    var counter = await client.lib.move.channel(
      client,
      message.member,
      newChannel
    );

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