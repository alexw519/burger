//Dependencies
var express = require("express");
var exphbr = require("express-handlebars");
var mysql = require("mysql");

//Setting Up Port And Handlebars
var app = express();
var PORT = proecess.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Setting Up mySQL Connection
var connection = mysql.createConnection(
    {
        host: "127.0.0.1",
        port: 3306,
        username: "root",
        password: "",
        database: "burgers_db"
    })

connection.connect(function(error)
{
    if (error) throw error;
    console.log("Connection Successful!");
})

app.get("/", function()
{
    console.log("Getting Info");
})

app.post("/", function()
{})

app.listen(PORT, function()
{
    console.log("Listening on port " + PORT + "...");
})