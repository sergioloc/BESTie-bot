module.exports = {
    name: 'team',
    description: 'Move team to their channel',

    execute(message, args){
        argument = args[0]
        for (var i = 1; i < args.length; i++) {
            argument = argument + ' ' + args[i];
        }
        role = undefined
        i = 0
        while (role == undefined && i <= 7){
            stars = '';
            switch (i){
                case 0:
                    break; 
                case 1:
                    stars = '★ ';
                    break; 
                case 2:
                    stars = '★★ ';
                    break;
                case 3:
                    stars = '★★★ ';
                    break;
                case 4:
                    stars = '★★★★ ';
                    break;
                case 5:
                    stars = '★★★★★ ';
                    break;
                case 5:
                    stars = '★★★★★★ ';
                    break;
                case 5:
                    stars = '★★★★★★★ ';
                    break;
            }
            role = message.guild.roles.cache.find(r => r.name == `${stars + argument}`)
            i++;
        } 
        role.members.map(m=>m);
        const channel = message.guild.channels.cache.find(channel => channel.name == `${argument}`);
        for (var i = 0; i < role.length; i++) {
            role[i].voice.setChannel(`${channel.id}`);
        }
    }
}