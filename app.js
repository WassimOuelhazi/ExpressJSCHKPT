const express = require("express");
const daterequire = require("./views/MiddleWare/date.js");

//init express
const app = express();
app.get("/",daterequire, (req, res) => {
  res.send("<h1>hello world</h1> <a href='home'>click here to start app</a>");
});
//
app.get("/home",daterequire, (req, res) => {
    res.sendFile(__dirname+"/views/home.html");
    
  });
  app.get("/contact",daterequire, (req, res) => {
    res.sendFile(__dirname+"/views/contact.html");
   
  });
  app.get("/services",daterequire,  (req, res) => {
    res.sendFile(__dirname+"/views/services.html");
  
  });

  

//port
app.listen(5000,err=> {
    if (err) {console.log(err)}
else console.log("server is running on http://localhost:5000")
});
