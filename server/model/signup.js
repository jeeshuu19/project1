const mongoose=require("mongoose")


const SignupSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true,
        }
    }
)
const SignupMode1=mongoose.model("Signup",SignupSchema);

module.exports=SignupMode1;