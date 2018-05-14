const discord = require('discord.js') ;
const bot = new discord.Client();
bot.on('message',(message) => {
if (message.content == "السلام عليكم"){

message.channel.sendMessage('وعليكم السلام')
}

});
bot.login('NDQ1NDMwOTE2MTUyODE5NzEy.DdqZWw.pvg8IqL0Q0ihPpQuiaYvQfCWcCE');