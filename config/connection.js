//Dependicies
var mysql = require("mysql");

//Setting Up mySQL Connection
var connection = mysql.createConnection(
    {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "Yumewaryuusei27!",
        database: "burgers_db"
    })

connection.connect(function(error)
{
    if (error) throw error;
    console.log("Connection Successful!");
})

module.exports = connection;