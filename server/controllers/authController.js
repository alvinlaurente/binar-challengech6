import bcrypt from 'bcrypt';
import { userGames, userGameBiodata } from '../models';
import signupValidation from '../middlewares/validation/signupValidation';

class authController {
  static getSignup = (req, res) => {
    res.render('signup', { title: 'Sign Up', validateError: '' });
  };

  static postSignup = async (req, res) => {
    try {
      const {
        name, email, username, password, repeatPassword,
      } = req.body;

      // Validate Form using joi
      const { error } = await signupValidation.validate({
        name,
        email,
        username,
        password,
        repeatPassword,
      });
      if (error) return res.render('signup', { title: 'Sign Up', validateError: `${error.details[0].message}` });

      // Check email & username is already in database
      const emailExist = await userGames.findOne({ where: { email } });
      const usernameExist = await userGames.findOne({ where: { username } });
      console.log(emailExist);
      console.log(usernameExist);

      if (emailExist) return res.render('signup', { title: 'Sign Up', validateError: 'Email is already signed up.' });
      if (usernameExist) return res.render('signup', { title: 'Sign Up', validateError: 'Username is already taken.' });

      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      await userGames.create({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
      })
        .then((data) => userGameBiodata.create({
          userId: data.userId,
          name: req.body.name,
        }))
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
