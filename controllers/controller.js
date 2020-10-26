/* eslint-disable camelcase */
const fs = require('fs');
const gameHistory = require('../models/gameHistory.json');

const home_index = (req, res) => {
  res.render('index', { title: 'Home' });
};

const rps_index = (req, res) => {
  res.render('rockpaperscissor', { title: 'Rock Paper Scissor' });
};

const rps_history = (req, res) => {
  // Check if any req body fields are missing
  if (!req.body['player choice'] || !req.body['comp choice'] || !req.body.result) {
    return res.status(401).send({ error: true, message: 'Field missing in request body.' });
  }

  gameHistory.push(req.body);

  return fs.writeFile(
    `${__dirname}/../models/gameHistory.json`,
    JSON.stringify(gameHistory),
    'utf-8',
    () => res.status(200).json({ message: 'Successfully saved game history' }),
  );
};

module.exports = {
  home_index,
  rps_index,
  rps_history,
};
