var express = require("express");
var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", function(request, response)
{});

router.post("/api/burger", function(request, response)
{});

router.put("/api/burger/:id", function(request, response)
{});

module.exports = router;