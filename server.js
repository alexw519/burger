//Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

//Setting Up Port
var app = express();
var PORT = process.env.PORT || 5000;

//Middlewear
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setting Up Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Connecting To The Controller
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//Starting The Server
app.listen(PORT, function()
{
    console.log("Listening on port " + PORT + "...");
})