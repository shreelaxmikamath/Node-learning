const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
	],
});

client.on("interactionCreate",(interaction)=>{
    interaction.reply("Pong!");
})

client.on("messageCreate",(message)=>{
    if(message.author.bot) return;
    if(message.content.startsWith("create")){
        const url=message.content.split("create")[1];
        return message.reply({
            content:"Generating short ID for"+url,
        });
    }
    message.reply({
        content:"Hey from Lily Bot"
    })
})

client.login(
    ""
)