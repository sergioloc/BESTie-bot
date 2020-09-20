const RoleManager = require('./role.js');
module.exports = {
    name: 'minus',
    description: 'Remove star from a team',

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
            var numStars = (role.name.match(/★/g)||[]).length
            //Check if rola has any star
            if (numStars == 0){
                return message.channel.send(`${argument} doesn't have any star`);
            }
            else{
                var newRoleName = argument.substring(1)
                role.edit({ name: `${newRoleName}`})
                return message.channel.send(`${argument} lose a star!`);
            }
        }
    }
}