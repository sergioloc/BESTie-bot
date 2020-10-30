const maxStars = 7;
const emoji = '🍬';
module.exports = {
    getRole: function (message, argument) {
        role = undefined
        i = 0
        while (role == undefined && i <= maxStars){
            numEmojis = '';
            if (i > 0){
                for (var j = 0; j < i; j++){
                    numEmojis = numEmojis + emoji;
                }
            }            
            role = message.guild.roles.cache.find(r => r.name == `${numEmojis + argument}`)
            i++;
        }
        return role
    }
};