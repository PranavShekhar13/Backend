var express = require("express");

var app= express();

app.get("/",function(req,res){
   res.send("Hi there! Welcome to the Assignment");
});

app.get("/r/speak/:animal",function(req,res){
    var sounds ={
        pig:"Oink!!",
        dog:"Woof Woof!!",
        cow:"Moooohhh!!",
        cat:"I hate you human!!",
        goldfish:"...."
    };
   var anim = req.params.animal.toLowerCase();
    var sound =sounds[anim];
    res.send("The "+anim+" says "+sound);
    
});

app.get("/r/repeat/:message/:count",function(req, res) {
   var mess=req.params.message;
   var coun= Number(req.params.count);
   var result="";
   for(var i=0;i<coun;i++){
       result+=mess+" ";
   }
   res.send(result);
});

app.get("*",function(req, res) {
   res.send("Oops, Sorry Page Not Found!!"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has Started!"); 
});