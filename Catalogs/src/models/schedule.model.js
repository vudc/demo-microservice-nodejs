var db = require('./db');
var Schema = db.Schema;
var ScheduleSchema = new Schema({
    time: {
        type: String,
        required: true
    },
    CinemaRoomID: {
        type: String,
        required: true
    },
    seatsEmpty: {
        type: Array,
        default: []
    },
    seatsOccupied: {
        type: Array,
        default: []
    },
    price: Number,
    movie_id: {
        type: String,
        required: true
    },
})
module.exports = db.model('Schedule', ScheduleSchema);
