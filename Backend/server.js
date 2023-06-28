const express=require("express")
const app=express();

// middleware
const logger=(req,res,next)=>{
    // here we can apply some logic that if user is not logged in 
    // then he cant access /about page and redirect to the login page
    console.log("HEllo my middleware");
    next();
    // if we not write next() then it is still loading for infinite time
}

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

app.listen(5000,()=>{
    console.log("server is running on the port 5000")
})