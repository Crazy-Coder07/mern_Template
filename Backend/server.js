const express=require("express")
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const jwt=require("jsonwebtoken");
const cors = require('cors');


app.use(cors());
// path of .env file
dotenv.config({path:'./.env'});
const PORT=process.env.PORT;

// The line require('./db/connection'); is used to import or include the contents of the
//  connection.js file located in the ./db directory. it is a method in node.js
require('./db/connection');

// accessing the collection from the database
const User=require('./model/userSchema');

// converted the json data into object when data send throught post() method
app.use(express.json());

// to accessing all the backend route we use middleware here
app.use(require('./router/auth'));

// middleware
const logger=(req,res,next)=>{
    // here we can apply some logic that if user is not logged in 
    // then he cant access /about page and redirect to the login page
    console.log("HEllo my middleware");
    next();
    // if we not write next() then it is still loading for infinite time
}

// these are the backend routes that run on localhost:5000/ not frontend
// if we want to send the data from frontend route to databse 
// then will first send to backend route and then backendroute to databse

app.get('/',(req,res)=>{
    res.send("hello world from the server")
})
app.get('/about',logger,(req,res)=>{
    res.send("hello about from the server")
})
app.get('/contact',(req,res)=>{
    res.send("hello contact from the server")
})
app.get('/signin',(req,res)=>{
    res.send("hello singin from the server")
})
app.get('/signup',(req,res)=>{
    res.send("hello singup from the server")
})

app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})