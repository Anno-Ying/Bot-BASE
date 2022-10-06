const Discord = require("discord.js");
const { botClientID, embedColor } = require('../../config/settings.json')

module.exports = {
  name: 'messageCreate',
  once: false,
  run: async (interaction, client) => {
    

    const mention = new RegExp(`^<@!?${botClientID}>( |)$`);
    if (interaction.content.match(mention)) {
      const embed = new Discord.EmbedBuilder()
        .setColor(embedColor)
        .setTitle('Atendimento.')
        .setDescription
        (`
        
        Olá ${interaction.author}, Cheque meus comandos utilizando: \`/\`
        Utilizando \`/help\`, Você podera checar um pouco mais sobre mim.
        `)
        .setTimestamp(new Date());
        

      interaction.reply({embeds: [embed], components: [
           new Discord.ActionRowBuilder()
           .addComponents(
            new Discord.ButtonBuilder()
            .setStyle(5)
            .setLabel('GitHub')
            .setEmoji(`<:github:1024484730214826064>`)
            .setURL('https://github.com/Anno-Ying/'),
            new Discord.ButtonBuilder()
            .setStyle(5)
            .setLabel('Suporte')
            .setEmoji(`<:purple_hand:1026301306131980418>`)
            .setURL(`https://discord.gg/HJSeXJCNgS`)
           )
      ],})
    }
}}
