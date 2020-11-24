import express from 'express';
import helmet from 'helmet';
import path from 'path';
import logger from 'morgan';
import session from 'express-session';
import methodOverride from 'method-override';
import routes from './routes/routes';
import authRoutes from './routes/authRoutes';

const app = express();

// Helmet
app.use(helmet({
  contentSecurityPolicy: false,
}));

const port = process.env.PORT_NUM;

// Template/View engine using EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Port listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Logger Middleware
app.use(logger('dev'));

// Static files Middleware
app.use(express.static('public'));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session & Cookies - Session store method use in-memory storage for development env
// TODO : Change Session store for production env
const expiryDate = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 hours
app.use(session({
  name: process.env.SESSION_NAME,
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
  cookie: {
    httpOnly: true,
    path: '/',
    expiryDate,
    sameSite: true,
    // TODO: False for development, use true for production env (HTTPS)
    secure: false,
  },
}));

// Method Override
app.use(methodOverride('_method'));

// Routes
app.use(routes);
app.use('/auth', authRoutes);

// 404 Page
app.use((req, res) => {
  let login = false;
  if (req.session.userId) { login = true; }
  res.status(404).render('404', { title: '404', login, username: req.session.username || '' });
});
