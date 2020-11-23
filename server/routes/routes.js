import express from 'express';
import blockUnauthenticated from '../middlewares/authentication/blockUnauthenticated';
import changePasswordValidation from '../middlewares/validation/changePasswordValidation';
import editProfileValidation from '../middlewares/validation/editProfileValidation';
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
router.get('/profile/edit', blockUnauthenticated, userController.getEditProfile);
router.get('/profile/changePassword', blockUnauthenticated, userController.getChangePassword);
router.patch('/profile/edit', [blockUnauthenticated, editProfileValidation], userController.patchEditProfile);
router.patch('/profile/changePassword', [blockUnauthenticated, changePasswordValidation], userController.patchChangePassword);
router.delete('/profile/deleteUser', blockUnauthenticated, userController.deleteUser);

router.get('/rockpaperscissor', blockUnauthenticated, gameController.rpsIndex);
router.get('/gameHistory', blockUnauthenticated, gameController.getGameHistory);
router.post('/gameHistory', blockUnauthenticated, gameController.postGameHistory);
router.delete('/gameHistory', blockUnauthenticated, gameController.deleteGameHistory);

export default router;
