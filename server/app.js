import express from 'express';
import logger from 'morgan';
import path from 'path';
import routes from './routes/routes';
import authRoutes from './routes/authRoutes';

const app = express();
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

// Routes
app.use(routes);
app.use('/auth', authRoutes);

// 404 Page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
