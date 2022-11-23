import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

import { authorizeUser, registerUser } from 'store/authSlice';
import { RootState, useAppDispatch } from 'store/store';
import { SignUp, SignIn } from 'components/Dialogs';
import { IAuth, IRegister } from 'interfaces/User';

interface MenuProps {
  pagename: string;
  children?: React.ReactNode;
}

const Menu: FC<MenuProps> = ({ pagename }) => {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const { currentUser } = useSelector((state: RootState) => state.authReducer);

  const dispatch = useAppDispatch();

  const handleSignInOpen = (isOpen: boolean) => {
    setSignInOpen(isOpen);
  };

  const handleSignUpOpen = (isOpen: boolean) => {
    setSignUpOpen(isOpen);
  };

  const submitSignIn = (values: IAuth) => {
    dispatch(authorizeUser(values));
    handleSignInOpen(false);
  };

  const submitSignUp = (values: IRegister) => {
    dispatch(registerUser(values));
    handleSignUpOpen(false);
  };

  return (
    <AppBar position="static">
      <nav>
        <Box className="nav-links">
          <div className="nav-link">
            <Link
              to="/characters"
              className={pagename === 'characters' ? 'nav-link selected-nav-link' : 'nav-link'}
            >
              Characters
            </Link>
          </div>
          {currentUser && (
            <div className="nav-link">
              <Link
                to="/user"
                className={pagename === 'user' ? 'nav-link selected-nav-link' : 'nav-link'}
              >
                User Info
              </Link>
            </div>
          )}
        </Box>
      </nav>
      <Box className="sign-in">
        <Button
          className="sign-in-button"
          variant="outlined"
          onClick={() => handleSignInOpen(true)}
        >
          Sign in
        </Button>
        <Button className="sign-up-button" onClick={() => handleSignUpOpen(true)}>
          Register
        </Button>
      </Box>
      <SignUp open={signUpOpen} handleSignUpOpen={handleSignUpOpen} submitSignUp={submitSignUp} />
      <SignIn open={signInOpen} handleSignInOpen={handleSignInOpen} submitSignIn={submitSignIn} />
    </AppBar>
  );
};

export default Menu;
