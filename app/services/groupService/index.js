"use strict";
var q = require("q");

var messageConstants = require("../../messageConstants"),
  groupHelper = require("./groupHelper").getInstance();
var _instance;
var GroupService = function () {
};

GroupService.prototype.createGroup = function (groupObject) {
  var defer = q.defer();
  groupHelper.checkIfGroupExist(groupObject)
    .then(function (isExist) {
      if (isExist) {
        defer.reject({
          code: messageConstants.httpCodes.conflict,
          message: messageConstants.groupMessageConstants.groupAlreadyExist
        });
      }
      else {
        groupObject.dateCreated = new Date();
        return defer.resolve(dataAccess.saveDocument(messageConstants.collections.groups, groupObject));
      }
    })
    .fail(function (err) {
      defer.reject({code: messageConstants.httpCodes.internalServerError, message: err.message});
    })
  return defer.promise;
};

module.exports = {
  getInstance: function () {
    if (!_instance) {
      _instance = new GroupService();
    }
    return _instance;
  }
};