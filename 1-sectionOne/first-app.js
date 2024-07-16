//criando um arquivo com node.Js


const fs = require('fs') 
//passa o nome do arquivo e em seguida o conteudo como parametro
fs.writeFileSync('hello.txt', 'Hello from node.js')