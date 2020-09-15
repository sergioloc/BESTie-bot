module.exports = {
    name: 'all',
    description: 'Move everyone to same channel',

    execute(message, args){
        argument = args[0]
        for (var i = 1; i < everyone.length; i++) {
            argument = argument + ' ' + args[i];
        }
        const everyone = message.guild.roles.everyone.members.map(m=>m);
        const channel = message.guild.channels.cache.find(channel => channel.name == `${argument}`);
        for (var i = 0; i < everyone.length; i++) {
            everyone[i].voice.setChannel(`${channel.id}`);
        }
    }
}