var userService = require("../../services/userService").getInstance(),
  userHelper = require("./userHelper").getInstance(),
  controllerHelper = require("../controllerHelper").getInstance(),
  messageConstants = require("../../messageConstants");
var _instance;
var UserController = function () {

};

UserController.prototype.createUser = function (req, res) {

  userHelper.isValidUserObject(req)
    .then(function () {
      console.log ("from user...");
      req.body.active = true;
      return userService.addUser(req.body);
    })
    .then(function (userObject) {
      controllerHelper.sendResponse(res, messageConstants.httpCodes.successfulCreate, userObject);
    })
    .fail(function (err) {
      controllerHelper.sendResponse(res, err.code, err.message);
    })
    .done();
};

UserController.prototype.updateUser = function (req, res) {
  userHelper.isValidUserObject(req)
    .then(function () {
      return userService.updateUser(req.body);
    })
    .then(function (userObject) {
      controllerHelper.sendResponse(res, messageConstants.httpCodes.success, userObject);
    })
    .fail(function (err) {
      controllerHelper.sendResponse(res, err.code, err.message);
    })
    .done();

};

module.exports = {
  getInstance: function () {
    if (!_instance) {
      _instance = new UserController();
    }
    return _instance;
  }
};