module.exports = {
    name: 'team',
    description: 'Move team to their channel',

    execute(client, message, args){
        argument = args[0]
        for (var i = 1; i < args.length; i++) {
            argument = argument + ' ' + args[i];
        }
        client.commands.get('move').execute(message, argument);
    }
}