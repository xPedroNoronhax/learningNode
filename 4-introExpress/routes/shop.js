const path = require('path')

const express = require("express");

const rootDir = require('../util/path')

const routerShop = express.Router();

routerShop.get("/", (req, res, next) => {
  
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = routerShop;
