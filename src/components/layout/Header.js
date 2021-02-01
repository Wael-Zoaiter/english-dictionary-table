import React from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderWrapper, Nav } from './layout.style';


export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <NavLink to="/">M</NavLink>
      </Nav>
    </HeaderWrapper>
  )
}
