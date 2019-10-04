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

    client.user.setActivity ("Infi's decisions", {type: "Listening"});

    answered = true;
    cAnswer = "";
    userAnswer = "";
});

client.login(process.env.BOT_TOKEN);
worker: node index.js


const prefix = "!";
client.on ("message", (message) => {

    if (message.author.bot) return;

    msg = message.content.toLowerCase();




    if (msg === `${prefix}restart`) {
        message.delete()
    
        RestartEmbed = new discord.RichEmbed()
        .setTitle ("RESTART ALERT!")
        .setColor ("RED")
        .setDescription (`The bot has been restarted by ${client.users.get(message.author.id)}`)
        .setFooter ("The restart happened at:")
        .setTimestamp ()
    
        client.users.get ("259658154982375425").send (RestartEmbed)
        .then(msg => client.destroy())
        .then(() => client.login("NTc5MjA5NTc1NjM1NDg0Njgy.XZZFHg.sq3kSGiFVAwNmFT_vRJQaJDUQNQ"));
    }
    
    changeloginfo = message.content.slice (11)
    changelogembed = new discord.RichEmbed()
        .setTitle ("Change Log")
        .setColor ("BLUE")
        .setDescription ("**" + changeloginfo + "**")
        .setTimestamp()
    
    if (msg.startsWith (prefix + "changelog")) {
        if (message.channel.id != "629205502655463424") { return; }
        message.delete()
        message.channel.send (changelogembed)
    }

    if (message.channel.id === "629205502655463424") { return; }
if (msg.startsWith (prefix + "hello")) {
    message.reply ('Hi There!')
    message.react('??')
        
    message.channel.send ("`Original message:` " + message)
        
}

if (msg.startsWith (prefix + "server")) { 
    message.channel.send (`**Server name:** ${message.guild.name}\n**Total members:**  ${message.guild.memberCount}`)
}
    
if (msg.includes ("@259658154982375425")) {
    if (message.author.id === "259658154982375425") { return; }
    embed4 = new discord.RichEmbed ()
    .setColor("RED")
    .addField ("Tag Failed!", "InfiniteHunter does not like to be tagged without a valid reason!")
    .addField ("Why can't I tag him?", "InfiniteHunter is often busy fixing my hiccups and equiping me with new features so I would appreciate if you would stop tagging him before things get nasty! :rage:")
    .addField("`Original Message:` " + "By " + (message.author.tag), message)
    .setThumbnail("https://cdn.discordapp.com/attachments/579635224565252096/580767479144382464/iu.png")
    .setTimestamp()
   
    message.channel.send (embed4)

}

if (message.content.includes ("@579209575635484682")) {
    message.channel.send ("Hey there, I'm alive!")
}

    if (msg.startsWith ("who created you?")){
        message.channel.send ("Idk... Oh right! InfiniteHunter did, he brought me up from scraps and texts and here am I, talking to you... somehow...")
    }
    if (message.content.includes ("infinitehunter")) {
        if (message.author.id === "259658154982375425") { return; }
        message.channel.send ("Only I can say InfiniteHunter!");
    }

    if (message.content.includes ("rayyanz101")) {
        message.channel.send ("rayyanz101 is indeed gay :joy:");
    }

    if (message.content.includes ("henjo34")) {
        message.channel.send ("He's a badmin, fuck off!");
    }

    if (message.content.includes ("fung99")) {
        message.channel.send ("Does fung shui really exist?");
    }

    if (message.content.includes ("unlogic_")) {
        message.channel.send ("He's the worst mod ever existed, so abusive!");
    }

    if (message.content.startsWith ("👀")) {
        message.channel.send ("👀");
    }

    if (msg.startsWith ("pan")) {
        message.channel.send ("Who doesn't like scrambled eggs?", {files:["./Images/pan.png"]})
    }
   
    embed3 = new discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .setColor("RED")
        .setTitle( "Is swearing really necessary?" )
        .addField("What does fuck mean?", "Fuck means to have sexual intercorse with someone")
        .addField("Why is swearing bad?", "Swearing portrays you as an immature human being who is unable to express their emotions without having to resort to such language.")
        .addField("As a continuation","This may be why people like you have trouble speaking and suffer from various illnesses, such as stroke victims or stutterers who are often able to speak more easily when they curse.")
        .addField("Punishment", "Now your profile picture and name will be clearly displayed to show how immature your statement earlier was so don't bother to delete your message earlier.")
        .addField("`Original Message:` " + "By " + (message.author.tag), message)

    if (message.content.includes ("fuck")) {
        if (message.author.id === "259658154982375425") { return; }
        message.channel.send (embed3);
    
        message.reply ("Fuck you too!")
    }

    if (message.content.includes ("Fuck")) {
        if (message.author.id === "259658154982375425") { return; }
        message.channel.send (embed3);
        message.reply ("Fuck you too!")
    }

    if (message.content.includes ("frick")) {
        if (message.author.id === "259658154982375425") { return; }
        message.channel.send (embed3);
        message.reply ("Fuck you too!")
    }

    if (message.content.includes ("Frick")) {
        if (message.author.id === "259658154982375425") { return; }
        message.channel.send (embed3);
        message.reply ("Fuck you too!")
    }
    
    if (message.content.includes ("fuk")) {
        if (message.author.id === "259658154982375425") { return; }
        message.channel.send (embed3);
        message.reply ("Fuck you too!")
    }
    
    if (message.content.includes ("Fuk")) {
        if (message.author.id === "259658154982375425") { return; }
        message.channel.send (embed3);
        message.reply ("Fuck you too!")
    }

    if (message.content.includes ("shit")){
        if (message.author.id === "259658154982375425") { return; }
        message.channel.send ("Don't bother telling others that before looking at yourself through a morror, fucking bastard.")
    }
       
    if (msg.startsWith (prefix + "pfp")) {
        pfpimage = message.attachments.first().url;
        client.user.setAvatar (pfpimage);
        message.channel.send ("Profile picture changed!")
    }
    
    
    mention = message.mentions.users.first(); 

    
    MentionID = message.content.slice (6,24)
    MessageContent = message.content.slice (25)
    MentionMessageEmbed = new discord.RichEmbed ()
     .setTitle ("You've got mail!")
     .setColor ("GREEN")
     .setDescription (MessageContent)
     .setFooter ("The author of this mail has been kept anonymous")
     .setTimestamp ()
    
     if (msg === `${prefix}send`) {
        message.delete();
        message.reply ("Please state down a user/ID for me to send the message to.").then(d_msg => { d_msg.delete(5000); });
        return;}

    
     SentMentionName = client.users.get(MentionID)

     
    if (msg.startsWith (prefix + "send")) {
        
        if (client.users.get(MentionID) == null) {
            message.delete()
            message.reply ("Please input a valid user/ID to send the message to and retry shortly.").then(d_msg => { d_msg.delete(5000); });
            return;}
    
        client.users.get(MentionID).send(MentionMessageEmbed)
        message.delete()

    MentionMessageEmbed = new discord.RichEmbed ()
        .setTitle ("You've got mail!")
        .setColor ("GREEN")
        .setDescription (MessageContent)
        .setFooter ("The author of this mail has been kept anonymous")
        .setTimestamp ()

    client.users.get(message.author.id).send (`Your message was **successfully** sent to ${SentMentionName}!\n\nThe test was presented as such:`)
    client.users.get(message.author.id).send (MentionMessageEmbed)
    MentionMessageEmbedTRACK = new discord.RichEmbed ()
     .setTitle (`This mail was sent to ${client.users.get(MentionID).tag}`)
     .setColor ("BLUE")
     .addField (`**Content:**`, `\n${MessageContent}`)
     .addField (`Mail was sent from:`,`**Server:** ${message.guild.name}\n**Discord Name:** ${message.author.tag}`)
     .setTimestamp ()
        client.channels.get("629366944155566090").send (MentionMessageEmbedTRACK)

    }


    if (msg.startsWith ("send nudes")) {
        number = 47;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./meme_images/" + imageNumber + ".png"]} )
    }

    if (msg === `${prefix}say`){
        message.channel.send("Please input a message for me to say.")
    }

    if (msg.startsWith (prefix + "say")) {
        sentMessage = message.content.slice (5);
        message.delete();
        message.channel.send (sentMessage)
    }

    if (msg.startsWith ("pot")){
    message.channel.send ("Who doesn't like soup?",{files:["./Images/pot.png"]})
    }

    if (msg.startsWith ("bin")) {
        number = 3
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            switch(random) {
                case 1: message.channel.send ("That used to be my home until I sold it to you.", {files:["./Images/trashbin.png"]}); break;
                case 2: message.channel.send ("That's where you spend most of your time. ", {files:["./Images/trashbin2.png"]}); break;
                case 3: message.channel.send ("Who lives in a trash bin on land? Oh right, YOU! ", {files:["./Images/trashbin3.png"]}); break;

            }
            }

    if (answered == false) {
        userAnswer = msg;
        if (userAnswer == cAnswer) {
            message.reply ("got it right! :smile:");
        }
        else {
            message.reply ("got it wrong! :(");
    
        }
        answered = true; cAnswer = ""; userAnswer = "";
    }

    if (msg.startsWith(prefix+"quiz")) {
        number = 2
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch(random) {
            case 1: message.channel.send ("Who lives in a pineapple under the sea?: \nA ) Patrick star \nB ) Spongebob Squarepants \nC ) Squidward Tentacles \nD ) Sandy Fox"); cAnswer = "b"; break;
            case 2: message.channel.send ("In which continent is the Panama canel located?: \nA ) North America \nB ) China \nC ) Australia \nD ) South America"); cAnswer = "d"; break;
        }

        answered = false; 
    }



        client.on("messageUpdate", async(oldMessage, newMessage) => {
            if (oldMessage.content === newMessage.content) return;

        let logembed = new discord.RichEmbed()
        .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
        .setThumbnail(oldMessage.author.avatarURL)
        .setColor("GREEN")
        .setDescription("Message Edited")
        .addField( "Before", oldMessage.content, true )
        .addField( "After", newMessage.content, true )
        .setTimestamp()
        .setFooter("This embed shows what was edited and the author of that message.")

        client.channels.get("597710527812337664").send(logembed); return;

    }); 
  
  sentMessage = message.content.slice (6)
    if (msg.startsWith (prefix + "todo")) {
        embed = new discord.RichEmbed()

        .setColor("BLUE")
        .setTitle("Todo:")
        .setDescription (sentMessage)
        .setFooter(message.author.tag).setTimestamp()
                
         message.channel.send (embed).then (message.react ('?'))

    }


    if (msg.startsWith (prefix + "tick")) {
        message.react ('?');
        
        const filter = (reaction) => reaction.emoji.name === '?';
        message.awaitReactions (filter, {time: 3000})
        .then(collected => {
            message.channel.send (collected.size + " reactions collected!");
        })
        .catch (console.error);
        }
        
        help = new discord.RichEmbed()

        .setColor ("GREEN")
        .setTitle("Here is a list of commands my creator has equipped me with: " )
        .setFooter( "This guide was created by InfiniteHunter")
        .addField( "!hello", "I'll greet you all day, everyday! " )
        .addField( "Who created you?", "I will tell you my creator." )
        .addField( ":eyes:", "I'll do the same back to you." )
        .addField( "Pan. \nPot. \nBin.", "Try it and see for yourself" )
        .addField( "!quiz", "I'll ask you a random question, if you fail to answer, there will be consequences!")
        .setFooter("**Page 1/4** Use !help 2 to flip to page 2!")  

        if (msg === `${prefix}help`) {
            message.channel.send (help).then(m => m.react ('➡'))
        

        const filter = (reaction, user) => {
            ['➡'].includes(reaction.emoji.name) && user.id === message.author.id;
    
        
        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
        
                if (reaction.emoji.name === '➡') {
                    message.channel.send("ok")
                
                }})}}
            



	
        help2 = new discord.RichEmbed()
        .setColor ("GREEN")
        .addField( "send nudes", "Sends a meme. :smile: ")
        .addField( "!say <content>", "I'll say anything you ask me to.")
        .addField( "!send <user/ID> <content>", "I'll send an anonymous text to the user who's ID matches to the one stated!" )
        .addField( "!rps", "Use !rps <`Rock` , `Paper`, `Scissors`> to play.")
        .addField("!spam <content>", "I will spam 25 lines of whatever you type and delete all of them off to keep things concealed.")
        .addField("!dice", "A dice will be thrown and a random number from 1-6 will be displayed.")
        .addField("!throw <user/ID>", "A fat panda will be thrown at the specified user!")
        .setFooter("**Page 2/4** Use !help 3 to flip to page 3!")

        if (msg === `${prefix}help 2`) {
        message.channel.send (help2)
        }

        help3 = new discord.RichEmbed()
        .setColor("GREEN")
        .setTitle("Here is a list of commands my creator has equipped me with: " )
        .addField("!promote", "Sends a promotion GIF.")
        .addField("!demote", "Sends a GIF of Frank shooting his demotes.")
        .addField("!ping", "Pings me to see if I am of operational standards.")
        .addField("!day <date> <month> <year>", "The exact day for that date will be presented. All inputs have to be spelt in full.")
        .addField("!today", "All of today's details will be displayed.")
        .addField("!time", "The current time will be presented for the user's corresponding timezone.")
        .addField("!pfp", "Changes the bot's profile picture to whatever sent with the command. `!pfp` has to be said as a comment once a picture has been selected. ")
        .setFooter("**Page 3/4** Use !help 4 to flip to page 4!")

       if (msg === `${prefix}help 3`) {
        message.channel.send (help3)
    }

    help4 = new discord.RichEmbed()
        .setColor("GREEN")
        .setTitle("Here is a list of commands my creator has equipped me with: " )
        .addField("!eat <user/ID>", "I'll gobble down the person tagged ferociously.")
        .addField("!server", "Displays the server's statistic information.")
        .addField("!invite", "Creates an invite link to invite the bot into your own server.")
        .addField("!speak <channel ID> <message>", "Sends a text into a specific channel anonymously")
        .addField("!bugreport <report/details>", "Makes the creator aware of any issues regarding the bot.")
        .setFooter("**Page 4/4**")

    if (msg === `${prefix}help 4`) {
        message.channel.send (help4)
    }

