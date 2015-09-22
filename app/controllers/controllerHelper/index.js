var _instance;
var ControllerHelper = function () {
};
ControllerHelper.prototype.sendResponse = function (res, statusCode, data) {
  res.status(statusCode)
    .send(data);
};

module.exports ={
  getInstance : function (){
    if (!_instance){
      _instance = new ControllerHelper();
    }
    return _instance ;
  }
};
