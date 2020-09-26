const RoleManager = require('./role.js');
const maxStars = 7;
module.exports = {
    name: 'plus',
    description: 'Add star to a team',

    execute(message, args){
        argument = args[0]
        for (var i = 1; i < args.length; i++) {
            argument = argument + ' ' + args[i];
        }

        var role = RoleManager.getRole(message, argument);
        star = '★'

        //Check if role exist
        if (role == undefined)
            return message.channel.send(`'${argument}' role doesn't exist`);
        
        else{
            var numStars = (role.name.match(/★/g)||[]).length
            //Check if rola has any star
            if (numStars == maxStars){
                return message.channel.send(`${argument} can't have more stars`);
            }
            else{
                role.edit({ name: `${star}${role.name}` })
                return message.channel.send(`${argument} won a star!`);
            }
            
        }
    }
}