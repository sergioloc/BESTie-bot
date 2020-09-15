module.exports = {
    name: 'all',
    description: 'Move everyone to same channel',

    execute(message, args){
        argument = args[0]
        console.log(`${args.length}`);
        for (var i = 1; i < args.length; i++) {
            argument = argument + ' ' + args[i];
        }
        console.log(`${argument}`);
        const everyone = message.guild.roles.everyone.members.map(m=>m);
        const channel = message.guild.channels.cache.find(channel => channel.name == `${argument}`);
        for (var i = 0; i < everyone.length; i++) {
            everyone[i].voice.setChannel(`${channel.id}`);
        }
    }
}