module.exports = {
    name: 'all',
    description: 'Move everyone to same channel',

    execute(message, args){
        const everyone = message.guild.roles.everyone.members.map(m=>m);
        const channel = message.guild.channels.cache.find(channel => channel.name == `${args}`);
        for (var j = 0; j < everyone.length; j++) {
            everyone[j].voice.setChannel(`${channel.id}`);
        }        
    }
}