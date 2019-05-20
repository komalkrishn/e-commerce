function error(err,req,res,next){
    console.log('some internal error');
    res.status(500).send("some error occured");
    //response errors in all routes in the products
}
module.exports=error;