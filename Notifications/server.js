require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
// const start = (options) => {
//   return new Promise((resolve, reject) => {

//   })
// }
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
var NotiAPI = require('./src/api/notifications.api');
app.use('/notification', NotiAPI);

app.listen(process.env.PORT, () => {
  console.log('Site running on port ' + process.env.PORT);
});