import jwt from 'jsonwebtoken';

import { KEY } from '../config.js';

const authCheck = (request, response, next) => {
  try {
    const token = request.headers.authorization.split(' ')[1];

    if (!token) {
      return response.status(403).send({ message: 'User is not authorized' });
    }
    const decodedToken = jwt.verify(token, KEY);
    request.userData = decodedToken;
    next();
  } catch (e) {
    return response.status(403).send({ message: 'User is not authorized' });
  }
};

export default authCheck;
