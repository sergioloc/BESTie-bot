module.exports = {
    name: 'move',
    description: 'Move team to their channel',

    execute(message, args){
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
            role = message.guild.roles.cache.find(r => r.name == `${stars + args}`)
            i++;
        }
        roleMembers = role.members.map(m=>m);
        const channel = message.guild.channels.cache.find(channel => channel.name == `${args}`);
        for (var i = 0; i < roleMembers.length; i++) {
            roleMembers[i].voice.setChannel(`${channel.id}`);
        }
    }
}