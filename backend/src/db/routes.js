import { Router } from 'express';

import { getUser, addUser } from './controllers.js';

const router = Router();

router.post('/signin', getUser);

router.post('/signup', addUser);

export { router };