if (msg === `${prefix}rps`)
    message.channel.send ("Please specify an option: `Rock`|`Paper`|`Scissors`.")

    if(msg.startsWith (prefix + "rps rock")) {
        number = 3
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch(random) {

            case 1: 
            rock = new discord.RichEmbed()
            .setAuthor("Rock, Paper, Scissors")
            .setColor("ORANGE")
            .addField("You chose", "`Rock`")
            .addField("I chose", "`Rock`")
            .addField("It's a draw!", "Thank you for playing!")
            message.channel.send (rock); break;
        
            case 2: 
            rock2 = new discord.RichEmbed()
            .setAuthor("Rock, Paper, Scissors")
            .setColor("ORANGE")
            .addField("You chose", "`Rock`")
            .addField("I chose", "`Paper`")
            .addField("You lost!", "Thank you for playing!")
            message.channel.send(rock2); break;
        
            case 3:
            rock3 = new discord.RichEmbed()
            .setAuthor("Rock, Paper, Scissors")
            .setColor("ORANGE")
            .addField("You chose", "`Rock`")
            .addField("I chose", "`Scissors`")
            .addField("You won!", "Thank you for playing!")
            message.channel.send(rock3); break;
        
            }
} 



    if(msg.startsWith (prefix + "rps paper")) {

    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    number = 3
    switch(random) { 

    case 1: 
    paper = new discord.RichEmbed()
    .setAuthor("Rock, Paper, Scissors")
    .setColor("ORANGE")
    .addField("You chose", "`Paper`")
    .addField("I chose", "`Rock`")
    .addField("You win!", "Thank you for playing!")
    message.channel.send (paper); break;

    case 2: 
    paper2 = new discord.RichEmbed()
    .setAuthor("Rock, Paper, Scissors")
    .setColor("ORANGE")
    .addField("You chose", "`Paper`")
    .addField("I chose", "`Paper`")
    .addField("It's a draw!", "Thank you for playing!")
    message.channel.send(paper2); break;

    case 3:
    paper3 = new discord.RichEmbed()
    .setAuthor("Rock, Paper, Scissors")
    .setColor("ORANGE")
    .addField("You chose", "`Paper`")
    .addField("I chose", "`Scissors`")
    .addField("You lost!", "Thank you for playing!")
    message.channel.send(paper3); break;

    }
}

    if(msg.startsWith (prefix + "rps scissors")) {

    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    number = 3
    switch(random) { 

    case 1: 
    scissors = new discord.RichEmbed()
    .setAuthor("Rock, Paper, Scissors")
    .setColor("ORANGE")
    .addField("You chose", "`Scissors`")
    .addField("I chose", "`Rock`")
    .addField("You lost!", "Thank you for playing!")
    message.channel.send (scissors); break;

    case 2: 
    scissors2 = new discord.RichEmbed()
    .setAuthor("Rock, Paper, Scissors")
    .setColor("ORANGE")
    .addField("You chose", "`Scissors`")
    .addField("I chose", "`Paper`")
    .addField("You won!", "Thank you for playing!")
    message.channel.send(scissors2); break;

    case 3:
    scissors3 = new discord.RichEmbed()
    .setAuthor("Rock, Paper, Scissors")
    .setColor("ORANGE")
    .addField("You chose", "`Scissors`")
    .addField("I chose", "`Scissors`")
    .addField("It's a draw!", "Thank you for playing!")
    message.channel.send(scissors3); break;

        }}

    if(msg.startsWith (prefix + "spam")) {
        if (message.content.includes("@259658154982375425")) {
            message.reply ("That isn't going to happen anytime soon on my watch. :eyes:") 
            return; }
        sentMessage = message.content.slice (6);
        message.delete();
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        message.channel.send (sentMessage).then(d_msg => { d_msg.delete(1); });
        
    }
    cordsmessage = message.content.slice (7)
    

