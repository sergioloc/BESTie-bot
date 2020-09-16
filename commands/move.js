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
        if (role != undefined){
            roleMembers = role.members.map(m=>m);
            if (roleMembers.length != 0){
                const channel = message.guild.channels.cache.find(channel => channel.name == `${args}`);
                if (channel != undefined){
                    count = 0;
                    for (var i = 0; i < roleMembers.length; i++) {
                        if (roleMembers[i].voice.channel != undefined){
                            roleMembers[i].voice.setChannel(`${channel.id}`);
                            count++;
                        }
                    }
                    //Print result
                    if (count == 1){
                        message.channel.send(`${count} member have been moved to ${args}`)
                    }
                    else {
                        message.channel.send(`${count} members have been moved to ${args}`)
                    }
                }
                else{
                    message.channel.send(`couldn't find ${args} voice channel`);
                }
            }
            else{
                message.channel.send(`There are no members of ${args} role`);
            }
        }
        else{
            message.channel.send(`${args} role doesn't exist`);
        }
        
    }
}