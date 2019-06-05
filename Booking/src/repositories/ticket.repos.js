var TicketModel = require('../models/ticket.model');
exports.addNew = async (ticket, status) => {
    var result;
    ticket.status = status;
    await TicketModel.insertMany(ticket).then(res => {
        result = {
            status: 200,
            message: "insert ticket successful",
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