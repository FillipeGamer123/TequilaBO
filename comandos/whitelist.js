const Discord = require("discord.js");

exports.run = async (client, message, member, args) => {
        const mysql = require('mysql'); 
        //Entrando na mysql
        const connection = mysql.createConnection({ //Info da database, para conectar
          host: '127.0.0.1',
          user: 'root',
          password: '',
          database: 'vrp'
        });
        connection.connect((err) => {
		});
		setInterval(function () {
            connection.query('SELECT 1');
          }, 5000);
	let todos = message.guild.roles.find("name", "@everyone")

	message.guild.createChannel(`whitelist`, "text").then(async canal => {
		canal.overwritePermissions(message.author, {
			READ_MESSAGES: true,
			VIEW_CHANNEL: true
		})
		canal.overwritePermissions(todos, {
			READ_MESSAGES: false,
			VIEW_CHANNEL: false
		})

		canal.setParent("698652574538268733")

		const embed = new Discord.RichEmbed()
		.setAuthor(`Whitelist`)
		.setDescription(`Olá ${message.author}

		___Seja bem vindo ai nosso Sistema de Whitelist Exclusivo <:verificado:702328957512450058>___
		
		Para começar digite aqui neste canal iniciar 
		
		Você possui 1 minuto para responder cada pergunta 
		Lembre-se que só você e o bot tem acesso a esse canal.
		
		Se falhar, terá que refazer a whitelist!`)

		canal.send(message.author, embed)

		var collector = canal.createMessageCollector(a => a.author.id == message.author.id,{time: 10000 * 50})
        collector.on('collect', a => {
        var iniciar = a.content

        if (iniciar === "iniciar") {

        canal.send(`Qual sera o do seu personagem na cidade?`)
       	var collector =  canal.createMessageCollector(b => b.author.id == message.author.id,{time: 10000 * 50,max: 1})
        collector.on('collect', b => {
        var onequest = b.content

        canal.send(`Qual seu sobrenome?`)
       	var collector =  canal.createMessageCollector(c => c.author.id == message.author.id,{time: 10000 * 50,max: 1})
        collector.on('collect', c => {
		var twoquest = c.content
		
		canal.send(`Qual sera seu sexo?`)
       	var collector =  canal.createMessageCollector(d => d.author.id == message.author.id,{time: 10000 * 50,max: 1})
        collector.on('collect', d => {
		var treequest = d.content
		
		canal.send(`Qual seu id?`)
       	var collector =  canal.createMessageCollector(e => e.author.id == message.author.id,{time: 10000 * 50,max: 1})
        collector.on('collect', e => {
		var fourquest = e.content
		
		canal.send(`Qual sera sua idade?`)
		var collector =  canal.createMessageCollector(f => f.author.id == message.author.id,{time: 10000 * 50,max: 1})
	    collector.on('collect', f => {
	    var fortquest = f.content


        let result = client.channels.get("702342508579127296")

        result.send(`Feita por: ${message.author}\nNome: ${onequest}\nSobrenome: ${twoquest}\nSexo: ${treequest}\nID: ${fourquest}\nIdade: ${fortquest}\n${"`Para aprovar use: (!aprovar id) ou para negar use: (!reprovar id).`"}`)
		canal.delete()

		connection.query(`UPDATE vrp_user_identities SET name = '${onequest}' WHERE user_id = '${fourquest}'`, (err, rows) => {
		connection.query(`UPDATE vrp_user_identities SET user_id = '${fourquest}' WHERE user_id = '${fourquest}'`, (err, rows) => {})
		connection.query(`UPDATE vrp_user_identities SET firstname = '${twoquest}' WHERE user_id = '${fourquest}'`, (err, rows) => {})
		connection.query(`UPDATE vrp_user_identities SET age = '${fortquest}' WHERE user_id = '${fourquest}'`, (err, rows) => {})

		})
		


        	})


        	})


        	})
		})
	})
}
		})
	})
}