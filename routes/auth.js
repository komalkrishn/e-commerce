const authentication=require('../middlewares/authentication')
const express=require('express');
const bcrypt=require('bcrypt');
const _=require('lodash');
const router=express();
const monoose=require('mongoose');
const jwt=require('jsonwebtoken');
const Joi=require('joi');
const config=require('config');
const{User}=require('../models/userSchema');


router.get('/me',authentication,async(req,res)=>{
    const user=await User.findById(req.user._id).select('-password');//to exclude the password
    res.send(user);
});


router.post('/',async (req,res)=>{

   const result=validate(req.body); //this is one validate function
    if(result.error) return res.status(400).send(result.error.details[0].message);


     let user= await User.findOne({email:req.body.email});//here we are looking for user email or password
     if(!user) return res.status(400).send('invalid email or password');

    
      const validatePassword=await bcrypt.compare(req.body.password,user.password);
       if(!validatePassword) return res.status(400).send('invalid email or password');

    //   user=new User(_.pick(req.body,['name','email','password']));
    //   const salt=await bcrypt.genSalt(10);
    //  user.password=await bcrypt.hash(user.password,salt)
    //  await user.save();
    //  const token=user.generateAuthToken();
     
    //  res.header("x-auth-token",token)
    const token=user.generateAuthToken();
         res.send(token);

         //user =new User(_.pick(req.body),['name'],'email')
    

});

function validate(req){ //this is another new user validate function we are validating only email and password
    const schema={
        email:Joi.string().min(5).max(250).required().email(),
        password:Joi.string().min(5).max(250).required(),
    }
    return Joi.validate(req,schema);
};
module.exports=router;