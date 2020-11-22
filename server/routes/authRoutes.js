import express from 'express';
import blockUnauthenticated from '../middlewares/authentication/blockUnauthenticated';
import blockAuthenticated from '../middlewares/authentication/blockAuthenticated';
import authController from '../controllers/authController';

const authRouter = express.Router();

authRouter.get('/signup', blockAuthenticated, authController.getSignup);
authRouter.post('/signup', blockAuthenticated, authController.postSignup);

authRouter.get('/login', blockAuthenticated, authController.getLogin);
authRouter.post('/login', blockAuthenticated, authController.postLogin);

authRouter.post('/logout', blockUnauthenticated, authController.logout);

export default authRouter;
