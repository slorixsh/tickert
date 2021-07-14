const Discord = require("discord.js"); 
module.exports = {
    name: 'invite',
    aliases: ['commands'],
    category: 'Info',
    description: 'Lets you invite bot.',
    usage: 'invite',
    userperms: [],
    botperms: [],
    run: async (client, message, args, prefix) => {

  const davet = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle("Invite Tickert")
  .setDescription("<:arti:863196379555823656> [__**Invite Me!**__](https://dsc.gg/tickert)")
  message.channel.send(davet)
}}