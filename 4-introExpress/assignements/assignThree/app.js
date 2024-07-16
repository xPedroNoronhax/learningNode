const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
const indexRoutes = require("./routes/index");
const usersRoutes = require("./routes/users");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(indexRoutes);
app.use(usersRoutes)

app.use((req,res,next) =>{
    res.status(404).send('<h1>Page not found!</h1>')
})

app.listen(3000)