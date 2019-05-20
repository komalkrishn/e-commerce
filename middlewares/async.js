module.exports=function(handler){
    return async(req,res,next)=>{
        try{
            await handler(req,res);
        }
        catch(err){
            console.log('some internal error');
    res.status(500).send("some error occured");
            next(err);
        }
    }
}