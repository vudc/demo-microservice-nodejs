var CinemaRoom = require('../models/cinema.model')
var Schedule = require('../models/schedule.model')

exports.GetAllCinemaRoom = async () => {
    return await CinemaRoom.find();
}

exports.GetAllSchedule = async () => {
    return await Schedule.find();
}
exports.AddCinemaRoom = async (cinemaRoom) => {
    var result;
    await CinemaRoom.create(cinemaRoom).then(res => {
        result = {
            status: 200,
            message: "insert successful",
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

exports.AddSchedule = async (schedule) => {
    var result;
    await Schedule.create(schedule).then(res => {
        result = {
            status: 200,
            message: "insert successful",
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
exports.getCinemasByCity = async (cityID) => {
    return await CinemaRoom.find({ city_id: cityID });
}
exports.GetCinemaScheduleByMovie = async (movieID) => {
    return await Schedule.find({ movie_id: movieID });
}