import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { userGames, userGameBiodata } from '../models';

class authController {
  static getSignup = (req, res) => {
    res.render('signup', { title: 'Sign Up' });
  };

  static postSignup = async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const generatedUUID = uuidv4();

      console.log(generatedUUID);

      await userGames.create({
        userId: generatedUUID,
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
      });

      await userGameBiodata.create({
        userId: generatedUUID,
        name: req.body.name,
      })
        .catch((e) => console.log(e));

      return res.status(201).redirect('/auth/login');
    } catch {
      return res.status(200).redirect('/auth/signup');
    }
  };

  static getLogin = (req, res) => {
    res.render('login', { title: 'Login' });
  };

  static postLogin = (req, res) => { };
}

export default authController;
