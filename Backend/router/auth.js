 const express=require("express");
 const router=express.Router(); 

 require('../db/connection');
 const User=require("../model/userSchema");

 router.get('/',(req,res)=>{
    res.send("hello world from the server")
});

 router.post('/register',async (req,res)=>{
    //  console.log(req.body);  // data=req.body
    //  res.json({message:req.body});

   const {name,email,phone,work,password,cpassword}=req.body;

   //  if any value are empty then it give error  
   if(!name||!email||!phone||!work||!password||!cpassword){
        return res.status(422).json({error:"please fill all the required field"});
   }

//    if user already exists then show erroruser exists(by using unique email) 
//  {email:email} first email is from database and second email is from localhost:5000/register backend(server)
   try{
       const userExist=await User.findOne({email:email});
       if(userExist){
            return res.status(422).json({error:"Email Already Exist"});
       }
       const user=new User({name,email,phone,work,password,cpassword});
       await user.save();

       res.status(201).json({message:"user Registered successfully"});
   }catch(err){
       console.log("user register failed",err);
   }

 })
module.exports=router;
