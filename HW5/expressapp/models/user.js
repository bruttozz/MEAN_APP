var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    username: String,
    email   : String,
    googleID: String
});

module.exports = mongoose.model('User',schema);
