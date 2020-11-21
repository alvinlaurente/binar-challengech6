import fs from 'fs';

class authController {
  static getSignup = (req, res) => {
    res.render('signup', { title: 'Sign Up' });
  };

  static getLogin = (req, res) => {
    res.render('login', { title: 'Login' });
  };
}

export default authController;
