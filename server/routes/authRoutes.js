import express from 'express';
import blockUnauthenticated from '../middlewares/authentication/blockUnauthenticated';
import blockAuthenticated from '../middlewares/authentication/blockAuthenticated';
import loginValidation from '../middlewares/validation/loginValidation';
import signupValidation from '../middlewares/validation/signupValidation';
import authController from '../controllers/authController';

const authRouter = express.Router();

authRouter.get('/signup', blockAuthenticated, authController.getSignup);
authRouter.post('/signup', [blockAuthenticated, signupValidation], authController.postSignup);

authRouter.get('/login', blockAuthenticated, authController.getLogin);
authRouter.post('/login', [blockAuthenticated, loginValidation], authController.postLogin);

authRouter.delete('/logout', blockUnauthenticated, authController.logout);

export default authRouter;