if (msg.startsWith (prefix + "cords")) {
    message.delete()
    cordembed = new discord.RichEmbed()
    .setTitle("Minecraft world landmarks")
    .setColor ("BLUE")
    .setDescription (cordsmessage)
    .setFooter(message.author.tag).setTimestamp()
    message.channel.send (cordembed)
}

if (msg.startsWith (prefix + "dice")) {
    number = 6
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch(random) {
            case 1: 
            dice1 = new discord.RichEmbed()
            .setTitle("Rolling dice...")
            .setColor ("GREEN")
            .setDescription ("You rolled **1**!")
            .setFooter(message.author.tag).setTimestamp()
    message.channel.send (dice1); break;
        

        case 2: 
            dice2 = new discord.RichEmbed()
            .setTitle("Rolling dice...")
            .setColor ("GREEN")
            .setDescription ("You rolled **2**!")
            .setFooter(message.author.tag).setTimestamp()
    message.channel.send (dice2); break;
        

        case 3: 
            dice3 = new discord.RichEmbed()
            .setTitle("Rolling dice...")
            .setColor ("GREEN")
            .setDescription ("You rolled **3**!")
            .setFooter(message.author.tag).setTimestamp()
    message.channel.send (dice3); break;
        
        case 4: 
            dice4 = new discord.RichEmbed()
            .setTitle("Rolling dice...")
            .setColor ("GREEN")
            .setDescription ("You rolled **4**!")
            .setFooter(message.author.tag).setTimestamp()
    message.channel.send (dice4); break;
    
        case 5: 
            dice5 = new discord.RichEmbed()
            .setTitle("Rolling dice...")
            .setColor ("GREEN")
            .setDescription ("You rolled **5**!")
            .setFooter(message.author.tag).setTimestamp()
    message.channel.send (dice5); break;
        

        case 6: 
            dice6 = new discord.RichEmbed()
            .setTitle("Rolling dice...")
            .setColor ("GREEN")
            .setDescription ("You rolled **6**!")
            .setFooter(message.author.tag).setTimestamp()
    message.channel.send (dice6); break;
        }

}



