module.exports = () => {
    const wppBot = require('../data/wpp_bot.json');
    const controller = {};
  
    controller.listWppBot = (req, res) => res.status(200).json(wppBot);

    controller.getURL = (req, res) => {

        res.status(200).json(req.params)
    }
  
    return controller;
}