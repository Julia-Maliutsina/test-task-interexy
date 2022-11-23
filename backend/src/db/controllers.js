import authService from './service.js';

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
    console.log(e);
  }
};

export const addUser = async (request, response) => {
  const { name, surname, email, birth, password } = request.body;
  const user = await authService.signUpNewUser({ name, surname, email, birth, password });
  console.log(user);
  response.status(200).send(user);
};
