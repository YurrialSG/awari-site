import styled, { css } from 'styled-components'

export const LinkComponentText = styled.a`
	${({ theme }) => css`
		font-family: 'Aeonik-Medium';
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		letter-spacing: 0.01em;
		color: ${theme.colors.grayDark};
		cursor: pointer;

		&:hover,
		&:focus {
			color: ${theme.colors.blue};
		}
	`}
`
