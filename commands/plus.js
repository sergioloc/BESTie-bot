const role = require('./role.js');
const Role = require('./role.js');
module.exports = {
    name: 'plus',
    description: 'Add star to a team',

    execute(message, args){
        argument = args[0]
        for (var i = 1; i < args.length; i++) {
            argument = argument + ' ' + args[i];
        }

        var role = Role.getRole(message, argument);
        star = '★'

        //Check if role exist
        if (role == undefined)
            return message.channel.send(`'${argument}' role doesn't exist`);

        role.edit({ name: `${star}${role.name}` })
        return message.channel.send(`${argument} won a star!`);

    }
}