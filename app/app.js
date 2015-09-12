var express = require("express"),
  app = express(),
  bodyParser = require('body-parser'),
  http = require("http");
var routes = require("./routes");
var server = http.createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/", routes);
server.listen(3000);