PandaThrowID = message.content.slice (7,25)
if (msg.startsWith (prefix + "throw")) {
    if (msg === `${prefix}throw`) {
        message.reply ("Please state down a user/ID for me to throw the panda at.").then(d_msg => { d_msg.delete(5000); });
        message.delete()
        return;}
    if (client.users.get (PandaThrowID) == null) {
        message.reply ("Please input a valid user/ID and retry shortly.").then(d_msg => { d_msg.delete(5000); });
        message.delete()
        return; }
    if (message.content.includes("259658154982375425")) {
        message.reply ("That isn't going to happen anytime soon on my watch. :eyes:") 
        return; }
    if (message.content.includes ("579209575635484682")) {
        message.reply ("I can't do that to myself!")
        return; }
    message.channel.send(`Threw a blob of panda fats at ${client.users.get(PandaThrowID)}`)

    cooldown:5
}
    
if (msg === `.help page 1`) {
    let helppage1 = new discord.RichEmbed()
    .setTitle ("**Help page 1**")
    .addField ("$panda", "LogicBot will react with a panda emoji")
    .setColor ("GREEN")
    .setTimestamp();
    message.channel.send (helppage1)
}
    
if (msg.startsWith (prefix + "demote")) {
    message.channel.send ("https://cdn.discordapp.com/attachments/348950747356069888/441709530456260614/frankgundemote.gif")
}

if (msg.startsWith (prefix + "promote")) {
    message.channel.send ("https://tenor.com/view/spongebob-gif-9789252")
}

