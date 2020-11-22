class userController {
  static getProfile = async (req, res) => {
    let login = false;
    if (req.session.userId) {
      login = true;
    }
    res.render('index', { title: 'Home', login, username: req.session.username || '' });
  };
}

export default userController;
