var dataAccess = require("../../dataAccess").getInstance(),
  messageConstants = require ("../../messageConstants");
var _instance;

var UserHelper = function () {
};

UserHelper.prototype.checkIfUserExist = function (userObject) {
  var query = {};
  query.userId = userObject.userId;
  return dataAccess.findDocument(messageConstants.collections.users, query)
    .then(function (object) {
      return object && object.length > 0 ? true : false;
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