if (msg.startsWith (prefix + "ping")) {
    pingpong = new discord.RichEmbed ()
    .setTitle ("Pinging!")
    .setDescription ("📡:white_small_square::black_small_square: :black_small_square:🛰")
    .setFooter ("Ultra sonic pinging in progress!")
    .setTimestamp ()

    pingpong2 = new discord.RichEmbed ()
    .setTitle ("Pinging!")
    .setDescription ("📡:black_small_square: :white_small_square: :black_small_square:🛰")
    .setFooter ("Ultra sonic pinging in progress!")
    .setTimestamp ()

    pingpong3 = new discord.RichEmbed ()
    .setTitle ("Pinging!")
    .setDescription ("📡:black_small_square::black_small_square: :white_small_square:🛰")
    .setFooter ("Ultra sonic pinging in progress!")
    .setTimestamp ()
    
    pingpong4 = new discord.RichEmbed ()
    .setTitle ("Pinging!")
    .setDescription ("📡:black_small_square: :white_small_square: :black_small_square:🛰")
    .setFooter ("Ultra sonic pinging in progress!")
    .setTimestamp ()
   
    
    pingpong5 = new discord.RichEmbed ()
    .setTitle ("Pinging!")
    .setDescription ("📡:white_small_square::black_small_square: :black_small_square:🛰")
    .setFooter ("Ultra sonic pinging in progress!")
    .setTimestamp ()


    pingpongfinal = new discord.RichEmbed ()
        .setTitle ("Pinging!")
        .setColor ("GREEN")
        .setDescription ("The ping is good enough to use the bot normally!")
        .setFooter ("Ultra sonic pinging completed!")
        .setTimestamp ()
    

    message.channel.send (pingpong).then((msg) => {setTimeout(function() 
        {msg.edit(pingpong2);}, 1000); 
        {setTimeout(function() {msg.edit(pingpong3);}, 2000)}
        {setTimeout(function() {msg.edit(pingpong4);}, 3000)}
        {setTimeout(function() {msg.edit(pingpong5);}, 4000)}
        {setTimeout(function() {msg.edit(pingpongfinal);}, 5000)}})

    }

    
if (msg.startsWith (prefix + "emoji")) {
    emojiMessage = message.content.slice (7)
    message.channel.send (":" + emojiMessage + ":")
}

if (msg === `${prefix}day`) {
    message.channel.send ("Please specify the information in a `Day Month Year` format, spelt in full!")
}

dayrequested = message.content.slice(5)
if (msg.startsWith (prefix + "day")) {
    daysofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    message.channel.send("The day of " + dayrequested + " is a __**" + daysofweek[(new Date(message.content)).getDay()]+ " **__")
}

if (msg.startsWith (prefix + "today")) {
    message.channel.send ((new Date()).toString())
}

if (msg === `${prefix}time`) {
    message.channel.send ((new Date()).toTimeString())
}

if (msg === `${prefix}timezone`) {
    timezonedifference = ((new Date()).getTimezoneOffset())
    message.channel.send (timezonedifference)
}

if (msg.startsWith (prefix + "hi")) {
    message.channel.send ("Heyo!").then((msg) => {setTimeout(function() 
        {msg.edit('my other emotes');}, 1000); 
        {setTimeout(function() {msg.edit('Hoi!');}, 3000)}
        {setTimeout(function() {msg.edit('Final');}, 5000)}})

        .catch(console.error);
}

if (msg.startsWith (prefix + "testing")) {
    message.react('??').then(() => message.react('??'));

const filter = (reaction, user) => {
    return ['??', '??'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '??') {
            message.reply('you reacted with a thumbs up.');
        } else {
            message.reply('you reacted with a thumbs down.');
        }
    })
    .catch(collected => {
        message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
    });
}

if (msg.startsWith (prefix + "eat")) {
    if (message.content.includes("259658154982375425")) {
    message.reply ("That isn't going to happen anytime soon on my watch. :eyes:") 
    return; }
    if (message.content.includes ("579209575635484682")) {
        message.reply ("I can't do that to myself!")
        return; }
if (msg === `${prefix}eat`) {
        message.channel.send ("Please state down the user/ID of the user you want me to consume.").then(d_msg => { d_msg.delete(4000); });
        return;}
    eatperson1 = message.content.slice (5,23)
    eatperson = client.users.get(eatperson1)

    if (client.users.get (eatperson1) == null){ 
        message.reply ("Please state down a valid user/ID and retry.")
        return; }

    message.channel.send (`Swallowing and digesting **${eatperson}**`).then((msg) => {setTimeout(function() 
        {msg.edit(`Swallowing and digesting **${eatperson}** **(10%)**`);}, 1000);
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(20%)**");}, 2500)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(30%)**");}, 4000)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(40%)**");}, 5500)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(50%)**");}, 7000)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(60%)**");}, 8500)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(70%)**");}, 10000)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(80%)**");}, 11500)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(90%)**");}, 13000)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(91%)**");}, 13001)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(92%)**");}, 13002)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(93%)**");}, 13003)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(94%)**");}, 13004)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(95%)**");}, 13005)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(96%)**");}, 13006)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(97%)**");}, 13007)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(98%)**");}, 13008)}
        {setTimeout(function() {msg.edit("Swallowing and digesting **" + eatperson + "** **(99%)**");}, 13009)}
        {setTimeout(function() {msg.edit("That was delicious! Better than I've ever expected!");}, 30000)} 
        {setTimeout(function() {msg.channel.send(eatperson + " has died of a tragic death, that's unfortunate. :cry:");}, 30000)}})
}

