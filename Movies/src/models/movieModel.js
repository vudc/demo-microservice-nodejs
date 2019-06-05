var db = require('./db');
var Schema = db.Schema;

var MovieSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    runtime: Number,
    format: String,
    plot: String,
    releaseYear: Number,
    releaseMonth: Number,
    releaseDay: Number,
});
module.exports = db.model('Movie', MovieSchema);