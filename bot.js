const  Discord = require('discord.js');
const client = new Discord.Client();
client.login('Nzk5OTY4NjkzMjE1NjkwODAz.YALS5w.bul-hGVoGrTFzmRpeO7cscWbuCs');

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('Connected');
}

client.on('message', gotMessage);

function gotMessage(msg) {
    console.log(msg.content);
    // if (msg,channel.id == 'CHANNEL ID' && msg.content == 'Hi') {
    if (msg.content == 'Hi') {
        msg.channel.send('Hello from Sagnik ❤');
        msg.reply('Hello from Sagnik ❤');
    }
}