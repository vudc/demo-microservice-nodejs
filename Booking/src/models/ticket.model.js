var db = require('./db');
var Schema = db.Schema;
var TicketSchema = new Schema({
    cinema: String,
    schedule: String,
    movie: String,
    seats: Object,
    cinemaRoom: String,
    orderId: String,
    status:{
        type:String,
        default:"Pending"
    }
    ,
})
module.exports = db.model('Tickets', TicketSchema)