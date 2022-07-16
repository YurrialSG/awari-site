import styled, { css } from 'styled-components'

export const Navbar = styled.header`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		background-color: ${theme.colors.grayWhite};
		position: sticky;
		top: 0;
		width: 100%;
		padding: 23.5px 0;
	`}
`
