var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

app.get("/", (reg, res) => {
    res.send("Stefani Georgievska - 121204150 :)");
});

app.listen(HTTP_PORT);