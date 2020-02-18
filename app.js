const express = require("express")
const app = express();

app.get("/", function(req, res){
    res.send("hi, there");
});

app.get("/bye", function(req, res){
    res.send("Bye, friend");
})

app.get("/dog", function(req, res){
    res.send("Wang Wang");
})

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    console.log("server has been start");
})