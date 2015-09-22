var q = require("q");
var messageConstants = require("../../messageConstants");
var _instance;
var UserHelper = function () {
};
UserHelper.prototype.isValidUserObject = function (req) {
  var defer = q.defer();
  if (!req.body) {
    defer.reject({
      code: messageConstants.httpCodes.badRequest,
      message: messageConstants.userMessageConstants.emptyBody
    });
  }
  else if (!req.body.userId) {
    defer.reject({code: messageConstants.httpCodes.badRequest, message: mes.userMessageConstants.userIdNotPresent});
  }
  else if (!req.body.username) {
    defer.reject({code: messageConstants.httpCodes.badRequest, message: mes.userMessageConstants.usernameNotPresent});
  }
  else {
    defer.resolve();
  }
  return defer.promise;
};
module.exports = {
  getInstance: function () {
    if (!_instance) {
      _instance = new UserHelper();
    }
    return _instance;
  }
};