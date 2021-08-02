var express = require("express");
var exphbs = require("express-handlebars");
const path = require("path");
var app = express();
var indexRoute = require("./controllers/index");

const publicPath = path.join(__dirname, "public");

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "index",
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res, next) => {
  res.render("main");
});
app.use("/", express.static(publicPath));
// app.use("/", indexRoute);

//listening on port 3000
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

module.exports = app;
