const Discord = require('discord.js')

exports.run = (Phantom,message,args) => {
    let embed = new Discord.RichEmbed()

    .setTitle("PING DO BOT")
    .setColor("RANDOM")
    .setDescription(`O ping do bot é de ${Math.round(Phantom.ping)}ms!`)
    .setFooter(`Comando de Ping`);

    message.channel.send(embed);
}

exports.help = {
    name: "ping"
}