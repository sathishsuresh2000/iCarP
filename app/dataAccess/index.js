var q=require("q");
var dbUtility=  require("../dbUtility").getInstance();
var _instance;

function DataAccess(){};
DataAccess.prototype.saveDocument =function(collection,document){
    var defer= q.defer();
    return dbUtility.getDBInstance().
        then(function(db){
            db.collection(collection).save(document,function(err,result){
                if(err){
                    defer.reject(err);
                }
                if(result){
                    defer.resolve(result)
                }
                else{
                    defer.resolve();
                }
            });
            return defer.promise;
        });
};

DataAccess.prototype.findDocument=function(collection,query){
    var defer= q.defer();
    return dbUtility.getDBInstance()
        .then(function(db){
            db.collection(collection).findOne(query,function(err,result){
                if(err){
                    defer.reject(err);
                }
                if(result){
                    defer.resolve(result);
                }
                else{
                    defer.resolve();
                }
            });
            return defer.promise;
        }) ;
};

DataAccess.prototype.findDocument =function(collection,query){
    var defer= q.defer();
    return dbUtility.getDBInstance()
        .then(function(db){
            db.collection(collection).find(query).toArray(function(err,result){
                if(err){
                    defer.reject(err);
                }
                if(result){
                    defer.resolve(result);
                }
                else{
                    defer.resolve();
                }
            });
            return defer.promise;
        });
};

DataAccess.prototype.findAggregateDocument =function(collection,query){
    var defer= q.defer();
    return dbUtility.getDBInstance()
        .then(function(db){
            db.collection(collection).distinct(query,function(err,result){
                if(err){
                    defer.reject(err);
                }
                if(result){
                    defer.resolve(result);
                }
                else{
                    defer.resolve();
                }

            });
            return defer.promise;
        });
};

module.exports = {
    getInstance: function () {
        if (!_instance) {
            _instance = new DataAccess();
        }
        return _instance;
    }
};
