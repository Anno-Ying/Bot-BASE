const fs = require('fs');
const { eventNames } = require('process');
const eventsArray = [] 

module.exports = (client) => {
    const eventsFolders = fs.readdirSync('./src/events');
    for (const folders of eventsFolders) {
        const eventsFiles = fs.readdirSync(`./src/events/${folders}`)
        for (const files of eventsFiles) {
            if (!files.endsWith('.js')) return;

            const event = require(`../events/${folders}/${files}`)
            eventsArray.push(event.name)

            if (event.once) {
                client.once(event.name, (...args) => event.run(...args, client))
            } else {
                client.on(event.name, (...args) => event.run(...args, client))
            }
    }}
    client.once('ready', () => {
        console.log(`${eventsArray.join(", ")} Está funcionando corretamente.`)
    })
}