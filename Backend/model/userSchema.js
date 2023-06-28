const mongoose=require("mongoose");

// creating structure of document
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
})

// adding document into the collection. i.e User is collection here
const User=mongoose.model('USER',userSchema);

// exporting the collection so that will use it in any file
module.exports=User;

 