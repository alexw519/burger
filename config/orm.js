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
            console.log("-------------------------------------\norm.js file");
            console.log(data);
            console.log("-------------------------------------\n")
        })
    }
}




module.exports = orm;