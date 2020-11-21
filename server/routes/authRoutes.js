import express from 'express';
import authController from '../controllers/authController';

const authRouter = express.Router();

authRouter.get('/signup', authController.getSignup);
authRouter.get('/login', authController.getLogin);

export default authRouter;
