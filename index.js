const { Client } = require('discord.js');
const client = new Client();
const prefix = 'hack!';

client.on('ready', () => console.log('Bot has logged in!'));

client.on('message', async (msg) => {
  if(msg.author.bot || !msg.content.startsWith(prefix)) return;
  let args = msg.content.split(' ');
  const command = args.shift().slice(prefix.length);
  //Add your commands here. Good command handlers are overrated :POGGERS:
  
  switch(command){

  	case "ping":

    	const m = await msg.channel.send('Pinging...');
    	m.edit(`Ponggers! Client ping: \`${m.createdTimestamp - msg.createdTimestamp}\`ms. Heartbeat ping: \`${client.ping}\`ms`);\
    	
    	break;

    case "info":
    	var embed = new Discord.RichEmbed()
			.setColor("BLUE")
			.setTitle("Detailed Informations")
			.addBlankField(true)
			.addBlankField(true)
			.setImage("https://pbs.twimg.com/profile_images/1042878305874128896/McCIWyzX_400x400.jpg")
			.addField("Bot's name","hacktoberfest-discord-bot",true)
		message.channel.send(embed);

		break;

  }
  
})

client.login(process.env.TOKEN);
