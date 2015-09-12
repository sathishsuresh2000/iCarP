module.exports={
    failureStatus :{
        code:400,
        message:"Insufficient information"
    },
    successStatus:{
        code:200,
        message:"Request processed successfully"
    },
    errorStatus :{
        code:500,
        message:"Failed to proccess the request"
    },
    sendResponse:function(res,status,object,err){
        res.status(status.code);
        if(object){
            res.json(object);
            res.send(status.message);
        }
        else if(err){
            res.send(status.message+"\n"+err);
        }
    }
};