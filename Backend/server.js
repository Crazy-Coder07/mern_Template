const express=require("express")
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const jwt=require("jsonwebtoken");
const cors = require('cors');
const cookieParser=require("cookie-parser");

app.use(cookieParser());
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



// app.get('/about',(req,res)=>{
//     res.send("hello about from the server")
// })

app.get('/signin',(req,res)=>{
    res.send("hello singin from the server")
})
app.get('/signup',(req,res)=>{
    res.send("hello singup from the server")
})

app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})