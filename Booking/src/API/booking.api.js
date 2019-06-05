var express = require('express');
var router = express.Router();
var BookingBUS = require('../BUS/booking.bus');
router.post('/order', async (req, res) => {
    let result = await BookingBUS.Booking(req.body.booking,req.body.username);
    return res.json(result);
})

module.exports = router;