 const express=require('express');
 const router=express();
 //const joi=require('joi')
 const _=require('lodash');
 //const mongoose=require('mongoose');
 const {Employer,validate}=require('../models/employer');

 //getting all employee details by passing _id 
 router.get('/employers/:id',async(req,res)=>{

    const id=req.params.id;

    const employer=await Employer.findById({_id:id});
    // if(!employer) return res.status(201).send('employer id is not available');
    res.send(employer);
 })

 //creating employer details
router.post('/',(req,res)=>{

    const result=validate(req.body);
    if(!result) return res.status(400).send(result.error.details[0].message);
   
    const employer= new Employer(_.pick(req.body,['name','designation','email','address','phone']));
     employer.save();
    res.send(employer);
   // res.send(_.pick(employer,['name','designation','email','address']));
   });
   ///updating the employee details
   router.put('/employer/:id',async(req,res)=>{
       const id=req.params.id;
       const employer=await Employer.update({_id:id},{
           $set:{
               name:'bobby',
               address:"rue de berry",
           }
       });
       res.send(employer);
   })
module.exports=router;



