import { userGames, userGameBiodata } from '../models';

class userController {
  static getProfile = async (req, res) => {
    let login = false;
    if (req.session.userId) {
      login = true;
    }

    try {
      const data = await userGameBiodata.findOne({
        attributes: ['name', 'gender', 'dob', 'status'],
        where: { userId: req.session.userId },
        include: [
          {
            model: userGames,
            attributes: ['userId', 'username', 'email'],
          },
        ],
      })
        .catch((e) => console.log(e));
      return res.render('profile', {
        title: 'Profile', login, data, username: req.session.username,
      });
    } catch {
      return res.render('profile', { title: 'Profile', login, username: req.session.username || '' });
    }
  };
}

export default userController;
