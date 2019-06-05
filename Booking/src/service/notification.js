const supertest = require('supertest');
exports.SendNoti = (payload) => {
    return new Promise((resolve, reject) => {
        supertest(process.env.NOTI_HOST)
            .post('/notification/sendmail')
            .send(payload)
            .end((err, res) => {
                if (err) {
                    reject(new Error('An error occured with the payment service, err: ' + err))
                }
                resolve(res.body)
            })
    })
}