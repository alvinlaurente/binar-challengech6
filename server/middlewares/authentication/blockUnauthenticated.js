// If user Session is not authenticated by Cookies, redirect to login page
// Otherwise, pass request to next handler
// This is useful so the page handled by this middleware, can only be accessed by authenticated user
const blockUnauthenticated = (req, res, next) => {
  if (!req.session.userId) {
    res.render('login', { title: 'Login', login: false, validateError: '' });
  } else next();
};

export default blockUnauthenticated;
