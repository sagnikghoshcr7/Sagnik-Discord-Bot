const  Discord = require('discord.js');
const client = new Discord.Client();
client.login('Nzk5OTY4NjkzMjE1NjkwODAz.YALS5w.bul-hGVoGrTFzmRpeO7cscWbuCs');

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('Connected');
}

const replies = [
    'Hello 💖',
    'Hello Bro 💖',
    'Hello from Sagnik💖',
    'Hello Love 💙'
]

client.on('message', gotMessage);

function gotMessage(msg) {
    console.log(msg.content);
    // if (msg,channel.id == 'CHANNEL ID' && msg.content == 'Hi') {
    if (msg.content == 'Hi') {
        // msg.channel.send('Hello from Sagnik ❤');
        const index = Math.floor((Math.random() * replies.length));
        msg.reply(replies[index]);
    }
}