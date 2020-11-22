import express from 'express';
import authController from '../controllers/authController';

const authRouter = express.Router();

authRouter.get('/signup', authController.getSignup);
authRouter.post('/signup', authController.postSignup);

authRouter.get('/login', authController.getLogin);
authRouter.post('/login', authController.postLogin);

authRouter.post('/logout', authController.logout);

export default authRouter;
