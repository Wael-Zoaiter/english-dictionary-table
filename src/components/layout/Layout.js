import React from 'react';

import { Header } from './Header';
import { LayoutWrapper } from './layout.style';


export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  )
}
