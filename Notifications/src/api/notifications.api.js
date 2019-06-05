var express = require('express');
var router = express.Router();
var func = require('../func/function');
var NotificationBus = require('../BUS/notification.bus');
router.post('/sendmail', async (req, res) => {

    var result;
    var mess;
    var mailTo = req.body.mailTo;
    if (func.sendMail(mailTo, req.body.body, req.body.title)) {
        mess = "Send mail successful. ";
        NotificationBus.AddNew(req.body).then(r => {
            result = {
                status: 200,
                message: {
                    mail: mess + "Add mail successful!",
                    resMess: r
                },
                data: req.body
            }
            return res.json(result);
        })
    } else {
        mess = "sendmail Fail";
        result = {
            status: 201,
            message: mess,
        }
        return res.json({
            result
        })
    }

})

module.exports = router;