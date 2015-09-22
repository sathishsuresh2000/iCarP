"use strict";

var express = require("express"),
  userRouter = express.Router();
var groupController = require("../controllers/groupController").getInstance();

userRouter.post("/", groupController.createGroup);
module.exports = userRouter;