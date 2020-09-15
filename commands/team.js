module.exports = {
    name: 'team',
    description: 'Move team to their channel',

    execute(message, args){
        argument = args[0]
        for (var i = 1; i < args.length; i++) {
            if (!args[i].includes('★'))
                argument = argument + ' ' + args[i];
        }
        const role = message.guild.roles.cache.find(r => r.name == `${argument}`).members.map(m=>m);
        const channel = message.guild.channels.cache.find(channel => channel.name == `${argument}`);
        for (var i = 0; i < role.length; i++) {
            role[i].voice.setChannel(`${channel.id}`);
        }
    }
}