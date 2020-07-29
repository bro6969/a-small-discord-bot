const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'token';

bot.login(token);

bot.on('ready', () =>{
    console.log('This bot is online!');
});

bot.on( 'message', function(msg){
    if ( msg.content === 'the message bot get' ){
        msg.reply( 'the message that bot respund' );
    }
} );

// you can copy paste the chat part
