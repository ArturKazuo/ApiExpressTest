module.exports = app => {
    const controller = require('../controllers/wpp_bot')();
  
    app.route('/api/v1/wpp_bot')
      .get(controller.listWppBot);

    app.route('/api/v1/wpp_bot/:cel/:text/:smsBackup/:smsOnly')
    .post(controller.getURL)
}