var cinemaBUS = require('../BUS/cinema.bus');
var express = require('express');
var router = express.Router();

router.get('/cinema_room/get_list', async (req, res) => {
    let list_CinemaRoom = await cinemaBUS.GetAllCinemaRoom();
    res.json(list_CinemaRoom);
})
router.get('/schedule/get_list', async (req, res) => {
    let list_Schedule = await cinemaBUS.GetAllSchedule();
    res.json(list_Schedule);
})



router.post('/cinema_room/add_new', async (req, res) => {
    var cinema_room = req.body;
    let result = await cinemaBUS.AddCinemaRoom(cinema_room);
    res.json(result);
})

router.post('/schedule/add_new', async (req, res) => {
    var schedule = req.body;
    let result = await cinemaBUS.AddSchedule(schedule);
    res.json(result);
})
router.get('/getCinemaByCity/:cityID', async (req, res) => {

    var cityID = req.params.cityID;
    let result = await cinemaBUS.getCinemasByCity(cityID);
    return res.json(result);

})


router.get('/getCinemaSchedule/:movieID', async (req, res) => {

    var movieID = req.params.movieID;
    let result = await cinemaBUS.getCinemaScheduleByMovieID(movieID);
    return res.json(result);

})


module.exports = router;