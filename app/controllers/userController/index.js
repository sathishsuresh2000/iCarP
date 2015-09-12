var userService = require("../services/userService").getInstance(),
    userHelper=require("./userHelper").getInstance(),
    responseHelper=require("../responseHelper");
var _instance;
function UserController(){};

UserController.prototype.createUser=function(req,res){
    if(userHelper.isValidUserObject(req)){
        req.body.active =true;
        userService.addUser(req.body)
            .then(function(userObject){
                responseHelper.sendResponse(res,responseHelper.successStatus,userObject);
            })
            .fail(function(err){
                responseHelper.sendResponse(res,responseHelper.errorStatus,null,err);
            })
            .done();
    }
    else{
        responseHelper.sendResponse(res,responseHelper.failureStatus);
    }
};

UserController.prototype.updateUser=function(req,res){
    if(userHelper.isValidUserObject(req)){
        userService.updateUser(req.body)
            .then(function(userObject){
                responseHelper.sendResponse(res,responseHelper.successStatus,userObject);
            })
            .fail(function(err){
                responseHelper.sendResponse(res,responseHelper.errorStatus,null,err);
            })
            .done();
    }
    else{
        responseHelper.sendResponse(res,responseHelper.failureStatus);
    }
};

module.exports = {
    getInstance: function () {
        if (!_instance) {
            _instance = new UserController();
        }
        return _instance;
    }
};