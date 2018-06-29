var express = require("express");

var app = express();

app.get("/about",(req,res)=>{

res.render("a1.ejs");

})
