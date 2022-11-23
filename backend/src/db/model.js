import pkg from 'mongoose';
const { Schema, model } = pkg;

const schema = new Schema({
  name: { type: String },
  surname: { type: String },
  email: { type: String },
  birth: { type: String },
  password: { type: String },
});

export const UserModel = model('User', schema, 'users');
