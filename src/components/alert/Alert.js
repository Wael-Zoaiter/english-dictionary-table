import React from 'react';

import { AlertStyled } from './alertStyled';


const Alert = ({ children }) => (
    <AlertStyled>
      {children}
    </AlertStyled>
  );

export default Alert;
