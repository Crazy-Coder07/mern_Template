const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");


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
    },
    tokens:[
         {
            token:{
                type:String,
                required:true
            }
         }
    ]
})

// hash the password before saving into DB
userSchema.pre('save',async function (next){
    if(this.isModified('password')){
        this.password=await bcrypt.hashSync(this.password,12);
        this.cpassword=await bcrypt.hashSync(this.cpassword,12);
    }
    next();
})

// we are generating the token
userSchema.methods.generateAuthToken=async function(){
    try{
        // here _id is from DB and this._id is from when user login
        // if both _id and this._id are same then it will generate a token and add in userSchema field
        let token=jwt.sign({_id:this._id},process.env.JWT_SECRET_KEY);
        // we are adding the tokenAditya into the our collection in DB
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}


// adding document into the collection. i.e User is collection here
const User=mongoose.model('USER',userSchema);

// exporting the collection so that will use it in any file
module.exports=User;

 