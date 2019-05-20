const bcrypt=require('bcrypt');
async function load(){
    // try{
    
    const salt=await bcrypt.genSalt(1);
   
    const hashed=await bcrypt.hash('komal',salt)
    console.log(salt);
    console.log(hashed);
    // }
    // catch(err){
    //     console.log('not adding the string will get an error',err.message);

    // }
};


load();

