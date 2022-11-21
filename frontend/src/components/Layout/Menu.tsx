import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

interface MenuProps {
  pagename: string;
  children?: React.ReactNode;
}

const Layout: FC<MenuProps> = ({ pagename }) => (
  <AppBar position="static">
    <nav>
      <Box className="navLinks">
        <div className="navLink">
          <Link to="caracters" className={pagename === 'caracters' ? 'selectedNavLink' : 'navLink'}>
            Caracters
          </Link>
        </div>
        <div className="navLink">
          <Link to="user" className={pagename === 'caracters' ? 'selectedNavLink' : 'navLink'}>
            User Info
          </Link>
        </div>
      </Box>
    </nav>
  </AppBar>
);

export default Layout;
