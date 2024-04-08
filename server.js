// console.log(" hello ");
// console.log("hii")
// (function(){
//      console.log("hello this is a function")
// })();
// var fs=require('fs');
// var os=require('os');

// var user = os.userInfo();
// console.log(user)
// console.log(user.username)

// fs.appendFile('greeting.txt','HI' + user.username + '!\n', ()=>{
//      console.log('file is created');
// })

// const notes= require('./notes')
// console.log('server is availble')
// console.log(notes.age)

const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome to the server Page");
});

// app.get('/hello', function (req, res) {
//   res.send('Welcome to the hello Page')
// });
// app.get('/anime', (req, res)=> {
//      var customized_anime = {
//           name:'naruto' ,
//           character:'nezuko',
//           episode:'100'

//      }
//   res.send(customized_anime)
// })

// Import the router files
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");

// use the routers
app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

app.listen(3000, () => {
  console.log("Hello server is running");
});
