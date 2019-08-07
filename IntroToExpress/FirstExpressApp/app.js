var express = require("express");

var app = express();

// "/" ==> "Hi there!"
app.get("/",function(req,res){
   res.send("Hi there!"); 
});

//"/bye" ==> "Goodbye"
app.get("/bye",function(req,res){
   res.send("Goodbye"); 
});

//"/dog" ==> "MEOWW"
app.get("/dog", function(req,res){
    console.log("Someone made a request to /dog");
   res.send("MeoWW"); 
});

//Route Parameters
app.get("/r/:subRedditName",function(req, res) {
    var subReddit = req.params.subRedditName;
   res.send("WELCOME TO THE "+ subReddit.toUpperCase() +" SUBREDDIT"); 
});

app.get("/r/:subRedditName/comments/:id/:tittle/",function(req, res) {
    console.log(req.params);
   res.send("Welcome to the Comments Page"); 
});







app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has Started");
});
