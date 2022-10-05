/**
 * 
 * 
 *    @example
 *    @author Anno-Ying <GitHub Owners Users.>
 * 
 */

const config = require('./config/settings.json');
const main = 'Main.js';
const LoadCommands = require('./commands')
const LoadEvents = require('./events')

require('dotenv').config()

const { Collection, Client, GatewayIntentBits } = require('discord.js')

const fs = require('fs')

const client = new Client({
    intents: GatewayIntentBits.Guilds
});

client.commands = new Collection()

const handlersFiles = fs.readdirSync('./src/Handlers');
for (const files of handlersFiles) {
    require(`./handlers/${files}`)(client)
}

client.login(process.env.TOKEN) // Para iniciar o bot utilize: node ./src/main.js

