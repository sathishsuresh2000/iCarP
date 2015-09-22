var q=require("q"),
    MongoClient=require("mongodb").MongoClient;
var config=require("./../appConfig");
var _instance;
var DBUtility =function() {
    var _getConnectionString=function(){
        return "mongodb://"+config.database.environment+":"+config.database.port+"/"+config.database.dbName;
    };
    this.getDBInstance = function () {
        defer= q.defer();
         MongoClient.connect(_getConnectionString(),function(err,db){
           if(err){
               console.log("Error while get Database Instance...\n"+err);
               defer.reject(err);
           }
            else if (db){
               defer.resolve(db);
           }
        });
        return defer.promise;
    };
};
//creating singleton instance for DBUtility
var dbInstance = {
    getInstance:function()
    {
        if(!_instance){
            _instance=new DBUtility();
        }
        return _instance;
    }
};
module.exports=dbInstance;