const Discord = require("discord.js");
module.exports = {
    execute(message){
        const embed = new Discord.MessageEmbed()
        .setTitle('BESTie help')
        .setDescription('Move members at the same time!\nThey must be in a voice channel.')
        .setColor(0x0070b8)
        .addField('!all [Channel]', 'Move everyone to [Channel]')
        .addField('!team [Team]', 'Move [Team] members to their voice channel')
        .addField('!teams [Team1], [Team2]...', 'Move multiple teams members to their voice channel');
        message.channel.send(embed);
    }
};