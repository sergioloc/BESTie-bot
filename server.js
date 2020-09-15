require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '!'
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const roleA_ID = '755381690448478259' // Team A
const channelA_ID = '752441762743713842' // Team A

const roleB_ID = '755386352064790529' // Team B
const channelB_ID = '752441784604426270' // Team B

const roles = [roleA_ID, roleB_ID]
const channels = [channelA_ID, channelB_ID]

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

  channel = client.channels.cache.find(channel => channel.name === "comandos")
  if(message.channel != channel) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command == 'equipos'){
    for(var i = 0; i < roles.length; i++){
      const memberWithRole = message.guild.roles.cache.get(`${roles[i]}`).members.map(m=>m)
      for (var j = 0; j < memberWithRole.length; j++) {
        memberWithRole[j].voice.setChannel(`${channels[i]}`);
      }
    }
  }
  else if (command == 'all'){
    client.commands.get('all').execute(message, args);
  }
  else if (command == 'team'){
    client.commands.get('team').execute(message, args);
  }
});

client.login(process.env.BOT_TOKEN);