//Guide help pages
if (msg === `${prefix}guide help`) {
    if (message.channel.id != '599230280720449546') { return; }
pixelGuide = new discord.RichEmbed()
    .setTitle ("Complex Pixelmon Punishment Guide Index")
    .setColor ("#7289DA")
    .addField ("1. Chat Infractions", "Swearing/Inappropriate Language\n       Spamming\n       Player/Staff Disrespect\n       Racist/Hateful Speech/Harassment\n       Ignoring staff")
    .addField ("2. Command Abuse","Tpa spam\n       Teleportation to Crates/Wormholes\n       Player Trapping\n       Using Donor Perms\n       Underselling")
    .addField ("3. Inappropriate Skin", "Skins that deem offensive or racial")
    .addField ("4. Pokedex Trading", "Pokemons traded just to increase dex %")
    .addField ("5. Client Abuse", "Hacking")
    .addField ("6. Player Abuse", "\n       Griefing\n       Building Racial or Inappropriate Builds\n       Scamming")
    .addField ("7. Item Abuse", "\n       Giving away Pokemons/items\n       Begging for items")
    .addField ("8. Claim Abuse", "\n       Claiming under 25 blocks from another claim\n       Claiming loot balls/crates")
    .addField ("9. Duping", "\n       Intentionally\n       Unintentionally")
    .addField ("10. Refund Scam", "Claiming that they lost items/Pokemon they never actually had")
    .addField ("11. Advertising", "\n       Servers **(Go straight to 4th incident)**\n       Others")
    .addField ("12. Alt Account Abuse", "\n       Personal Gain\n       Bypass Punishments")
    .addField ("13. Cross Server Trading", "Traing items/Pokemon on one server to another")
    .addField ("14. DOX/DDOS Threats", "Players threatening another with personal information")
    .addField ("15. Purchasing In-Game Items with IRL Money (Irl deal)", "Using real currency for virtual goods")
    .addField ("16. Multiple Rule Breaker (6+ Punishments)", "\n       Variety of Rules Broken")
    .setFooter ("!guide <page no.> or !guide <page name> to view individual offence consequences")
    message.channel.send (pixelGuide)
}



//start of Chat Infractions

chatInfractions = new discord.RichEmbed()
    .setTitle("Chat Infractions - \n       Swearing/Inappropriate Language\n       Spamming\n       Player/Staff Disrespect\n       Racist/Hateful Speech/Harassment\n       Ignoring staff")
    .setColor ("#7289DA")
    .setDescription ("\n**1st**   - Mute for 15 minutes.\n**2nd**  - Mute for 1 hour.\n**3rd**  - Mute for 3 hours.\n**4th**  - Mute for 6 hours.\n**5th**  - Mute for 12 hours. Verbally warn player of tempban if they continue.")

    if (msg === `${prefix}guide swear`) {
    if (message.channel.id != '599230280720449546') { return; }
        message.channel.send (chatInfractions);
}

if (msg ===`${prefix}guide inappropriate language`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (chatInfractions);
}

if (msg === `${prefix}guide spam`) {
    if (message.channel.id != '599230280720449546') { return; }  
      message.channel.send (chatInfractions);
}

if (msg === `${prefix}guide player disrespect`) {
    if (message.channel.id != '599230280720449546') { return; }    
    message.channel.send (chatInfractions);
}

if (msg === `${prefix}guide staff disrespect`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (chatInfractions);
}

if (msg === `${prefix}guide racism`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (chatInfractions);
}

if (msg === `${prefix}guide hateful speech`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (chatInfractions);
}

if (msg === `${prefix}guide hateful harassment`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (chatInfractions);
}

if (msg === `${prefix}guide ignoring staff`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (chatInfractions);
}

if (msg === `${prefix}guide chat infractions`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (chatInfractions);
}

if (msg === `${prefix}guide 1`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (chatInfractions);
}
//End of Chat Infractions

//Start of Command Abuse
commandAbuse = new discord.RichEmbed()
    .setTitle("Command Abuse - \n       Tpa spam\n       Teleportation to Crates/Wormholes\n       Player Trapping\n       Using Donor Perms\n       Underselling")
    .setColor ("#7289DA")
    .setDescription ("\n**1st**   - Warning & note.\n**2nd**  - Jail for 30 minutes.\n**3rd**  - Jail for 3 hours.\n**4th**  - Mute & Jail for 6 hours. Give a verbal warning that the next step is temp ban if they continue.\n**5th**  - 1 day temp ban.")

    if (msg === `${prefix}guide tpa spam`) {
        if (message.channel.id != '599230280720449546') { return; }  
        message.channel.send (commandAbuse)
    }
if (msg === `${prefix}guide tp to crate`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (commandAbuse)
}
if (msg === `${prefix}guide tp to wormhole`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (commandAbuse)
}
if (msg === `${prefix}guide player trapping`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (commandAbuse)
}
if (msg === `${prefix}guide donor`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (commandAbuse)
}
if (msg === `${prefix}guide underselling`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (commandAbuse)
}

if (msg === `${prefix}guide command abuse`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (commandAbuse);
}

if (msg === `${prefix}guide 2`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (commandAbuse);
}
//End of Command Abuse

inappropriateSkin = new discord.RichEmbed()
    .setTitle("Inappropriate Skins")
    .setColor ("#7289DA")
    .setDescription ("\n**1st**   - Verbally ask them to remove the skin & jail until removed.\n**2nd**  - Jail until removed. Verbally ask them to remove the skin & give 30 minutes jail.\n**3rd**  - 1 day tempban. Verbally warn that next step is perm ban.\n**4th**  - Perm ban.")
   

if (msg === `${prefix}guide inappropriate skins`) {
    if (message.channel.id != '599230280720449546') { return; }  
        message.channel.send (inappropriateSkin)
}

if (msg === `${prefix}guide 3`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (inappropriateSkin);
}



pokedexTrading = new discord.RichEmbed()
    .setTitle("Pokedex Trading")
    .setColor ("#7289DA")
    .setDescription ("\n**1st**   - Jail for 10 minutes.\n**2nd**  - Mute and jail for 3 hours.\n**3rd**  - Mute and jail for 6 hours. Verbally warn that next step is a perm ban.\n**4th**  - Perm ban.")
   
if (msg === `${prefix}guide pokedex trading`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (pokedexTrading)
}

if (msg === `${prefix}guide 4`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (pokedexTrading);
}

