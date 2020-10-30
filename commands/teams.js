module.exports = {
    name: 'teams',
    description: 'Move teams to their channel',

    execute(client, message, args){
        const teams = []; 
        message.guild.roles.cache.forEach(role => { 
            message.guild.channels.cache.forEach(channel => { 
                if (channel.type == "voice" && role.name == channel.name){
                    teams.push(channel.name);
                }
            }); 
        });
        for (var i = 0; i < teams.length; i++) {
            client.commands.get('move').execute(message, teams[i]);
        }
    }

}