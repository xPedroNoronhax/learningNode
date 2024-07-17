const express = require("express");
const router = express.Router();

const userData = require("./add-user"); // requisita os dados de add-user.js pois la tem o array de users

router.get("/", (req, res, next) => {
  const users = userData.users; // traz os users dentro do array de users
  res.render("users", { users: users }); //renderiza o users.ejs
});

module.exports = router;
