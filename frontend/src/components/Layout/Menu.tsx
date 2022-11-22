import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { SignUp, SignIn } from 'components/Dialogs';

interface MenuProps {
  pagename: string;
  children?: React.ReactNode;
}

const Layout: FC<MenuProps> = ({ pagename }) => {
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleSignInOpen = (isOpen: boolean) => {
    setSignInOpen(isOpen);
  };

  const handleSignUpOpen = (isOpen: boolean) => {
    setSignUpOpen(isOpen);
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
          <div className="nav-link">
            <Link
              to="/user"
              className={pagename === 'user' ? 'nav-link selected-nav-link' : 'nav-link'}
            >
              User Info
            </Link>
          </div>
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
      <SignUp open={signUpOpen} handleSignUpOpen={handleSignUpOpen} />
      <SignIn open={signInOpen} handleSignInOpen={handleSignInOpen} />
    </AppBar>
  );
};

export default Layout;
