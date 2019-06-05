# Cinema Microservice (Nodejs, Mongodb)

## Cài đặt
Dự án chạy trên môi trường docker nên máy cần phải được cài đặt docker

Chạy các câu lệnh để cài đặt node_modules cho từng service

```
 Cinema\Booking> npm install
 Cinema\Movies> npm install
 Cinema\Notifications> npm install
 Cinema\Catalogs> npm install
```
Tiếp tục mở terminal trong dự án và build thành các container trên docker
```
 Cinema> docker-compose up
```
Port của các service
- Booking: 3001 
- Notifications: 3002
- Catalogs: 3003
- Movies: 3004
- Gateway: 80

## Giới thiệu cấu trúc dự án
Dự án microservice xây dựng quản lý rạp phim dựa.
Trong dự án sử dụng:
- Nodejs (ES6 syntax)
- MongoDB
- Docker environment

Trong dự án gồm 5 service chính:
- Movies service (thêm phim, danh sách phim, danh sách công chiếu)
- Catalogs service (danh sách rạp, lịch chiếu)
- Bookings service (Đặt vé, tạo ticket, quản lý user)
- Notifications (Gửi notification qua kênh gmail)
- Gateway 


#### Mô hình tổng thể của dự án
![Cinema Diagram ](https://raw.githubusercontent.com/congvu307/Cinema/master/Cinema_Diagram.png)

Gateway service sẽ chịu trách nhiệm điều hướng (nhận request từ port 80) và chuyển đến từng service tương ứng thông qua url truyền vào
Gateway sử dụng nginx của Docker.


#### Mô hình của 1 service (ví dụ ở booking service)
![Cinema Diagram ](https://raw.githubusercontent.com/congvu307/Cinema/master/cinema_booking_service.png)

Mỗi service (trừ gateway) được chia thành 4 tầng (4-layer)
- Tầng router chịu trách nhiệm điều hướng, nhận url, parameter truyền vào
- Tầng BUS sẽ xử lý nghiệp vụ và logicstic
- Tầng Repos (repository) tương tác với database thông qua models (CRUD)
- Tâng Models định danh và cấu trúc 1 collection.

Các service sẽ gọi qua lại thông qua API
Ví dụ service sẽ gửi notification trên kênh gmail thông qua notification service

```javascript
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
```
