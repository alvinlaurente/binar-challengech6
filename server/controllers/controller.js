import checkUserId from '../middlewares/authentication/checkUserId';

class Controller {
  static homeIndex = (req, res) => {
    const login = checkUserId(req.session);
    res.render('index', { title: 'Home', login, username: req.session.username || '' });
  };
}

export default Controller;
