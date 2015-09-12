var userService = require("../services/userService").getInstance();
var _instance;
function UserHelper(){};
UserHelper.prototype.isValidUserObject=function(req){
    if(!req.body){
        return false;
    }
    if(!req.body.userId || !req.body.userName || !req.body.visibleTo){
        return false;
    }
    return true;
};
module.exports = {
    getInstance: function () {
        if (!_instance) {
            _instance = new UserHelper();
        }
        return _instance;
    }
};