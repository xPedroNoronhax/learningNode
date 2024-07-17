const express = require("express"); // inicia o express
const bodyParser = require("body-parser"); // inicia o bodyparser

const app = express(); // cria nosso app usando express
app.set("view engine", "ejs");//ativamos nossa view engine e usamos o ejs
app.set("views", "views");  //views sera encontrado na pasta views

const usersData = require("./routes/add-user"); // pegamos nosso middleware de add-user
const usersPage = require("./routes/users"); // middleware de user

app.use(bodyParser.urlencoded({ extended: false })); // utilizamos o bodyparser para conseguir deixar como string 

app.use(usersData.routes); //colocamos no nosso app o add-user
app.use(usersPage); // colocamos no app o users

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found!</h1>"); //caso nao tenha nenhuma pagina com aquela url, exibimos isso
});

app.listen(3000); // porta que sera executado nosso servidor
