const path = require("path");

const express = require("express");

const rootDir = require('../utils/path')

const routerIndex = express.Router()

routerIndex.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','index.html'))
})

module.exports = routerIndex