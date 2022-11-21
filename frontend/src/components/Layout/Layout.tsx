import React from 'react';
import { FC } from 'react';
import Box from '@mui/material/Box';

import Menu from './Menu';
import './style.scss';

interface LayoutProps {
  pagename: string;
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ pagename, children }) => (
  <div>
    <Menu pagename={pagename} />
    <Box>{children}</Box>
  </div>
);

export default Layout;
