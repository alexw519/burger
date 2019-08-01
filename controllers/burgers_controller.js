var express = require("express");
var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", function(request, response)
{
    burger.all(function(data)
    {
        var burgerObject =
        {   burgers: data   };
        response.render("index", burgerObject);
    })
});

router.post("/api/burger", function(request, response)
{
    burger.create("burger_name", request.body.burger_name, function(data){})
});

router.put("/api/burger/:id", function(request, response)
{
    var conditon = request.params.id;
    burger.update("devoured", conditon, function(data)
    {
        if (data.changedRows == 0)
            return response.status(404);
        else
            return response.status(200).end();
    })
});

module.exports = router;