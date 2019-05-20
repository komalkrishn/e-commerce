const express = require('express');
const router=express();
const mongoose=require(`mongoose`);
const _ = require('lodash');
const {Orders} = require('../models/orderschema');
const {User}=require('../models/userSchema');
const {Product}=require('../models/productSchema');

router.post(`/`,async(req,res)=>{

    const user = await User.findById(req.body.user);
   if(!user){
      return res.status(404).json({message :'User is not found'});
  }
    const product =  await Product.findById(req.body.product);
    if(!product){
        return res.status(404).json({message :'Product is not found'});
    }
 

    //creating new order
     const order= await new Orders({
       user: req.body.user,
       product: req.body.product
     })
     
     await order.save();
    
     res.send(order);
  });
  router.get("/:user_id" ,async(req,res) =>{
    const id=req.params.user_id;
     Orders.find(_id => User.product===Orders )
          
                 .then(result=>{
                 res.status(200).json(result)
                })
        
            .catch(err =>{
                res.status(500).json({error :err});
                });

    //  const user=await Orders.findById({_id:id}); 
    // res.status(200).send(user);
        
 })
    
module.exports=router;