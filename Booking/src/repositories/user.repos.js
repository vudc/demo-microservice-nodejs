var UserModel = require('../models/user.model');

exports.FindbyName = async (name) => {
    return await UserModel.find({ name: name });
}

exports.addNew = async (user) => {
    var result;
    await UserModel.create(user).then(res => {
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