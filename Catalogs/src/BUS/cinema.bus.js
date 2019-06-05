var cinemaRepos = require('../repositories/cinema.repos');
exports.GetAllCinemaRoom = async () => {
    return await cinemaRepos.GetAllCinemaRoom();
}

exports.GetAllSchedule = async () => {
    return await cinemaRepos.GetAllSchedule();
}
exports.AddCinemaRoom = async (new_CinemaRoom) => {
    return await cinemaRepos.AddCinemaRoom(new_CinemaRoom);
}
exports.AddSchedule = async (new_schedule) => {
    return await cinemaRepos.AddSchedule(new_schedule);
}

exports.getCinemasByCity = async (cityID) => {
    return await cinemaRepos.getCinemasByCity(cityID);
}
exports.getCinemaScheduleByMovieID = async (movieID) => {
    return await cinemaRepos.GetCinemaScheduleByMovie(movieID)
}