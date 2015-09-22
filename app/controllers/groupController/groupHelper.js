var q = require("q");
var messageConstants = require("../../messageConstants");
var _instance;
var GroupHelper = function () {
};

GroupHelper.prototype.validateGroupToCreate = function (object) {
  if (!object) {
    defer.reject({
      code: messageConstants.httpCodes.badRequest,
      message: messageConstants.groupMessageConstants.emptyBody
    });
  }
  else if (!object.userId || object.userId === "") {
    defer.reject({
      code: messageConstants.httpCodes.badRequest,
      message: messageConstants.groupMessageConstants.userIdNotPresent
    });
  }
  else if (!object.groupName || object.groupName === "") {
    defer.reject({
      code: messageConstants.httpCodes.badRequest,
      message: messageConstants.groupMessageConstants.groupNameNotPresent
    });
  }
  else {
    defer.resolve();
  }
  return defer.promise;
};

module.exports = {
  getInstance: function () {
    if (!_instance) {
      _instance = new GroupHelper();
    }
    return _instance;
  }
};