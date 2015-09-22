"use strict";
var dataAccess = require("../../dataAccess").getInstance(),
  messageConstants = require ("../../messageConstants");
var _instance;

var GroupHelper = function () {
};

GroupHelper.prototype.checkIfGroupExist = function (groupObject) {
  var query = {};
  query.groupName = groupObject.groupName;
  return dataAccess.findDocument(messageConstants.collections.groups, query)
    .then(function (object) {
      return object && object.length > 0 ? true : false;
    });
};
module.exports = {
  getInstance: function () {
    if (!_instance) {
      _instance = new GroupHelper();
    }
    return _instance;
  }
};