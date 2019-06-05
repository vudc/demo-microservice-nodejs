var db = require('./db');
var Schema = db.Schema;
var NotificationSchema = new Schema({
    type: {
        type: String,
        required: [true, "yêu cầu loại thông báo (mail, SMS,...)"]
    },
    title: String,
    content: String,
    body: Object,
    from: String,
    seats:Array,
    mailTo: String
})
module.exports = db.model('Notifications', NotificationSchema)