const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");
const routerUser = express.Router();

routerUser.get("/users", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

module.exports = routerUser;
