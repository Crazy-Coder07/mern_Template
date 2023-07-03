 const express=require("express");
 const router=express.Router(); 
 const bcrypt=require("bcryptjs");
 const authenticate=require("../middleware/authenticate")
 const jwt=require('jsonwebtoken');
 const cookieParser=require("cookie-parser");

 router.use(cookieParser());

 require('../db/connection');
 const User=require("../model/userSchema");

 router.get('/',(req,res)=>{
    res.send("hello world from the server")
});


//  sending data from backend to DB
 router.post('/register',async (req,res)=>{
    //  console.log(req.body);  // data=req.body
    //  res.json({message:req.body});

   const {name,email,phone,work,password,cpassword}=req.body;

   //  if any value are empty then it give error  
   if(!name||!email||!phone||!work||!password||!cpassword){
        return res.status(422).json({error:"please fill all the required field"});
   }

   // if user already exists then show erroruser exists(by using unique email) 
   // {email:email} first email is from database and second email is from localhost:5000/register backend(server)
   try{
       const userExist=await User.findOne({email:email});
       if(userExist){
            return res.status(422).json({error:"Email Already Exist"});
       
        }else if(password!==cpassword){
         return res.status(422).json({error:"password are wrong"});
       
        }else{
           const user=new User({name,email,phone,work,password,cpassword});
          // before saving the data into the database we will hash the password and cpassword(using middleware)
           await user.save();
    
           res.status(201).json({message:"user Registered successfully"});
       }
    }catch(err){
           console.log("user register failed",err);
       }
 })


//  send data from login(now suppose our data at backend localhost:5000/login) page to db
// but when we create UI then first will send to backend and then backend to DB
router.post('/signin',async (req,res)=>{
    try{
        let token;
       const {email,password}=req.body;
       if(!email||!password){
           return res.status(400).json({error:"please fill the required field"})
       }
      //   here userLogin are document of collection in DB 
       const userLogin=await User.findOne({email:email});

       if(userLogin){ 
           const isMatch=await bcrypt.compareSync(password,userLogin.password);
           token=await userLogin.generateAuthToken();
           console.log(token);

           res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+25892000000),
            httpOnly:true
           });

           if(isMatch){
                 res.status(201).json({message:"user Signin successfully"})
           }else{
                res.status(400).json({error:"INVALID_CREDENTIAL"})  
           }
       }else{
            res.status(400).json({error:"user not login"})
       }
    }catch(err){
        console.log("Error",err);
    }
})

// here we sended data from DB to backend localhost:5000/contact in json format
// and above two we send from backend to DB
// router.get('/contact',async (req,res)=>{
//     try{
//       const alluser=await User.find({});
//       return res.status(201).json({alluser});
//     }catch(err){
//         console.log(err);
//     }
// })

// now we want to open this page only when user are logged in completely using the token
// here we use the authenticate middleware to check whether use are login or not using token 
router.get('/about',authenticate,(req,res)=>{
    res.send(req.rootUser);
    console.log("Hello from the about pages")
})
// if user is login then we send the responese
router.get('/contact',authenticate,(req,res)=>{
    res.send(req.rootUser);
    console.log("Hello from the contact pages")
})



// overall in this we learn to send the data from backend to DB(using post()) and also from DB to backend(using get())

module.exports=router;
