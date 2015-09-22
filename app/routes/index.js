"use strict";

var express = require("express"),
  router = express.Router();
var userRouter = require("./userRoutes"),
  groupRouter = require("./groupRoutes");
router.get("/", function (req, res) {
  res.send("iCar Pooling...");
});
router.use("/v1/users", userRouter);
router.use("v1/groups", groupRouter);
module.exports = router;