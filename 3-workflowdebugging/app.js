const http = require('http'); // Importa o módulo HTTP para criar um servidor
// const fs = require('fs'); // Importa o módulo de sistema de arquivos para trabalhar com arquivos

const {handler,someText} = require('./routes')

console.log(someText);
// Cria o servidor HTTP
const server = http.createServer(handler)

// Faz o servidor ouvir na porta 3000
server.listen(3000);
