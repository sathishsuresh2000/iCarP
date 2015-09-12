"use strict";

var express = require("express");
var router = express.Router();
var userRouter = require("./userRoutes");
router.use("/v1/users", userRouter);
module.exports = router;