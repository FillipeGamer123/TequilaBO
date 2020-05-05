const Discord = require('discord.js')

exports.run = (Phantom,message,args) => {
    let mensagem = args.join(" ");
    const embed = new Discord.RichEmbed()
    .setAuthor("Whitelist Galaxy RP", Phantom.user.avatarURL)
    .addField("Como funciona:", 
    
    
    ""+mensagem+"")
    .setColor("#000000")
    .setFooter(Phantom.user.username)
    .setTimestamp()
    message.channel.send(embed);
    let bChannel = Phantom.channels.get("702329814568271973").send(embed)
}

exports.help = {
    name: "mensagem"
}