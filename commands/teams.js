module.exports = {
    name: 'teams',
    description: 'Move teams to their channel',

    execute(message, args){
        argument = args[0]
        for (var i = 1; i < args.length; i++) {
            argument = argument + ' ' + args[i];
        }
        teams = argument.split(', ');
        for (var i = 1; i < args.length; i++) {
            console.log(`${teams[i]}`);
        }
    }
}