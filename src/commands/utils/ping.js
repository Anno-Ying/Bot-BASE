const { ApplicationCommandOptionType } = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'Veja o ping do bot',
    run: async (interaction, client) => {
       
        interaction.reply({ content: `Latencia da minha WS: \`${client.ws.ping.toFixed(2)}\`ms` })

    }
}