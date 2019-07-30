var express = require("express");
var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", function(request, response)
{
    burger.all(function(data)
    {
        var burgerObject =
        {
            burgers: data
        };
        console.log(burgerObject);
        response.render("index", burgerObject);
    })
    console.log("-------------------------------------\nburgers_controllers.js file\n-------------------------------------\n");
});

router.post("/api/burger", function(request, response)
{});

router.put("/api/burger/:id", function(request, response)
{});

module.exports = router;