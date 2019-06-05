var db = require('./db');
var Schema = db.Schema;
var CinemaRoomSchema = new Schema({
    city_id: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    capacity: Number,
    type: String,
    flot: String,
})

module.exports = db.model('CinemaRoom', CinemaRoomSchema)