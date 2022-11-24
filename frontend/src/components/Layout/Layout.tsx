import React from 'react';
import { FC } from 'react';
import Box from '@mui/material/Box';

import Menu from './Menu';
import './style.scss';

interface LayoutProps {
  pageName: string;
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ pageName, children }) => (
  <div>
    <Menu pageName={pageName} />
    <Box className="page-content">{children}</Box>
  </div>
);

export default Layout;
