import express from 'express';
import blockUnauthenticated from '../middlewares/authentication/blockUnauthenticated';
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

router.get('/rockpaperscissor', blockUnauthenticated, controller.rpsIndex);
router.get('/gameHistory', blockUnauthenticated, controller.gameHistory);

router.post('/rockpaperscissor', blockUnauthenticated, controller.rpsHistory);
router.delete('/gameHistory', blockUnauthenticated, controller.deleteGameHistory);

export default router;
