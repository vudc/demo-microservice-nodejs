var NotificationModel = require('../models/notification.model');

exports.addNew = async (noti) => {
    var result;
    await NotificationModel.create(noti).then(res => {
        result = {
            status: 200,
            message: "insert user successful",
            data: res
        }
    }).catch(err => {
        result = {
            statusCode: 401,
            message: err
        }
    });
    return result;
}