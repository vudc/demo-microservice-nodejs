var db = require('./db');
var Schema = db.Schema;
var CitySchema = new Schema ({
    name:{
        type:String,
        required:true
    }
})
module.exports = db.model('City', CitySchema)