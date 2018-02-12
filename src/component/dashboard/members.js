import React from 'react'
import { Container } from '../../theme/dashboard/member-theme.js'
export const MemberContainer = (({ children, ...otherProps }) => (
    <Container>
        {children}
    </Container>
))