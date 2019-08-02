var orm = require("../config/orm.js");

//Every Function Calls The Same Function, But In The orm.js File
var burger =
{
    all: function(callBack)
    {
        orm.all("burgers", function(response)
        {   callBack(response); });
    },
    create: function(cols, vals, callBack)
    {
        orm.create("burgers", cols, vals, function(response)
        {   callBack(response); })
    },
    update: function(cols, condition, callBack)
    {
        orm.update("burgers", cols, condition, function(response)
        {   callBack(response); })
    }
};

module.exports = burger;