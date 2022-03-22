const { Client, Intents, Collection, MessageAttachment, MessageEmbed, Permissions, Constants, ApplicationCommandPermissionsManager } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_BANS,Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,Intents.FLAGS.GUILD_INTEGRATIONS,Intents.FLAGS.GUILD_WEBHOOKS,Intents.FLAGS.GUILD_INVITES,Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_MESSAGE_TYPING,Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,Intents.FLAGS.DIRECT_MESSAGE_TYPING] });
const ayarlar = require("./ayarlar.json");
const Discord = require("discord.js")
const db = require("nrc.db");
const message = require("./events/message");
const { DiscordFivemApi } = require('discord-fivem-api');
let prefix = ayarlar.prefix;

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./komutcalistirici`)(client);
}); 

client.on("ready", () => {
  require("./events/eventLoader")(client);
});



client.on("messageCreate", async msg => {

  const i =  db.fetch(`küfürengel_${msg.guild.id}`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq"
    ];
    if (kufur.some(kufur => msg.content.toLowerCase() === kufur)) {
      try {
        if (

          !msg.member.permissions.has("ADMINISTRATOR")) {
          msg.delete();
          return msg.channel.send("Lütfen, küfür etme.")

        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
  const i = db.fetch(`küfürengel_${oldMsg.guild.id}`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq"
    ];
    if (kufur.some(kufur => newMsg.content.toLowerCase() === kufur)) {
      try {
        if (

          !newMsg.member.permissions.has("ADMINISTRATOR")) {
          newMsg.delete();
          return oldMsg
            .reply("Mesajı Düzenlediğini Yakaladım! Küfür yasak.")
     
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});



//////////////// reklam engel


client.on("messageCreate ", async msg => {

  let aktif =  db.fetch(`reklamengel_${msg.guild.id}`);
  if (aktif) return;
  let reklamlar = [
    "discord.app",
    "discord.gg",
    "discordapp",
    "discordgg",
    ".com",
    ".net",
    ".xyz",
    ".tk",
    ".pw",
    ".io",
    ".me",
    ".gg",
    "www.",
    "https",
    "http",
    ".gl",
    ".org",
    ".com.tr",
    ".biz",
    ".party",
    ".rf.gd",
    ".az",
    ".cf",
    ".me",
    ".in"
  ];

  if (reklamlar.some(nrckelime => message.content.toLowerCase().includes(nrckelime))) {


    if (

      !mesmsgsage.member.permissions.has("ADMINISTRATOR")
    )
      return;
    msg.delete();
    
      msg.channel.send(`${msg.author}, Reklam Yapamazsın Dostum!`)

  }
});

client.on("messageUpdate", async (oldMsg, newMsg, message) => {
  let aktif =  db.fetch(`reklamengel_${newMsg.guild.id}`);
  if (aktif) return;
  let reklamlar = [
    "discord.app",
    "discord.gg",
    "discordapp",
    "discordgg",
    ".com",
    ".net",
    ".xyz",
    ".tk",
    ".pw",
    ".io",
    ".me",
    ".gg",
    "www.",
    "https",
    "http",
    ".gl",
    ".org",
    ".com.tr",
    ".biz",
    ".party",
    ".rf.gd",
    ".az",
    ".cf",
    ".me",
    ".in"
  ];

  if (reklamlar.some(nrckelime => newMsg.content.toLowerCase().includes(nrckelime))) {
    if (

!newMsg.member.permissions.has("ADMINISTRATOR")
      )
      return;
    newMsg.delete();
    oldMsg
      newMsg.channel.send("Mesajı Düzenlediğini Yakaladım! Reklam Yapmak Yasak.")
      
  }
});

///// `saas_${message.guild.id}`

client.on("messageCreate", async msg => {

  let saas = db.fetch(`saas_${msg.guild.id}`)

if(saas == true) {

var sa = ["sa","SA","Sa","Sea","sea","Selamın Aleyküm","selamın aleyküm", "SELAMIN ALEKYÜM","Selam","selam","SELAM"]

if(sa.includes(msg.content.toLowerCase())){
msg.reply(`Aleyküm Selam Hoşgeldin.`)



}



}


})

client.on("guildMemberAdd", async member => {

/*

    db.delete(`otorol_kanal_${message.guild.id}`)
    db.delete(`otorol_rol_${message.guild.id}`)
*/


let kanal = db.fetch(`otorol_kanal_${member.guild.id}`)
let rol   = db.fetch(`otorol_rol_${member.guild.id}`)

if(!kanal) return;
if(!rol) return;

member.roles.add(rol)

client.channels.cache.get(kanal).send(`${member} sunucuya katıldı ve başarılı bir şekilde <@&${rol}> isimli rol verildi.`)

})
client.on("guildMemberAdd", async member => {


let hgbb = db.fetch(`hg_bb_kanal_${member.guild.id}`)

if(!hgbb) return;

const hg = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`${member}, Aramıza Hoşgeldin`)
client.channels.cache.get(hgbb).send({embeds: [hg]})
})

client.on("guildMemberRemove", async member => {


  let hgbb = db.fetch(`hg_bb_kanal_${member.guild.id}`)
  
  if(!hgbb) return;
  
  const bb = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${member}, Aramıza Ayrıldı`)
  client.channels.cache.get(hgbb).send({embeds: [bb]})
  })


  client.on("guildMemberAdd", async member => {


    let kontrol1 = db.fetch(`sayaç_log_${member.guild.id}`)
    let kontrol2 = db.fetch(`sayaç_hedef_${member.guild.id}`)

   if(!kontrol1) return;

   if(kontrol2){
   
   let kalan = kontrol2 - member.guild.memberCount

   if(kalan === 0) {
     client.channels.cache.get(kontrol1).send(`Yeni Biri Katıldı, ${member} Hoşgeldin. Seninle beraber **${member.guild.memberCount}** Kişiyiz Sayaç Hedefimize ulaştık.`)
     db.delete(`sayaç_hedef_${member.guild.id}`)
   }else{

    client.channels.cache.get(kontrol1).send(`Yeni Biri Katıldı, ${member} Hoşgeldin. Seninle beraber **${member.guild.memberCount}** Kişiyiz Sayaç Hedefimize **${kalan}** kişi kaldı.`)

   }

   }else{

    client.channels.cache.get(kontrol1).send(`Yeni Biri Katıldı, ${member} Hoşgeldin. Seninle beraber **${member.guild.memberCount}** Kişiyiz Sayaç Hedefimiz Şu Anda Bulunmamaktadır..`)
   }

  })
  



client.login(process.env.token);
