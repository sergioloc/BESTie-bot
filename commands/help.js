const Discord = require("discord.js");
module.exports = {
    name: 'help',
    description: 'Help command',

    execute(message){
        const embed = new Discord.MessageEmbed()
        .setTitle('BESTie help')
        .setDescription('Move members at the same time!\n\u200b')
        .setColor(0x0070b8)
        .addField('__MOVE COMMANDS__', '\u200b')
        .addField('!all [Channel]', '_Move everyone to [Channel]_\n\u200b')
        .addField('!team [Team]', '_Move [Team] members to their voice channel_\n\u200b')
        .addField('!team [Team], [Channel]', '_Move [Team] members to [Channel]_\n\u200b')
        .addField('!teams [Team1], [Team2]...', '_Move multiple teams members to their voice channel_\n\u200b')
        .addField('__INFO COMMANDS__', '\u200b')
        .addField('!list', 'List team names\n\u200b')
        .addField('!members', '_List team names and their members_\n\u200b')
        .addField('!membersof [Team]', '_List members of [Team]_');
        message.channel.send(embed);
    }
};