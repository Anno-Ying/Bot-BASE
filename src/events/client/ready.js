const fs = require('fs');
const LoadArray = []

module.exports = {
    name: 'ready',
    once: true,
    run: async (client) => {
        const handlersFiles = fs.readdirSync("./src/handlers")
        for(const files of handlersFiles){
            LoadArray.push(files)
        }
        console.log(`${LoadArray.join(", ")}
        Main.js || Está funcionando corretamente
        
                 🖐 Olá, Mundo!  `)
    }
}