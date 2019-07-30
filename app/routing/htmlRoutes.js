var express = require("express");
var path = require("path");

module.exports = function(app) {

   
    app.get("/survey", function (req,res) {
        res.sendFile(path.join(_dirname + "/../public/survey.html"));
    });

    app.get(function (req,res) {
        res.sendFile(path.join(_dirname + "/../public/home.html"));
    });
    
};