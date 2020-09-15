module.exports = {
    name: 'team',
    description: 'Move team to their channel',

    execute(message, args){
        argument = args[0]
        console.log(`${args.length}`);
        for (var i = 1; i < args.length; i++) {
            argument = argument + ' ' + args[i];
        }
        const everyone = message.guild.roles.cache.find(r => r.name == `${argument}`).members.map(m=>m);
        const channel = message.guild.channels.cache.find(channel => channel.name == `${argument}`);
        for (var i = 0; i < everyone.length; i++) {
            everyone[i].voice.setChannel(`${channel.id}`);
        }
    }
}