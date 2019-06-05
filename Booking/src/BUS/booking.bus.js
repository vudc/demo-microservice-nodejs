var UserRepos = require('../repositories/user.repos')
var BookingRepos = require('../repositories/booking.repos');
var TicketRepos = require('../repositories/ticket.repos');
var NotificationService = require('../service/notification');
exports.Booking = async (booking, username) => {
    var result;
    var FindUser = UserRepos.FindbyName(username);
    var AddBooking = BookingRepos.addNew(booking);
    var AddTicket = TicketRepos.addNew(booking, "paid");
    await Promise.all([FindUser, AddBooking, AddTicket]).then(async ([pUser, pBooking, pTicket]) => {
        if (pUser.length > 0) {
            var noti = {
                mailTo: pUser[0].email,
                title: "Thông báo lịch chiếu phim cho " + pUser[0].name,
                body: {
                    schedule: booking.schedule,
                    movie: booking.schedule,
                    CinemaRoom: booking.cinema,
                    seats: booking.seats
                }
            }
            console.log(noti)
            await NotificationService.SendNoti(noti).then(rNoti => {
                result = {
                    statusCode: 200,
                    message: "successful",
                    user: pUser,
                    ticket: pTicket,
                    noti: rNoti
                }
            }).catch(err => {
                result = {
                    statusCode: 201,
                    message: "successful",
                    user: pUser,
                    ticket: pTicket,
                    err: err
                }
            })

        } else {
            var user = {
                name: username,
            }
            UserRepos.addNew(user).then(pR => {
                result = {
                    statusCode: 200,
                    message: "successful",
                    user: pR,
                    ticket: pTicket
                }
            })
        }
    })
    return result;
}