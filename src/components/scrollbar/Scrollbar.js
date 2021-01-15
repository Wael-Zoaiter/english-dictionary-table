import React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';

import PerfectScrollbar from 'react-perfect-scrollbar'


export const Scrollbar = ({ children, ...props }) => {
  return (
    <PerfectScrollbar {...props}>
      {children}
    </PerfectScrollbar>
  )
}
