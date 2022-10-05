module.exports = {
    name: 'interactionCreate',
    once: false,
    run: async (interaction, client) => {

        if (interaction.isChatInputCommand()) {
            const commandName = interaction.commandName
            const command = client.commands.get(commandName)

            if (!command) return;
            command.run(interaction, client)
        }

    }
}   