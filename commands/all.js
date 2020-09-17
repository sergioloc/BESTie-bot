module.exports = {
    name: 'all',
    description: 'Move everyone to same channel',

    execute(message, args){

        //Get argument
        argument = args[0]
        for (var i = 1; i < args.length; i++) {
            argument = argument + ' ' + args[i];
        }

        //Get role and channel
        const everyone = message.guild.roles.everyone.members.map(m=>m);
        const channel = message.guild.channels.cache.find(channel => channel.name == `${argument}` && channel.type == 'voice');

        if (channel == undefined)
            return message.channel.send(`Couldn't find ${argument} voice channel`);

        //Move members
        count = 0
        for (var i = 0; i < everyone.length; i++) {
            if (everyone[i].voice.channel != undefined){
                everyone[i].voice.setChannel(`${channel.id}`);
                count++;
            }
        }

        //Print result
        if (count == 0){
            return message.channel.send('No one is connected to a voice channel')
        }
        else if (count == 1){
            return message.channel.send(`${count} member have been moved to ${argument}`)
        }
        else {
            return message.channel.send(`${count} members have been moved to ${argument}`)
        }
    }
}