const { Emoji } = require('discord.js');
const RoleManager = require('./role.js');
const emoji = '🍬';
const item = 'candy'
module.exports = {
    name: 'minus',
    description: 'Remove item from a team',

    execute(message, args){
        argument = args[0]
        for (var i = 1; i < args.length; i++) {
            argument = argument + ' ' + args[i];
        }

        var role = RoleManager.getRole(message, argument);

        //Check if role exist
        if (role == undefined)
            return message.channel.send(`'${argument}' role doesn't exist`);

        else {
            var numStars = (role.name.match(/🍬/g)||[]).length

            //Check if role has any star     
            if (numStars == 0){
                return message.channel.send(`${argument} doesn't have any ${item}`);
            }
            else{
                var roleName = role.name;
                while(roleName.charAt(0) == "\ud83c"){
                    roleName = roleName.substring(1);
                }
                role.edit({ name: `${roleName}`})
                return message.channel.send(`${argument} lose a ${item}!`);
            }
        }
    }
}