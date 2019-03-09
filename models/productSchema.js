const mongoose=require('mongoose');
const Joi=require('joi');

const Product= mongoose.model('products',new mongoose.Schema({

    name:{
        type:String,
        minlength:5,
        maxlength:250,
        required:true,
        },
        price:{
            type:Number,
            minlength:5,
            maxlength:250,
            required:true,

        },
        description:{

            type:String,
            minlength:5,
            maxlength:250,
            required:true,
          },
          category:{
              type:String,
              enum:["men","women","kids"],
              required:true,

          },
          quantity:{
              type:Number
          },

}));
function validateProd(productvalid){

    const schema={
        name : Joi.string(). min(5).max(250).required(),
        price : Joi.number().min(5).max(2500).required(),
        description: Joi.string().min(5).max(250).required(),
        category:Joi.string().required(),
        quantity:Joi.number().required()
    }
    return Joi.validate(productvalid,schema);
    }

exports.Product=Product;
exports.validate=validateProd;