var db = require('./db');
var Schema = db.Schema;
var BookingSchema = new Schema({
    city: String,
    cinema: String,
    movie: {
        type:String,
        required: [true, "Yeu cau ten phim"]
    },
    schedule: String,
    cinemaRoom: String,
    seats: Array,
    totalAmount: Number
})
module.exports = db.model('Bookings', BookingSchema)