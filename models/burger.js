const orm = require('../config/orm.js');

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", (res) => cb(res));
    },

    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        })
    },
    delete(condition, cb) {
        orm.delete('burgers', condition, (res) => cb(res));
      },
};

module.exports = burger;