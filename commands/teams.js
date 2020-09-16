module.exports = {
    name: 'teams',
    description: 'Move teams to their channel',

    execute(client, message, args){
        argument = args[0]
        for (var i = 1; i < args.length; i++) {
            argument = argument + ' ' + args[i];
        }
        teams = argument.split(', ');
        for (var i = 0; i < teams.length; i++) {
            client.commands.get('move').execute(message, teams[i]);
        }
    }
}