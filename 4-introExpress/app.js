// const http = require('http'); // Importa o módulo HTTP para criar um servidor
// const fs = require('fs'); // Importa o módulo de sistema de arquivos para trabalhar com arquivos
//importa o express
const express = require("express");

//criando uma express aplication
const app = express();
//#primeiro middleware
// app.use((req,res, next) => {
//     console.log('in the middleware');
//     next(); // permite que a requisicao vá para o próximo middleware
// })
//só envie next se não quiser enviar uma resposta ao servidor

app.use("/", (req, res, next) => {
  console.log("this always works");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Add product page</h1>");
});

//#segundo middleware
app.use((req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Hello from express!</h1>");
});
// // Cria o servidor HTTP
// const server = http.createServer(app)

// // Faz o servidor ouvir na porta 3000
// server.listen(3000);
app.listen(3000);
