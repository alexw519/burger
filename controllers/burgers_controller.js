//Handling The Routing
var express = require("express");
var router = express.Router();

var burger = require("../models/burgers.js");

//On The Root Link, Calls burger.all And Shows All The Burgers
router.get("/", function(request, response)
{
    burger.all(function(data)
    {
        var burgerObject =
        {   burgers: data   };

        //Sends The Burger Object To The index.handlebars File
        response.render("index", burgerObject);
    })
});

//When Post, Adds The Burger Name From The User And Puts It In The Database
router.post("/api/burger", function(request, response)
{
    //Sends The Burger Name And Info To The orm.js File
    burger.create("burger_name", request.body.burger_name, function(data){})
});

//Updates A Burger Based On The ID, And If It's Doesn't Exist Will Print Error
router.put("/api/burger/:id", function(request, response)
{
    var conditon = request.params.id;

    //Sends The Burger Selected And Info To The orm.js File
    burger.update("devoured", conditon, function(data)
    {
        //Since Buttons Are Linked To An ID, This Should Not Happen
        if (data.changedRows == 0)
            return response.status(404);
        else
            return response.status(200).end();
    })
});

module.exports = router;