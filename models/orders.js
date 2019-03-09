const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/E-commerce')
        .then(result=> console.log('connected to mongo db',result))
        .catch(error =>console.log('connection failed while conecting to server',error));
           
const Orders=mongoose.model('orders',new mongoose.Schema({

    user:{
        name:String,
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    product:{
        name:String,
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"

    }

}));
module.exports.Orders=Orders;