clientAbuse = new discord.RichEmbed()
    .setTitle("Client Abuse - \n       Hacking")
    .setColor ("#7289DA")
    .setDescription ("\n**1st**   - Jail for 1 hour.\n**2nd**  - Jail for 7 hours.\n**3rd**  - 1 day temp ban. Verbally warn that next step is no longer temp ban. **For pokeradar, remove the abused pokemon**\n**4th**  - 7 day temp ban. Verbally warn that next step is no longer temp ban **For pokeradar, full reset. (Needs ok from Head-Admin+)**.\n**5th**  - 14 day temp ban. **For pokeradar, full reset. (Needs ok from Head-Admin+)**")
   
if (msg === `${prefix}guide hacking`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (clientAbuse)
}

if (msg === `${prefix}guide client abuse`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (clientAbuse);
}

if (msg === `${prefix}guide 5`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (clientAbuse);
}

//Start of Player Abuse
playerAbuse = new discord.RichEmbed()
    .setTitle("Player Abuse - \n       Griefing\n       Building Racial or Inappropriate Builds\n       Scamming")
    .setColor ("#7289DA")
    .setDescription ("\n**1st**   - Mute & jail for 30 minutes.\n**2nd**  - Mute & jail for 6 hours. Verbally warn that if they continue then they will be perm banned.\n**3rd**  - Perm ban.\n**4th**  - **NIL**\n**5th**  - **NIL**")

if (msg === `${prefix}guide griefing`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (playerAbuse)
}

if (msg === `${prefix}guide inappropriate builds`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (playerAbuse)
}

if (msg === `${prefix}guide scamming`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (playerAbuse)
}

if (msg === `${prefix}guide chat player abuse`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (playerAbuse);
}

if (msg === `${prefix}guide 6`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (playerAbuse);
}
//End of player abuse
itemAbuse = new discord.RichEmbed()
    .setTitle("Item Abuse - \n       Giving away Pokemons/items\n       Begging for items")
    .setColor ("#7289DA")
    .setDescription ("\n**1st**   - Verbal warning. Remove/return any items/Pokemons\n**2nd**  - Remove the Pokemons/items. Mute & jail for 1 hour.\n**3rd**  - Mute & jail for 6 hours. Give a verbal warning that next step is a temp ban if they continue.\n**4th**  - 3 day temp ban. Verbally warn that next step is perm ban.\n**5th**  - Perm ban.")

if (msg === `${prefix}guide giveaway`) {
    if (message.channel.id != '599230280720449546') { return; }  
        message.channel.send (itemAbuse)
}

if (msg === `${prefix}guide begging for items`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (itemAbuse)
}

if (msg === `${prefix}guide item abuse`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (itemAbuse);
}

if (msg === `${prefix}guide 7`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (itemAbuse);
}

claimAbuse = new discord.RichEmbed()
    .setTitle("Claim Abuse - \n       Claiming under 25 blocks from another claim\n       Claiming loot balls/crates")
    .setColor ("#7289DA")
    .setDescription ("\n**1st**   - Warn, Contact an admin to remove claim & move any builds.\n**2nd**  - Jail for 30 minutes. Contact an admin to remove claim & move any builds.\n**3rd**  - Mute & jail for 1 hours. Contact an admin to remove claim & move any builds.\n**4th**  - 1 day temp ban. Contact an admin to remove claim & move any builds.\n**5th**  - Perm ban. Contact an admin to remove claim & move any builds. ")

if (msg === `${prefix}guide claim too close`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (claimAbuse)
}

if (msg === `${prefix}guide claim loot ball`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (claimAbuse)
}

if (msg === `${prefix}guide claim loot crate`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (claimAbuse)
}

if (msg === `${prefix}guide claim abuse`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (claimAbuse);
}

if (msg === `${prefix}guide 8`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (claimAbuse);
}


duping = new discord.RichEmbed()
    .setTitle("Duping - \n       Intentionally\n       Unintentionally")
    .setColor ("#7289DA")
    .setDescription ("\n**1st** - \n       Intentional - Wipe balance, Remove duped items/Pokemon & Perm ban. \n       Unintentional - Have player return items/Pokemon. Always report bug to admin +")

if (msg === `${prefix}guide dupe`) {
    if (message.channel.id != '599230280720449546') { return; }  
        message.channel.send (duping)
}

if (msg === `${prefix}guide duping`) {
    if (message.channel.id != '599230280720449546') { return; }  
            message.channel.send (duping)
}

if (msg === `${prefix}guide 9`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (duping);
}


refundScam = new discord.RichEmbed()
    .setTitle("Refund Scam - ")
    .setColor ("#7289DA")
    .setDescription ("\n**1st**   -  Mute & jail for 1 hour & Pokereset. Mention in #players-to-watch so that an admin + can add the player to refund blacklist.\n**2nd**  - Perm ban & Pokereset. **(Confirm with Head-Admin+ before doing)**")

if (msg === `${prefix}guide refund scam`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (refundScam)
}

if (msg === `${prefix}guide 10`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (refundScam);
}


advertising = new discord.RichEmbed()
    .setTitle("Advertising - \n       Servers **(Go straight to 4th incident)**\n       Others")
    .setColor ("#7289DA")
    .setDescription ("\n**1st**   - Warn & note.\n**2nd**  - Mute & jail for 30 minutes.\n**3rd**  - Mute & jail for 1 hour.\n**4th**  - Perm ban.\n**5th**  - **NIL**")

if (msg === `${prefix}guide advert`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (advertising)
}

if (msg === `${prefix}guide advertising`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (advertising)
}

if (msg === `${prefix}guide 11`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (advertising);
}


