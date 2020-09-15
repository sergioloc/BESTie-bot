module.exports = {
    name: 'general',
    description: 'Move everyone to general channel',

    execute(message, args){
        const everyone = message.guild.roles.everyone.members.map(m=>m);
        const channelGeneral_ID = '752437665223409747' // General
        for (var j = 0; j < everyone.length; j++) {
            everyone[j].voice.setChannel(`${channelGeneral_ID}`);
        }
    }
}