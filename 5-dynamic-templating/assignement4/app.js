const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const usersData = require("./routes/add-user");
const usersRoutes = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(usersData.routes);
app.use(usersRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(3000);
