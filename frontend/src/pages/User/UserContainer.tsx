import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';

import { fetchUserInfo } from 'store/userSlice';
import { RootState, useAppDispatch } from 'store/store';

import UserPage from './User';

const UserContainer: FC = () => {
  const { isLoading, user, error } = useSelector((state: RootState) => state.userReducer);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);
  if (error) {
    redirect('/login');
  }
  return <UserPage user={user} isLoading={isLoading} error={error} />;
};

export default UserContainer;
