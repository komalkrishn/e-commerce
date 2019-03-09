const authentication=require('../middlewares/authentication');
const express=require('express');
const bcrypt=require('bcrypt');
const _=require('lodash');
const router=express();
const jwt=require('jsonwebtoken');
const config=require('config');
const monoose=require('mongoose');
const{User,validate}=require('../models/userSchema');

router.post('/users',authentication,async (req,res)=>{

    const result=validate(req.body);//this validate function is used to validate the new user
    if(result.error) return res.status(400).send(result.error.details[0].message);
     let user= await User.findOne({email:req.body.email});
     if(user) return res.status(400).send('user is already registered');

     user=new User(_.pick(req.body,['name','email','password','address','mobile']));
      const salt=await bcrypt.genSalt(10);
     user.password=await bcrypt.hash(user.password,salt)
    await user.save();

     const token=user.generateAuthToken();
     res.header('x-auth-token',token).send(_.pick(user,['_id','name','email','address','mobile']));
// //here we are returning json web token into an http header
 });
module.exports=router;