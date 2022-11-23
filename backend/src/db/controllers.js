import authService from './services/auth.service.js';
import userService from './services/user.service.js';

export const getUser = async (request, response) => {
  try {
    const { email, password } = request.body;
    const signin = await authService.signInUser({ email, password });
    if (signin.status === 'error') {
      return response.status(400).send({ message: signin.message });
    }
    response.status(200).send({ token: signin.accessToken, user: signin.userInfo });
    return;
  } catch (e) {
    return response.status(500).send({ message: 'Server error' });
  }
};

export const addUser = async (request, response) => {
  try {
    const { name, surname, email, birth, gender, location, password } = request.body;
    const signup = await authService.signUpNewUser({
      name,
      surname,
      email,
      birth,
      gender,
      location,
      password,
    });
    if (signup.status === 'error') {
      return response.status(400).send({ message: signup.message });
    }
    response.status(200).send({ token: signup.accessToken, user: signup.userInfo });
  } catch (e) {
    if (e.code === 11000) {
      return response.status(400).send({ message: 'User is already registered' });
    }
    return response.status(500).send({ message: 'Server error' });
  }
};

export const getUserInfo = async (request, response) => {
  try {
    const { id } = request.userData;
    const user = await userService.getUser({ id });
    if (user.status === 'error') {
      return response.status(400).send({ message: user.message });
    }
    return response.status(200).send({ user: user.info });
  } catch (e) {
    return response.status(500).send({ message: 'Server error' });
  }
};
