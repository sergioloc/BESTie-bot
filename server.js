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
  if(message.content.startsWith(prefix) && !message.author.bot){

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command){
      case 'all':
        client.commands.get('all').execute(message, args);
        break;

      case 'team':
        client.commands.get('team').execute(client, message, args);
        break;

      case 'teams':
        client.commands.get('teams').execute(client, message, args);
        break;

      case 'list':
        client.commands.get('list').execute(message);
        break;

      case 'help':
        const embed = new Discord.MessageEmbed()
        .setTitle('BESTie help')
        .setDescription('Move members at the same time!\nThey must be in a voice channel.')
        .setColor(0x0070b8)
        .addField('!all [Channel]', 'Move everyone to [Channel]')
        .addField('!team [Team]', 'Move [Team] members to their voice channel')
        .addField('!teams [Team1], [Team2]...', 'Move multiple teams members to their voice channel');
        message.channel.send(embed);
        break;
    }
  }
});

client.login(process.env.BOT_TOKEN);