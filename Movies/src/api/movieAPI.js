var movieBus = require('../BUS/movieBUS');
var express = require('express');
var router = express.Router();

router.get('/get_list', async (req, res) => {
    let list_Moview = await movieBus.GetAllMovie();
    res.json(list_Moview);
})
router.get('/test',(req,res)=>{
    return res.json('ok')
})
router.post('/add_new', async (req, res) => {
    var movie = req.body;
    console.log(movie);
    let result = await movieBus.AddNew(movie);
    res.json(result);
})
router.get('/premieres', async (req, res) => {
    let list_Premieres = await movieBus.GetPremieres();
    return res.json(list_Premieres);
})
module.exports = router;