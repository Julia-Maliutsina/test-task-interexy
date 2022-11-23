import { FC } from 'react';

import Layout from 'components/Layout';
import UserInfo from 'components/User/UserInfo';
import Loader from 'components/Loader';
import Error from 'components/Error';
import { IUser } from 'interfaces/User';
import { IError } from 'interfaces/Error';

import './style.scss';
interface IUserProps {
  user: IUser;
  isLoading?: Boolean;
  error?: IError;
}

const CharacterPage: FC<IUserProps> = ({ user, isLoading, error }) => (
  <Layout pagename="user">
    {error?.status ? (
      <Error message={`${error.message}`} status={error.status} />
    ) : isLoading ? (
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
