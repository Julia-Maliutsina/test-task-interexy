import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface MenuProps {
  pagename: string;
  children?: React.ReactNode;
}

const Layout: FC<MenuProps> = ({ pagename }) => (
  <AppBar position="static">
    <nav>
      <Box className="nav-links">
        <div className="nav-link">
          <Link
            to="/caracters"
            className={pagename === 'caracters' ? 'selected-nav-link' : 'nav-link'}
          >
            Caracters
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/user" className={pagename === 'caracters' ? 'selected-nav-link' : 'nav-link'}>
            User Info
          </Link>
        </div>
      </Box>
    </nav>
    <Box className="sign-in">
      <Button className="sign-in-button" variant="outlined" href="#outlined-buttons">
        Sign in
      </Button>
      <Button className="sign-up-button" href="registration">
        Register
      </Button>
    </Box>
  </AppBar>
);

export default Layout;
