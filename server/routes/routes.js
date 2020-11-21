import express from 'express';
import controller from '../controllers/controller';

const router = express.Router();

// Homepage router
router.get('/', controller.homeIndex);
router.get('/index', (req, res) => {
  res.redirect('/');
});
router.get('/home', (req, res) => {
  res.redirect('/');
});

router.get('/rockpaperscissor', controller.rpsIndex);
router.get('/gameHistory', controller.gameHistory);

router.post('/rockpaperscissor', controller.rpsHistory);
router.delete('/gameHistory', controller.deleteGameHistory);

export default router;
