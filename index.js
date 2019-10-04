const discord = require ('discord.js');
const token = process.env.arcadia
var client = new discord.Client();
client.on("ready", () => {
    readyEmbed = new discord.RichEmbed()
    .setTitle ("**\n\nBot is now online**")
    .setColor ("GREEN")
    .setThumbnail ("https://cdn.discordapp.com/attachments/579599012383031298/599154058946674688/PandaDuckCop.png")
    .setFooter("!help for assistance.")
    .setTimestamp()
    client.channels.get("579599012383031298").send(readyEmbed)
    console.log("ready!");
});


client.login(process.env.BOT_TOKEN);

const prefix = "!";
client.on ("message", (message) => {

    if (message.author.bot) return;

    msg = message.content.toLowerCase();
    
 if (msg.startsWith (prefix + "test") {
     message.channel.send ("hey there, its working omg")
     }
