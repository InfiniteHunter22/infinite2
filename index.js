const discord = require ('discord.js');

var client = new discord.Client();

const token = "NTc5MjA5NTc1NjM1NDg0Njgy.XZclyQ.p1TPjz3CDbE6Y-nCH94y21W0-08";

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
