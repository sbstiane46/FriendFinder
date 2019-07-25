var express = require("express");
var path = require("path");

module.exports = function(app) {

    app.get("/home", function (req,res) {
        res.sendFile(path.join(_dirname, ".app/public/home.html"));
    });
    app.get("/survey", function (req,res) {
        res.sendFile(path.join(_dirname, ".app/public/survey.html"));
    });
    
};