const bcrypt=require('bcrypt');
async function load(){
    const salt=await bcrypt.genSalt(1);
   
    const hashed=await bcrypt.hash('komal',salt)
    console.log(salt);
    console.log(hashed);
}
load();

