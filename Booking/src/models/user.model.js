var db = require('./db');
var Schema = db.Schema;
var UserSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    creditcard: Object,
    phoneNumber: String,
    amembership: Number
})
module.exports = db.model('User', UserSchema)