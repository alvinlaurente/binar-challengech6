const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes');

const app = express();
const port = 3000;

// Template/View engine using EJS
app.set('view engine', 'ejs');

// Port listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Logger Middleware
app.use(morgan('tiny'));

// Static files Middleware
app.use(express.static('./public'));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// 404 Page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
