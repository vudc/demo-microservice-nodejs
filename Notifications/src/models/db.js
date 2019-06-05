var Promise = require('bluebird');
var mongoose = require('mongoose');
Promise.promisifyAll(mongoose);

var mongoURL = 'mongodb://mongodb/Cinema';
mongoose.connect(mongoURL, { useNewUrlParser: true });
mongoose.connection.on('error', err => console.log(err));

module.exports = mongoose;