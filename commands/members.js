module.exports = {
    name: 'members',
    description: 'List members names',

    execute(message){
        const teams = []; 
        message.guild.roles.cache.forEach(role => { 
            message.guild.channels.cache.forEach(channel => { 
                if (channel.type == "voice" && role.name == channel.name){
                    teams.push(role);
                }
            }); 
        });

        for (var i = 0; i < teams.length; i++){
            const embed = new Discord.MessageEmbed()
            .setTitle(`${teams[i].name}`)
            .setDescription(`${teams[i].members.map(m=>m.displayName).join('\n')}`)
            .setColor(0xffa616);
            message.channel.send(embed);
        }
    }
}