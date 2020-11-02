import express from 'express';
import controller from '../controllers/controller';

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
router.get('/gameHistory', controller.game_history);

router.post('/rockpaperscissor', controller.rps_history);
router.delete('/gameHistory', controller.delete_game_history);

export default router;
