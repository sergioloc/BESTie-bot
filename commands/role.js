const maxStars = 7;
module.exports = {
    getRole: function (message, argument) {
        role = undefined
        i = 0
        while (role == undefined && i <= maxStars){
            stars = '';
            if (i > 0){
                for (var j = 0; j < i; j++){
                    stars = stars + '★';
                }
                stars = stars + ' '
            }            
            role = message.guild.roles.cache.find(r => r.name == `${stars + argument}`)
            i++;
        }
        return role
    }
};