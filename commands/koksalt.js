const Discord = require("discord.js");
const fs = require("fs");
const ImageURLOPT = { format: "png", dynamic: true, size: 1024 };

module.exports.run = async (_client, message) => {
  const channels = [
    "919208559697346560", //config
 ];
 if (!channels.includes(message.channel.id)) {
  const embedErr = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setAuthor("Nie ten kanał!", message.author.displayAvatarURL(ImageURLOPT))
  return message.channel.send(embedErr);
}
   
  fs.readFile("./accounts/koksalt.txt", "utf8", function(err, data) {
    if(err) return require("../scripts/fserr.js")(message, error);

    data = data + "";
    var lines = data.split("\n");
    let account = lines[Math.floor(Math.random() * 1)];


    if (!account) {
      const embedErr = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setAuthor("Nie ma już altów", message.author.displayAvatarURL(ImageURLOPT))
      .setDescription("Sprawdź `!stock`.");
      return message.channel.send(embedErr);
  }

    fs.writeFile("./accounts/koksalt.txt", lines.slice(1).join("\n"), function(err) {
      if(err) return require("../scripts/fserr.js")(message, error);
    });

    const embed = new Discord.MessageEmbed()
        .addField("`discord - configi`", "https://discord.gg/N7zfTpXbUB")
        .addField("alt minecraft", account)
        .setThumbnail("https://www.google.ro/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjPtNDLt43nAhXKAewKHYh4D08QjRx6BAgBEAQ&url=https%3A%2F%2Fdotesports.com%2Fcounter-strike%2Fnews%2Fcomplexitys-straightline-decline-11692&psig=AOvVaw3pfBs1U93XQFV2aa4IeJ7h&ust=1579446668668487")
        .setColor("#60FF0B")
        .setFooter("alt został wysłany z discorda configi")
        .setTimestamp();
        message.author.send(embed);

        message.reply("`Twój alt został wygenerowany sprawdź pv!`");
  });
};

module.exports.help = {
  name: "koksalt",
  name:  "Koksalt",
  name:  "KOKSALT"
};
