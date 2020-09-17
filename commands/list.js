module.exports = {
    name: 'list',
    description: 'List team names',

    execute(message){
        const teams = []; 
        message.guild.roles.cache.forEach(role => { 
            message.guild.channels.cache.forEach(channel => { 
                if (channel.type == "voice" && role.name == channel.name){
                    teams.push(channel.name);
                }
            }); 
        });
   
        message.channel.send(`List of teams: ${teams.join(', ')}.`);
    }
}