altAbuse = new discord.RichEmbed()
    .setTitle("Alt/Account Abuse - \n       Personal Gain\n       Bypass Punishments (Go to 2nd incident if 10+ alts are involved)")
    .setColor ("#7289DA")
    .setDescription ("\n**1st**   - Verbally warn that they will be banned if they continue.\n**2nd**  - 3 day temp ban for main account & Perm ban all alts. Pokereset & Eco Reset all accounts. Verbally advise that if continued then perm ban. **Requires permission from Head-Admin+**.\n**3rd**  - Perm Ban.\n**4th**  - **NIL**\n**5th**  - **NIL**")

if (msg === `${prefix}guide alt abuse`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (altAbuse)
}

if (msg === `${prefix}guide bypass punishments`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (altAbuse)
}

if (msg === `${prefix}guide alt account abuse`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (altAbuse);
}

if (msg === `${prefix}guide 12`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (altAbuse);
}


crossServerTrading = new discord.RichEmbed()
    .setTitle("Cross Server Trading - ")
    .setColor ("#7289DA")
    .setDescription ("\n**1st**   - Warn & note on both servers. Remove traded items/Pokemon.\n**2nd**  - Warn, note, Mute & jail for 3 hours on both servers. Remove traded items/Pokemon.\n**3rd**  - Warn, note, Mute & jail for 6 hours on both servers Remove traded items/Pokemon.\n**4th**  - 3 day tempban, warn & note on both servers. Remove traded items/Pokemon.\n**5th**  - 7 day tempban, warn & note on both servers. Remove traded items/Pokemon.")

if (msg === `${prefix}guide cross server trading`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (crossServerTrading)
}

if (msg === `${prefix}guide 13`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (crossServerTrading);
}


ddosThreats = new discord.RichEmbed()
    .setTitle("DOX/DDOS Threats - ")
    .setColor ("#7289DA")
    .setDescription ("\n**1st**   - Use common sense and determine if the threat is real or a joke. If it is a serious threat then go to step 2, if it is a misunderstanding or joke then give a verbal warning on severity of action.\n**2nd**  - Perm ban\n**3rd**  - **NIL**\n**4th**  - **NIL**\n**5th**  - **NIL**")

if (msg === `${prefix}guide dox threat`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (ddosThreats)
}

if (msg === `${prefix}guide ddos threat`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (ddosThreats)
}

if (msg === `${prefix}guide dox/ddos threats`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (ddosThreats);
}

if (msg === `${prefix}guide 14`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (ddosThreats);
}


irlDeal = new discord.RichEmbed()
    .setTitle("Purchasing In-Game Items with IRL Money - ")
    .setColor ("#7289DA")
    .setDescription ("\n**1st**   - Perm ban\n**2nd**  - **NIL**\n**3rd**  - **NIL**\n**4th**  - **NIL**\n**5th**  - **NIL**")

if (msg === `${prefix}guide irl deal`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (irlDeal)
}

if (msg === `${prefix}guide 15`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (irlDeal);
}


multipleRuleBreaker = new discord.RichEmbed()
    .setTitle("Multiple Rule Breaker (6+ Punishments) -\n       Variety of Rules Broken \n\n**If a next step is a higher punishment than below then follow that track.**")
    .setColor ("#7289DA")
    .setDescription ("\n**6th note**   - Mute & jail for 6 hours. Also mention in #players-to-watch as multiple rule breaker.\n**7th note**  - 1 day temp ban. Verbally warn if it continues then a longer temp ban will be given. Also mention in #players-to-watch as a multiple rule breaker.\n**8th note**  - 3 day temp ban. Verbally warn if it continues then a perm ban will be given. Also mention in #players-to-watch as a multiple rule breaker.\n**9th note**  - Perm ban.")

if (msg === `${prefix}guide multiple rule breaker`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (multipleRuleBreaker)
}

if (msg === `${prefix}guide mrb`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (multipleRuleBreaker)
}

if (msg === `${prefix}guide 16`) {
    if (message.channel.id != '599230280720449546') { return; }  
    message.channel.send (multipleRuleBreaker);
}

inviteembed = new discord.RichEmbed()
.setTitle("Invite me to your discord server, here's the link: ")
.setColor("GREEN")
.setDescription("https://discordapp.com/oauth2/authorize?client_id=579209575635484682&scope=bot&permissions=2146958847")
.setTimestamp()

if (msg.startsWith (prefix + "invite"))  { 
    message.channel.send (inviteembed)
}

SpeakChannelID = message.content.slice(7, 25)
SpeakMessage = message.content.slice (26)

if (msg.startsWith(prefix + "speak")) {


    if (message.content.includes ("629205502655463424")) {
        if (message.author.id === "259658154982375425") { client.channels.get (SpeakChannelID).send (SpeakMessage)
            return }
        message.reply ("You have insufficient permissions to send a message into that channel!") 
        return; }
    

    client.channels.get (SpeakChannelID).send (SpeakMessage)
    
}
BugReportContent = message.content.slice (11)
BugReportEmbed = new discord.RichEmbed ()
.setTitle ("BUG REPORT: ")
.setColor ("RED")
.setDescription (BugReportContent)
.setFooter (`Reported by: ${message.author.username}`)
.setTimestamp()

if (msg.startsWith (prefix + "bugreport")) {
    client.users.get ("259658154982375425").send (BugReportEmbed)
}

CrabID = message.content.slice (6,24)
if (msg.startsWith (prefix + "crab")) {
    message.delete()
client.users.get (CrabID).send ("🦀").then(d_msg => { d_msg.delete(1); });
client.channels.get("629366944155566090").send (`${client.users.get(CrabID).tag} was **CRABBED** by ${message.author.tag}`)
}









});
client.login (token);
