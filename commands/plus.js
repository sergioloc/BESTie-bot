const RoleManager = require('./role.js');
const maxStars = 5;
const emoji = '★';
const item = 'point'
const items = 'points'
module.exports = {
    name: 'plus',
    description: 'Add star to a team',

    execute(message, args){
        argument = args[0]
        for (var i = 1; i < args.length; i++) {
            argument = argument + ' ' + args[i];
        }

        var role = RoleManager.getRole(message, argument);

        //Check if role exist
        if (role == undefined)
            return message.channel.send(`'${argument}' role doesn't exist`);
        
        else{
            var numStars = (role.name.match(/★/g)||[]).length
            //Check if role has any star
            if (numStars == maxStars){
                return message.channel.send(`${argument} can't have more ${items}`);
            }
            else{
                role.edit({ name: `${emoji}${role.name}` })
                return message.channel.send(`${argument} won a ${item}!`);
            }
            
        }
    }
}