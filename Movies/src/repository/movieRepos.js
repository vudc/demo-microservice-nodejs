var Movie = require('../models/movieModel');

exports.GetAllMovie = async () => {
    return await Movie.find({});
}
exports.AddNew = async (NewMovie) => {
    var result;
    await Movie.create(NewMovie).then(res => {
        result = res;
    }).catch(err => {
        result = {
            statusCode: 401,
            message: err
        }
    });
    return result;
}

exports.GetPremieres = async () => {
    const currentDay = new Date();
    const query = {
        releaseYear: {
            $gt: currentDay.getFullYear() - 1,
            $lte: currentDay.getFullYear()
        },
        releaseMonth: {
            $gte: currentDay.getMonth() + 1,
            $lte: currentDay.getMonth() + 2
        },
        releaseDay: {
            $lte: currentDay.getDate()
        }
    }
    return await Movie.find(query);
}