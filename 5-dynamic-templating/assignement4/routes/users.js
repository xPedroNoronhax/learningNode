const express = require("express");

const usersData = require("./add-user");

const router = express.Router();

router.get("/", (req, res, next) => {
  const users = usersData.users;
  res.render("users", { users: users });
});

module.exports = router;
