var express=require("express"),
    app=express(),
    bodyParser=require('body-parser'),
    http=require("http");
var userController=require("./businessLogicLayer/userInfo").getInstance();


var server=http.createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.get("/",function(req,res,next){
    res.send("Hello World....");
});
app.post("/v1/user/new",userController.addUser);

server.listen(3000);





