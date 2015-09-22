"use strict";
var groupHelper = require("./groupHelper").getInstance(),
  controllerHelper = require("../controllerHelper").getInstance(),
  groupService = require("../../services/groupService").getInstance();
var _instance;
var GroupController = function () {
};

GroupController.prototype.createGroup = function (req, res) {
  groupHelper.validateGroupToCreate(req.body)
    .then(function () {
      return groupService.createGroup(req.body);
    })
    .fail(function (err) {
      controllerHelper.sendResponse(res, err.code, err.message);
    })
    .done();
};
module.exports = {
  getInstance: function () {
    if (!_instance) {
      _instance = new GroupController();
    }
    return _instance;
  }
};