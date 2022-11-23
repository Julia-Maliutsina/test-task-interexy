import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetchUserInfo } from 'store/userSlice';
import { RootState, useAppDispatch } from 'store/store';

import UserPage from './User';

const UserContainer: FC = () => {
  const { isLoading, user } = useSelector((state: RootState) => state.userReducer);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  return <UserPage user={user} isLoading={isLoading} />;
};

export default UserContainer;
