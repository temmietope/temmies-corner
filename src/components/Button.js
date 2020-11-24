import React from 'react'
import { ButtonWrapper } from '../elements'

export default function Button({children,href}) {
    return (
        <ButtonWrapper to={href}>{children}</ButtonWrapper>
    )
}
