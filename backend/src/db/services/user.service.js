import { UserModel } from '../model.js';

const getUser = async ({ id }) => {
  if (!id) {
    return { status: 'error', message: 'User id not provided' };
  }
  const searchResult = await UserModel.findOne({ _id: id });
  const userInfo = {
    id: searchResult._id,
    name: searchResult.name,
    surname: searchResult.surname,
    birth: searchResult.birth,
    email: searchResult.email,
    gender: searchResult.gender,
    location: searchResult.location,
    createdAt: searchResult.createdAt,
  };
  return { status: 'ok', info: userInfo };
};

const authService = { getUser };

export default authService;
