import { FC } from 'react';
import { IUser } from 'interfaces/User';

import Layout from 'components/Layout';
import UserInfo from 'components/User/UserInfo';
import Loader from 'components/Loader';

import './style.scss';
interface IUserProps {
  user: IUser;
  isLoading?: Boolean;
}

const CharacterPage: FC<IUserProps> = ({ user, isLoading }) => (
  <Layout pagename="character">
    {isLoading ? (
      <Loader />
    ) : (
      user && (
        <UserInfo
          id={user.id}
          name={user.name}
          surname={user.surname}
          email={user.email}
          birth={user.birth}
          gender={user.gender}
          location={user.location}
          createdAt={user.createdAt}
        />
      )
    )}
  </Layout>
);

export default CharacterPage;
