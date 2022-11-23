import mongoose from 'mongoose';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { UserModel } from '../model.js';
import { KEY } from '../../config.js';

const generateAccessToken = (id, role) => {
  const payload = { id, role };
  return jwt.sign(payload, KEY);
};

const signInUser = async ({ email, password }) => {
  if (!email || !password) {
    return { status: 'error', message: 'Invalid parameters' };
  }

  const user = await UserModel.findOne({ email: email });
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

const signUpNewUser = async ({ name, surname, email, birth, gender, location, password }) => {
  if (!name | !surname | !email | !birth | !gender | !password) {
    return { status: 'error', message: 'Invalid parameters' };
  }
  let user = new UserModel({
    name: name,
    surname: surname,
    email: email,
    birth: birth,
    gender: gender,
    location: location,
    password: password,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hashSync(user.password, salt);
  const newUser = await user.save();
  const userInfo = {
    id: newUser._id,
    name: newUser.name,
    surname: newUser.surname,
    birth: newUser.birth,
    email: newUser.email,
    gender: newUser.gender,
    location: newUser.location,
    createdAt: newUser.createdAt,
  };
  const accessToken = generateAccessToken(newUser._id);
  return { status: 'ok', userInfo, accessToken };
};

const authService = { signInUser, signUpNewUser };

export default authService;
