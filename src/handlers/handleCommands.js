const fs = require('fs')

module.exports = (client) => {
    const commandsArray = []
    const commandsFolders = fs.readdirSync('./src/commands');
    for (const folders of commandsFolders) {
        const commandsFiles = fs.readdirSync(`./src/commands/${folders}`)
        for (const files of commandsFiles) {
            if (!files.endsWith('.js')) return;
            const command = require(`../commands/${folders}/${files}`)

            commandsArray.push(command)

            client.commands.set(command.name, command)
        }
    }

    client.once('ready', () => {
        console.log(`${commandsFolders} Está funcionando corretamente.`)
        client.guilds.cache.forEach((guild) => {
            guild.commands.set(commandsArray)
        })
    })
}