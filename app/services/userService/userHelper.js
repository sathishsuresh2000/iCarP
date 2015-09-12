var dataAccess =require("../../dataAccess").getInstance(),
    userConstants=require("./userConstants");
var _instance;
function UserHelper(){};
UserHelper.protyotype.checkIfUserExist = function(userObject){
  var query ={};
    query.userId=userObject.userId;
    return dataAccess.findDocument(userConstants.userCollection,query)
        .then(function(object){
            if(object){
                return true;
            }
            else{
                return false;
            }
        });
};