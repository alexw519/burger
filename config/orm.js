//Bringing In The Info For The Connection As A Dependecy
var connection = require("./connection.js");

var orm =
{
    //Function To Display All OF The Burgers
    all: function(input, callBack)
    {
        //SQL Statement And Call, And Sends Back The Data In The Callback Function
        var queryString = "select * from " + input + ";";
        connection.query(queryString , function (error, data)
        {
            if (error) throw error;
            callBack(data);
        })
    },
    //Function To Create A Burger
    create: function(table, cols, vals, callBack)
    {
        //SQL Statement And Call, And Sends Back The Data In The Callback Function
        var queryString = "insert into " + table + "(" + cols + ") values (?)";
        connection.query(queryString, [vals], function(error, data)
        {
            if (error) throw error;
            callBack(data);
        })
    },
    //Function To Update A Burger
    update: function(table, cols, condition, callBack)
    {
        //SQL Statement And Call, And Sends Back The Data In The Callback Function
        var queryString = "update " + table + " set " + cols + " = true where id = " + condition;
        connection.query(queryString, function(error, data)
        {
            if (error) throw error;
            callBack(data);
        })
    }
}

module.exports = orm;