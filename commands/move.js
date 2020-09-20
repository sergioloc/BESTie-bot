const RoleManager = require('./role.js');
module.exports = {
    name: 'move',
    description: 'Move team to their channel',

    execute(message, args){
        i = 0
        var role = RoleManager.getRole(message, args);

        //Check if role exist
        if (role == undefined)
            return message.channel.send(`'${args}' role doesn't exist`);

        const channel = message.guild.channels.cache.find(channel => channel.name == `${args}` && channel.type == 'voice');
        
        //Check if channel exist
        if (channel == undefined)
            return message.channel.send(`Couldn't find '${args}' voice channel`);

        roleMembers = role.members.map(m=>m);

        //Check if there are members of the team
        if (roleMembers.length == 0)
            return message.channel.send(`There are no members of ${args}`);

        count = 0;
        for (var i = 0; i < roleMembers.length; i++) {
            if (roleMembers[i].voice.channel != undefined){
                roleMembers[i].voice.setChannel(`${channel.id}`);
                count++;
            }
        }
        
        //Print result
        if (count == 0){
            message.channel.send(`There are no members of ${args} in a voice channel`)
        }
        else if (count == 1){
            message.channel.send(`${count} member has been moved to ${args}`)
        }
        else {
            message.channel.send(`${count} members have been moved to ${args}`)
        }   
    }
}