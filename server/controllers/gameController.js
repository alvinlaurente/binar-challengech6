import { userGameHistories } from '../models';

class gameController {
  static rpsIndex = (req, res) => {
    res.render('rockpaperscissor', { title: 'Rock Paper Scissor', username: req.session.username });
  };

  static gameHistory = (req, res) => {
    res.render('game_history', { title: 'Game History', username: req.session.username });
  }

  static rpsHistory = async (req, res) => {
    // TODO : Validate request!
    try {
      // eslint-disable-next-line camelcase
      const { player_choice, comp_choice, result } = req.body;

      await userGameHistories.create({
        timestamps: new Date().toISOString(),
        userId: req.session.userId,
        player_choice,
        comp_choice,
        result,
      }).catch((e) => console.log(e));

      return res.status(200).json({ message: 'OK' });
    } catch {
      return res.redirect('/rockpaperscissor');
    }
  };

  static deleteGameHistory = (req, res) => {
  };
}

export default gameController;
