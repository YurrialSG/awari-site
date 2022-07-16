import React from 'react'

import { StyledContainer } from './style'

function Container(props) {
	const { children } = props
	return <StyledContainer {...props}>{children}</StyledContainer>
}

export default Container
