"use strict";

var express = require("express");
var userRouter = express.Router();
var userController = require("../controllers/userController").getInstance();

userRouter.post("/",userController.createUser );
userRouter.put("/:userID",userController.updateUser );

module.exports = userRouter;