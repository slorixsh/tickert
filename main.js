require('dotenv').config();
const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const keepAlive = require('./server');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ disableMentions: 'everyone', partials: ['MESSAGE', 'CHANNEL', 'REACTION'], ws: { intents: Intents.ALL } });

client.commands = new Collection();
client.aliases = new Collection();

['command', 'event'].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


keepAlive();
client.login("ODU5NzQ1NzU4MjA2MzYxNjIx.YNxKog.Pz-cqTlKDXF8wyjrWD0JkEQtALU");