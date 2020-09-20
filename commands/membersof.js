const Discord = require("discord.js");
const RoleManager = require('./role.js');
module.exports = {
    name: 'membersof',
    description: 'List members of a team',

    execute(message, args){
        argument = args[0]
        for (var i = 1; i < args.length; i++) {
            argument = argument + ' ' + args[i];
        }

        role = RoleManager.getRole(message, argument);

        //Check if role exist
        if (role == undefined)
            return message.channel.send(`'${args}' role doesn't exist`);

        const embed = new Discord.MessageEmbed()
            .setTitle(`${role.name}`)
            .setDescription(`${role.members.map(m=>m.displayName).join('\n')}`)
            .setColor(0xffa616);
            message.channel.send(embed);
    }
}