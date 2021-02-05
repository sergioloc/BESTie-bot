const Discord = require("discord.js");
module.exports = {
    name: 'members',
    description: 'List all team members',

    execute(message){
        const teams = []; 
        message.guild.roles.cache.forEach(role => { 
            message.guild.channels.cache.forEach(channel => { 
                if (channel.type == "voice" && role.name == channel.name){
                    teams.push(role);
                }
            }); 
        });
        if(teams.length == 0)
            message.channel.send(`There are no teams.`);
        else
            for (var i = 0; i < teams.length; i++){
                const embed = new Discord.MessageEmbed()
                .setTitle(`${teams[i].name}`)
                .setDescription(`${teams[i].members.map(m=>m.displayName).join('\n')}`)
                .setColor(0xffa616);
                message.channel.send(embed);
            }
    }
}