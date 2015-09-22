var q = require("q");
var dataAccess = require("../../dataAccess").getInstance(),
  userHelper = require("./userHelper").getInstance(),
  userConstants = require("./userConstants"),
  messageConstants = require("../../messageConstants");
var _instance;
var UserService = function () {
};
UserService.prototype.addUser = function (userObject) {
  var defer = q.defer();
  userHelper.checkIfUserExist(userObject)
    .then(function (isExist) {
      if (isExist) {
        defer.reject({
          code: messageConstants.httpCodes.conflict,
          message: messageConstants.userMessageConstants.userAlreadyExist
        });
      }
      else {
        defer.resolve(dataAccess.saveDocument(userConstants.userCollection, userObject));
      }
    })
    .fail(function (err) {
      defer.reject({code: messageConstants.httpCodes.internalServerError, message: err.message});
    });

  return defer.promise;
};

UserService.prototype.updateUser = function (userObject) {
  var query = {};
  query.userId = userObject.userId;
  return dataAccess.findDocument(messageConstants.collections.users, query)
    .then(function (existingUser) {
      if (existingUser) {
        existingUser.userName = userObject.userName;
        existingUser.visibleTo = userObject.visibleTo;
      }
      else {
        existingUser = userObject;
      }
      return dataAccess.saveDocument(userConstants.userCollection, existingUser);
    })
    .fail(function (err) {
      defer.reject({code: messageConstants.httpCodes.internalServerError, message: err.message});
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