var nodemailer = require('nodemailer')

module.exports = {
    sendMail: async function (mailTo, body, title) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'demoappnotificationgreen@gmail.com',
                pass: process.env.GMAIL_PASSWORD
            }
        });
        var mailOptions = {
            from: 'demoappnotificationgreen@gmail.com',
            to: mailTo,
            subject: title,
            html: `
            <p>Lịch chiếu:  ${body.schedule}</p>
            <p>tên phim: ${body.movie}</p>
            <p>Phóng chiếu: ${body.CinemaRoom}</p>
            <h3>Cinemas Microserivce 2019 - Green Studio, Enjoy your movie !</h3>
            `,
        };
        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return false;
            } else {
                return true;
            }
        });
    },
    validatePhoneNumber: function (p) {
        var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
        var digits = p.replace(/\D/g, "");
        return phoneRe.test(digits);
    }
}
