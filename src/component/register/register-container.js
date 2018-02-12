import React from 'react'
import {Register} from '../../theme/register/registerTheme'


export const RegisterContainer = (({ children, ...otherProps }) => (
    <Register {...otherProps} >
      {children}
    </Register>
  ))