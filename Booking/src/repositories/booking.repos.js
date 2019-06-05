var BookingModel = require('../models/booking.model');
exports.addNew = async (booking) => {
    var result;
    await BookingModel.create(booking).then(res => {
        result = {
            status: 200,
            message: "insert booking successful",
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