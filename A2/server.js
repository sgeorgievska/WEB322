/*********************************************************************************
* WEB322 – Assignment 02
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
* of this assignment has been copied manually or electronically from any other source
* (including 3rd party web sites) or distributed to other students.
*
* Name: Stefani Georgievska Student ID: 121204150 Date: 02/01/2019
*
* Online (Heroku) Link: https://fierce-dawn-92226.herokuapp.com/
*
********************************************************************************/ 
var dataservice = require("data-service.js");

var express = require("express");
var app = express();
var path = require("path");

var HTTP_PORT = process.env.PORT || 8080;

function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.static('public'));

//routes
app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname,"/views/home.html"));
});

app.get("/about",function(req,res) {
    res.sendFile(path.join(__dirname,"/views/about.html"));
});

app.get("/employees", function(req,res) {
    if (req.query.status) {
        dataservice.getAllEmployees().then(function(data){
            res.json(data);
        }).catch(function(err){
            res.json({message:err});
        });
    }
});

app.get("/managers", function(req,res){
    dataservice.getManagers().then(function(data){
        res.json(data);
    }).catch(function(err){
        res.json({message:err});
    });
});

app.get("/departments", function(req,res){
    dataservice.getDepartments().then(function(data){
        res.json(data);
    }).catch(function(err){
        res.json({message:err});
    });
});

app.get(function(req,res) {
    res.status(404).send("Page Not Found");
});

if (initialize()=resolve) {
    app.listen(HTTP_PORT, onHttpStart);
};
