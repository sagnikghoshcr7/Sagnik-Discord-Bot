require("dotenv").config();

const fetch = require('node-fetch');

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
    // console.log(msg.content);
    // if (msg,channel.id == 'CHANNEL ID' && msg.content == 'Hi') {
    let tokens = msg.content.split(' ');

    if (msg.content == 'Hi') {
        // msg.channel.send('Hello from Sagnik ❤');
        const index = Math.floor((Math.random() * replies.length));
        msg.reply(replies[index]);
    } else if (tokens[0] == '!gif') {
        // msg.channel.send("gif!");

        let keywords = 'sagnik'; // default sagnik gif search
        if (tokens.length > 1) {
            keywords = tokens.slice(1, tokens.length).join(" ");
        }

        let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=low`; // for safe use contentfilter=low or contentfilter=medium or contentfilter=high
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor((Math.random() * json.results.length));
        msg.channel.send(json.results[index].url);
    }
}