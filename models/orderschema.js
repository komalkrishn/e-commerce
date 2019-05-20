 const mongoose=require('mongoose');
 const Joi=require('joi'); 

 const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required :true
        },
    product:{ 
        type : mongoose.Schema.Types.ObjectId,
        ref : "products",
        required : true
    }
}); 
const Orders= mongoose.model('order', orderSchema);

module.exports.Orders=Orders;
