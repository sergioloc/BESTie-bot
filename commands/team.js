module.exports = {
    name: 'team',
    description: 'Move team to their channel',

    execute(message, args){
        roleArgument = args[0]
        channelArgument = args[0]
        for (var i = 1; i < args.length; i++) {
            roleArgument = roleArgument + ' ' + args[i];
            channelArgument = channelArgument + args[i];
        }
        const everyone = message.guild.roles.cache.find(r => r.name == `${argument}`).members.map(m=>m);
        const channel = message.guild.channels.cache.find(channel => channel.name == `${argument}`);
        for (var i = 0; i < everyone.length; i++) {
            everyone[i].voice.setChannel(`${channel.id}`);
        }
    }
}