var dataAccess =require("../../dataAccess").getInstance(),
    userHelper=require("./userHelper").getInstance(),
    userConstants=require("./userConstants");
var _instance;
function UserService(){};
UserService.prototype.addUser = function(userObject){
    var defer = q.defer();
userHelper.checkIfUserExist(userObject)
    .then(function(isExist){
        if(isExist){
            defer.reject(isExist);
        }
        else{
            defer.resolve(dataAccess.saveDocument(userConstants.userCollection,userObject));
        }
    });
    return defer.promise;
};
UserService.prototype.updateUser=function(userObject){
    var query ={};
    query.userId =userObject.userId;
return dataAccess.findDocument(userConstants.userCollection,query)
    .then(function(existingUser){
        if(existingUser){
            existingUser.userName =userObject.userName;
            existingUser.visibleTo =userObject.visibleTo;
        }
        else{
            existingUser=userObject;
        }
        return dataAccess.saveDocument(userConstants.userCollection,existingUser);
    });
};

module.exports = {
    getInstance: function () {
        if (!_instance) {
            _instance = new UserService();
        }
        return _instance;
    }
};