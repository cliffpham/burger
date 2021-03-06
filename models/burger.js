// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    
    create: function(cols, vals, cb) {
        orm.create('burgers', cols, vals, function(res) {
        cb(res);
        });
    },

    all: function(cb) {
        orm.all('burgers', function(res){
            cb(res);
            console.log("this is on the modal page and is:" + res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
    }
};



// Export the database functions for the controller (catsController.js).
module.exports = burger;