import { userGames, userGameBiodata } from '../models';
import editProfileValidation from '../middlewares/validation/editProfileValidation';

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
        title: req.session.username, login, data, username: req.session.username,
      });
    } catch {
      return res.render('profile', { title: 'Profile', login, username: req.session.username || '' });
    }
  };

  static getEditProfile = async (req, res) => {
    let login = false;
    if (req.session.userId) {
      login = true;
    }

    return res.render('editProfile', {
      title: 'Edit Profile', login, username: req.session.username || '', validateError: '',
    });
  };

  static patchEditProfile = async (req, res) => {
    let login = false;
    if (req.session.userId) {
      login = true;
    }

    try {
      const { name, status, gender } = req.body;
      let { dob } = req.body;

      // Validate using joi
      const { error } = await editProfileValidation.validate({
        name,
        gender,
        dob,
        status,
      });
      if (error) {
        return res.render('editProfile', {
          title: 'Edit Profile', login, username: req.session.username || '', validateError: `${error.details[0].message}`,
        });
      }

      if (!dob) dob = null;

      console.log(gender);

      await userGameBiodata.findOne({
        where: { userId: req.session.userId },
      })
        .then((user) => {
          if (name) { user.update({ name }); }
          if (gender) { user.update({ gender }); }
          if (dob) { user.update({ dob }); }
          if (status) { user.update({ status }); }
        })
        .catch((e) => console.log(e));

      return res.redirect('/profile');
    } catch {
      return res.redirect('/profile/edit', { login: false });
    }
  };
}

export default userController;
