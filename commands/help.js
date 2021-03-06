const Discord = require("discord.js");
module.exports = {
    name: 'help',
    description: 'Help command',

    execute(message){
        const embed = new Discord.MessageEmbed()
        .setTitle('BESTie help')
        .setDescription('Move members & teams at the same time!\n\u200bA team is a role that have a voice channel with the same name.\n\u200b')
        .setColor(0x0070b8)

        .addField('__MOVE COMMANDS__', '\u200b')
        .addField('!all [Channel]', '_Move everyone to [Channel]_')
        .addField('!team [Team]', '_Move [Role] members to their voice channel_')
        .addField('!teams', '_Move all teams to their voice channel_\n\u200b')

        .addField('__PUNCTUATION COMMANDS__', '\u200b')
        .addField('!plus [Team]', '_Add a point to [Team]_ (max. 5)')
        .addField('!minus [Team]', '_Remove a point from [Team]_\n\u200b')

        .addField('__INFO COMMANDS__', '\u200b')
        .addField('!list', '_List team names_')
        .addField('!members', '_List team names and their members_')
        .addField('!membersof [Team]', '_List members of [Team]_');
        message.channel.send(embed);
    }
};