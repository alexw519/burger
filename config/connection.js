//Dependicies
var mysql = require("mysql");

var connection;

//Setting Up mySQL Connection
if(process.env.JAWSDB_URL)
{
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}

else
{
    connection = mysql.createConnection(
    {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    })
}

//Connecting To The Database
connection.connect(function(error)
{
    if (error) throw error;
    console.log("Connection Successful!");
})

module.exports = connection;