const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");

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
    phone:{
        type:Number,
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

// hash the password before saving into DB
userSchema.pre('save',async function (next){
    if(this.isModified('password')){
        this.password=await bcrypt.hashSync(this.password,12);
        this.cpassword=await bcrypt.hashSync(this.cpassword,12);
    }
    next();
})



// adding document into the collection. i.e User is collection here
const User=mongoose.model('USER',userSchema);

// exporting the collection so that will use it in any file
module.exports=User;

 