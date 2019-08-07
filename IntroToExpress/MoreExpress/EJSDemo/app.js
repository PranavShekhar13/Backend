var express = require("express");
var app= express();

app.get("/",function(req,res){
    res.render("home.ejs");
});
app.get("/fallinlovewith/:thing",function(req,res){
    var thing = req.params.thing;
   res.render("love.ejs", {thingVar: thing});
});

app.get("/posts",function(req,res){
    var posts =[{tittle:"Post1", author:"Susy"},
                {tittle:"My adorable pet bunny", author:"Charlie"},
                {tittle:"Can you believe it Pomsky?", author:"Colt"}
        
       ];
        res.render("posts.ejs",{postVar: posts});
});

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("Server has Started!!"); 
});