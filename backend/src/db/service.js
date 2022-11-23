import mongoose from 'mongoose';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { UserModel } from './model.js';
import { KEY } from '../config.js';

const generateAccessToken = (id, role) => {
  const payload = { id, role };
  return jwt.sign(payload, KEY);
};

const signInUser = async ({ email, password }) => {
  console.log(email, password);
  if (!email || !password) {
    return { status: 'error', message: 'Invalid parameters' };
  }

  const user = await UserModel.findOne({ where: { email } });
  if (!user) {
    return { status: 'error', message: 'User is not found' };
  }
  const validPassword = bcrypt.compare(password, user.password);
  if (!validPassword) {
    return { status: 'error', message: 'Invalid password' };
  }

  const accessToken = generateAccessToken(user._id);
  const userInfo = {
    id: user._id,
    name: user.name,
    surname: user.surname,
    birth: user.birth,
    email: user.email,
  };

  return { status: 'ok', userInfo, accessToken };
};

const signUpNewUser = async ({ name, surname, email, birth, password }) => {
  let user = new UserModel({
    name: name,
    surname: surname,
    email: email,
    birth: birth,
    password: password,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hashSync(user.password, salt);
  const newUser = await user.save();
  const accessToken = generateAccessToken(newUser._id);
  return { status: 'ok', newUser, accessToken };
};

const authService = { signInUser, signUpNewUser };

export default authService;
