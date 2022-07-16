import styled, { css } from 'styled-components'

export const ButtonComponent = styled.button`
	${({ theme }) => css`
		display: flex;
		justify-content: center;
		align-items: center;
		background: ${theme.colors.blue};
		box-shadow: 0px 4px 3px rgba(22, 115, 250, 0.12);
		border-radius: 100px;
		font-family: 'Aeonik-Bold';
		font-weight: 700;
		font-size: 16px;
		line-height: 140%;
		letter-spacing: 0.01em;
		color: ${theme.colors.grayWhite};
		padding: 8px 0;
		height: 40px;
		border: none;
	`}
`
