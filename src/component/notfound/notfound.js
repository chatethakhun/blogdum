import React from 'react'
import { Container } from '../../theme/notfound/notfoundTheme'


export const NotFoundContainer = (({ children, ...otherProps }) => (
    <Container>
        {children}
    </Container>
))