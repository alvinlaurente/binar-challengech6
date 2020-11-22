import fs from 'fs';

class gameController {
  static rpsIndex = (req, res) => {
    res.render('rockpaperscissor', { title: 'Rock Paper Scissor' });
  };

  static gameHistory = (req, res) => {
    res.render('game_history', { title: 'Game History', history: gameHistory });
  }

  static rpsHistory = (req, res) => {
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

  static deleteGameHistory = (req, res) => {
    const { time } = req.body;
    const findObj = gameHistory.find((elm) => elm.time === parseInt(time, 10));

    if (!findObj) {
      res.status(400);
    }

    for (let i = 0; i < gameHistory.length; i += 1) {
      if (gameHistory[i].time === parseInt(time, 10)) {
        gameHistory.splice(i, 1);
      }
    }

    return fs.writeFile(
      `${__dirname}/../models/gameHistory.json`,
      JSON.stringify(gameHistory),
      'utf-8',
      () => res.status(200),
    );
  }
}

export default gameController;
