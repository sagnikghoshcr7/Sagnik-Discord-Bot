require("dotenv").config();

const  Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

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

async function gotMessage(msg) {
    console.log(msg.content);
    // if (msg,channel.id == 'CHANNEL ID' && msg.content == 'Hi') {
    if (msg.content == 'Hi') {
        // msg.channel.send('Hello from Sagnik ❤');
        const index = Math.floor((Math.random() * replies.length));
        msg.reply(replies[index]);
    } else if (msg.content == '!gif') {
        msg.channel.send("gif!");

        let url = `https://api.tenor.com/v1/search?q=sagnik&key=${process.env.TENORKEY}&limit=8`
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
    }
}