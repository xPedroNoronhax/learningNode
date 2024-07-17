const express = require("express");

const router = express.Router(); // funcao de roteamento no express

const users = []; // araray de inicializacao dos users

router.get("/add-user", (req, res, next) => { //realizmos um get em /add-user
  res.render("add-user"); //rendereizamos add-user.ejs
});

router.post("/add-user", (req, res, next) => { //faz com que no input que esta em add-usr
  users.push({ name: req.body.name }); //seja feito um push do conteudo dentro do input
  console.log(users);
  res.redirect("/"); //apos o push, direciona para users
});

exports.routes = router;
exports.users = users;
