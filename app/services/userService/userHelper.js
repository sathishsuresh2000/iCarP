var dataAccess = require("../../dataAccess").getInstance(),
  userConstants = require("./userConstants");
var _instance;

var UserHelper = function () {
};

UserHelper.protyotype.checkIfUserExist = function (userObject) {
  var query = {};
  query.userId = userObject.userId;
  return dataAccess.findDocument(userConstants.userCollection, query)
    .then(function (object) {
      if (object) {
        return true;
      }
      else {
        return false;
      }
    });
};
module.exports = {
  getInstance: function () {
    if (!_instance) {
      _instance = new UserHelper();
    }
    return _instance;
  }
};