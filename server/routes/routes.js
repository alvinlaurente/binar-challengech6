import express from 'express';
import blockUnauthenticated from '../middlewares/authentication/blockUnauthenticated';
import controller from '../controllers/controller';
import userController from '../controllers/userController';
import gameController from '../controllers/gameController';

const router = express.Router();

// Homepage router
router.get('/', controller.homeIndex);
router.get('/index', (req, res) => {
  res.redirect('/');
});
router.get('/home', (req, res) => {
  res.redirect('/');
});

router.get('/profile', blockUnauthenticated, userController.getProfile);

router.get('/rockpaperscissor', blockUnauthenticated, gameController.rpsIndex);
router.get('/gameHistory', blockUnauthenticated, gameController.gameHistory);

router.post('/rockpaperscissor', blockUnauthenticated, gameController.rpsHistory);
router.delete('/gameHistory', blockUnauthenticated, gameController.deleteGameHistory);

export default router;
