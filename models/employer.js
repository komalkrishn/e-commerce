const mongoose=require('mongoose');
const Joi=require('joi');

const employerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:4,
        maxlength:60
    },
    designation:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    }

});
const Employer=mongoose.model('employer',employerSchema);

function validateEmployer(validating){

    const schema={
        name:Joi.string().min(4).max(60).required(),
        designation:Joi.string().required(),
        email:Joi.string().required(),
        phone:Joi.number().required(),
    }
    return Joi.validate(validating,schema);

}
exports.Employer=Employer;
exports.validate=validateEmployer;   