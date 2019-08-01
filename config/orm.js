var connection = require("./connection.js");

var orm =
{
    all: function(input, callBack)
    {
        var queryString = "select * from " + input + ";";
        connection.query(queryString , function (error, data)
        {
            if (error) throw error;
            callBack(data);
        })
    },
    create: function(table, cols, vals, callBack)
    {
        var queryString = "insert into " + table + "(" + cols + ") values (?)";
        connection.query(queryString, [vals], function(error, data)
        {
            if (error) throw error;
            callBack(data);
        })
    },
    update: function(table, cols, condition, callBack)
    {
        var queryString = "update " + table + " set " + cols + " = true where id = " + condition;
        connection.query(queryString, function(error, data)
        {
            if (error) throw error;
            callBack(data);
        })
    }
}

module.exports = orm;