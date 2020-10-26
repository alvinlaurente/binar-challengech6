/* eslint-disable camelcase */
// const history = require('../models/history.json');

const home_index = (req, res) => {
  res.render('index', { title: 'Home' });
};

const rps_index = (req, res) => {
  res.render('rockpaperscissor', { title: 'Rock Paper Scissor' });
};

const rps_history = (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
};

module.exports = {
  home_index,
  rps_index,
  rps_history,
};
