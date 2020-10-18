const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

// Homepage router
router.get('/', controller.home_index);

router.get('/index', (req, res) => {
  res.redirect('/');
});

router.get('/home', (req, res) => {
  res.redirect('/');
});

router.get('/rockpaperscissor', controller.rps_index);

module.exports = router;
