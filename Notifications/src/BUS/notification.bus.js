var NotificationRepos= require('../repositories/notification.repos');
exports.AddNew = async (noti) =>{
    return await NotificationRepos.addNew(noti);
}