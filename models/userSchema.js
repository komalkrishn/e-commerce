const mongoose=require('mongoose');
const Joi=require('joi');
const jwt=require('jsonwebtoken');
const config=require('config');
const userSchema=new mongoose.Schema({
    name:{
    type:String,
    required:true,
    minlength:5,
    maxlength:250,
},
email:{
    type:String,
    required:true,
    minlength:5,
    maxlength:250,
    unique:true,
},
password:{
    type:String,
    required:true,
    minlength:5,
    maxlength:250,

},
address:{
    type:String,
},
mobile:{
    type:Number
},
isAdmin:{
    type:Boolean,
    default:false,
}
});

userSchema.methods.generateAuthToken=function(){
const token=jwt.sign({_id:this._id,isAdmin:this.isAdmin},config.get("jwtPrivatekey"));
return token;
}
const User=mongoose.model('user',userSchema)
function validateUser(uservalidation){
    const schema={
        name:Joi.string().min(2).max(250).required(),
        email:Joi.string().min(5).max(250).required().email(),
        password:Joi.string().min(5).max(250).required(),
        address:Joi.string().required(),
        mobile:Joi.number().required(),
    }
    return Joi.validate(uservalidation,schema)
}
exports.User=User;
exports.validate=validateUser;
