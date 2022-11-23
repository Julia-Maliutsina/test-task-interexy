import { Router } from 'express';

import { getUser, addUser, getUserInfo } from './controllers.js';
import authCheck from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/signin', getUser);
router.post('/signup', addUser);

router.get('/user', authCheck, getUserInfo);

export { router };
