import { FC } from 'react';
import { IUser } from 'interfaces/User';

import Layout from '../../components/Layout';
import './style.scss';
interface IUserProps {
  user: IUser;
  isLoading?: Boolean;
}

const CharacterPage: FC<IUserProps> = ({ user, isLoading }) => {
  return <Layout pagename="character">{user && user.name}</Layout>;
};

export default CharacterPage;
