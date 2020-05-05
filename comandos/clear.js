const Discord = require("discord.js");

exports.run = async(Phantom, message, args) => {
  
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("Você não possui permissão para usar este comando.")


      const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Por favor, forneça um número entre 2 e 100 para o número de mensagens a serem excluídas");

    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Não foi possível deletar mensagens devido a: ${error}`));
      
      const embed = new Discord.RichEmbed()
      .setDescription(`${message.author}, ${"`"+args[0]+" mensagens`"} foram deletadas.`)
      .setColor("#E6D527")
      //.setFooter(message.author.username)//, message.author.avatarURL)
      .setTimestamp()
      message.channel.send(embed);
      //message.channel.send(`🗑 ${message.author} Deletou ${args[0]}.`)

  }

module.exports.config = {

  name: "limparchat",
  aliases: ["clearchat", "limpar", "cc"]
}