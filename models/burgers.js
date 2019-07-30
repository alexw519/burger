var orm = require("../config/orm.js");

var burger =
{
    all: function(callBack)
    {
        orm.all("burgers", function(response)
        {   callBack(response); });
        console.log("\n-------------------------------------\nburgers.js File\n-------------------------------------\n")
    }
};

module.exports = burger;