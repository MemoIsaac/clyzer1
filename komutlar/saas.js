const Discord = require("discord.js");
const db = require("nrc.db")


module.exports = {
    calistir: async(client, message, args) => {


let saas = db.fetch(`saas_${message.guild.id}`)


if(!saas) {
db.set(`saas_${message.guild.id}`, true)
message.reply(`Sa As Sistemi Başarılı Bir Şekilde Aktif Edildi.`)
return;
}
db.delete(`saas_${message.guild.id}`)

message.reply(`Sa As sistemi başarılı bir şekilde kapatıldı.`)




},

name: "saas",
description: "Sa As sistemini açarsın/kapatırsın",
aliases: ["sa-as"],
kategori: "bot",
usage: "",
}