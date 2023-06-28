const mongoose=require("mongoose");

const DB=process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("DB connected successfully");
}).catch(()=>{
    console.log("DB connection failed");
});