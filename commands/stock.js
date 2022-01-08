const Discord = require ("discord.js");
const fs = require ("fs");
const ImageURLOPT = { format: "png", dynamic: true, size: 1024 };

module.exports.run = async (_client, message) => {
  const channel = "759493442870312991"
  if (channel !== message.channel.id) {
    const embedErr = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setAuthor("Nie ten kanał!", message.author.displayAvatarURL(ImageURLOPT))
    return message.channel.send(embedErr);
}
  let disney = fs.readFileSync("./accounts/disney.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let spotify = fs.readFileSync("./accounts/spotify.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let hulu = fs.readFileSync("./accounts/hulu.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let minecraft = fs.readFileSync("./accounts/mc.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let nordvpn = fs.readFileSync("./accounts/vpn.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let origin = fs.readFileSync("./accounts/origin.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let proxy = fs.readFileSync("./accounts/proxy.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let uplay = fs.readFileSync("./accounts/uplay.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let steam = fs.readFileSync("./accounts/steam.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let xbox = fs.readFileSync("./accounts/xbox.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let psn = fs.readFileSync("./accounts/psn.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let email = fs.readFileSync("./accounts/email.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let sonyvegas = fs.readFileSync("./accounts/sv.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let crunchrool = fs.readFileSync("./accounts/cr.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let wish = fs.readFileSync("./accounts/wish.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let imvu = fs.readFileSync("./accounts/imvu.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let hbomax = fs.readFileSync("./accounts/hbo.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let pornhub = fs.readFileSync("./accounts/ph.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let rockstar = fs.readFileSync("./accounts/rockstar.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let roblox = fs.readFileSync("./accounts/roblox.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let lol = fs.readFileSync("./accounts/lol.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let twitch = fs.readFileSync("./accounts/twitch.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let tidal = fs.readFileSync("./accounts/tidal.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  let ig = fs.readFileSync("./accounts/ig.txt", "utf8", (err) => {
    if(err) console.log(err);
  });
  
  

  const table = [
    `**/disney**: \`${disney.split("\n").length}\``,
    `**/spotify**: \`${spotify.split("\n").length}\``,
    `**/minecraft**: \`${minecraft.split("\n").length}\``,
    `**/hulu**: \`${hulu.split("\n").length}\``,
    `**/nordvpn**: \`${nordvpn.split("\n").length}\``,
    `**/origin**: \`${origin.split("\n").length}\``,
    `**/proxy**: \`${proxy.split("\n").length}\``,
    `**/uplay**: \`${uplay.split("\n").length}\``,
    `**/steam**: \`${steam.split("\n").length}\``,
    `**/xbox**: \`${xbox.split("\n").length}\``,
    `**/psn**: \`${psn.split("\n").length}\``,
    `**/email**: \`${email.split("\n").length}\``,
    `**/sonyvegas**: \`${sonyvegas.split("\n").length}\``,
    `**/crunchrool**: \`${crunchrool.split("\n").length}\``,
    `**/wish**: \`${wish.split("\n").length}\``,
    `**/imvu**: \`${imvu.split("\n").length}\``,
    `**/hbomax**: \`${hbomax.split("\n").length}\``,
    `**/pornhub**: \`${pornhub.split("\n").length}\``,
    `**/rockstar**: \`${rockstar.split("\n").length}\``,
    `**/roblox**: \`${roblox.split("\n").length}\``,
    `**/lol**: \`${lol.split("\n").length}\``,
    `**/twitch**: \`${twitch.split("\n").length}\``,
    `**/tidal**: \`${tidal.split("\n").length}\``,
    `**/instagram**: \`${ig.split("\n").length}\``
  ];

  const embed = new Discord.MessageEmbed()
  .setColor("#60FF0B")
  .setTitle("Ten generator posiada następujące rzeczy:")
  .setDescription(table)
  .setFooter('©️ CopyRight NobekWlolu & Luc1fer');
  message.channel.send(embed);
}

module.exports.help = {
  name: "stock",
  name:  "Stock",
  name:  "STOCK"
};