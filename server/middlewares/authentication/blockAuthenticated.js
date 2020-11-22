// If user Session is authenticated by Cookies, redirect to login page
// Otherwise, pass request to next handler
// This is useful so the logged in user can't access signup or login page
const blockAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    res.render('index', { title: 'Home', login: true, username: req.session.username || '' });
  } else next();
};

export default blockAuthenticated;
