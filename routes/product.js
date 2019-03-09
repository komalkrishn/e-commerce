const authentication=require('../middlewares/authentication');
const admin=require('../middlewares/admin');
const express=require('express');
const mongoose=require('mongoose');
const router= express();
const Joi=require('joi');
//const router=express.Router();

const {Product,validate}=require('../models/productSchema');

router.delete('/:id',[authentication,admin],async(req,res)=>{
    const products=await Product.findByIdAndRemove(req.params.id);
    if(!products) return res.status(400).send('the product with given id is not found');
    res.send(products);

})

router.get('/product',(req,res)=>{

    Product.find()
            .then(result =>res.status(200).json(result));
})


router.post('/products',(req,res)=>{

    const result =validate(req.body);
   if(result.error)  return res.status(400).send(result.error.details[0].message);
     const product=new Product({
       
        name: req.body.name,
        price :req.body.price,
        description : req.body.description,
        category:req.body.category,
        quantity:req.body.quantity,
     });
    product.save();
    res.send(product);
           });

           router.put('/products/:productid',async (req,res)=>{
            const id=req.params.productid;
            Product.update({_id:id},{  //here _id:id means we can get the course with this
                $set:{
                    name:'apple'
                },
            })
                     .then(result=>{res.status(200).json({message:'updated'});
                     });
                //    await product.save();
                //    res.send(product);
                 });

                router.delete('/product/:productid',(req,res)=>{
                    const id=req.params.id;
                    Product.remove({_id:id})
                            .then(result=>{res.status(200).json({error:err})});

                });

        
           module.exports=router;