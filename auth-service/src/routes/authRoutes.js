import express from 'express';
import AuthController from '../controllers/authController.js';
import User from '../models/user.js';

const router = express.Router();
const authController = new AuthController(User);

router.post('/register', (req, res) => authController.registerUser(req, res));
router.post('/login', (req, res) => authController.loginUser(req, res));

export default router;