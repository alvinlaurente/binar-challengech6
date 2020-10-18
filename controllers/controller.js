/* eslint-disable camelcase */
const home_index = (req, res) => {
  res.render('index', { title: 'Home' });
};

const rps_index = (req, res) => {
  res.render('rockpaperscissor', { title: 'Rock Paper Scissor' });
};

module.exports = {
  home_index,
  rps_index,
};
