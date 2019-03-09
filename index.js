const express=require('express');
const app = express();
const mongoose=require('mongoose');
const config=require('config');
//const bodyparser=require('body-parser');
//const Joi=require('joi');
const productrouter=require('./routes/product');
const userrouter= require('./routes/user');
const auth=require('./routes/auth');
// if(!config.get('jwtPrivatekey')){
//     console.error('fatal error')
//     process.exit(1);
// }

 
mongoose.connect('mongodb://localhost/e-commerce')
         .then(()=>console.log('connecting to mongo db'))
         .catch((err)=>console.log('connection failed while connecting',err));


        
         app.use(express.json());
         //app.use(bodyparser.json());

         app.use('/api',productrouter);
         app.use('/api',userrouter);
         app.use('/api/auth',auth);
         

         const port = process.env.ECBPORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));