import pkg from 'mongoose';
const { Schema, model } = pkg;

const schema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    birth: { type: String, required: true },
    gender: { type: String, required: true },
    location: { type: String, default: 'unknown' },
    password: { type: String },
  },
  {
    timestamps: { createdAt: 'createdAt' },
  },
);

export const UserModel = model('User', schema, 'users');
