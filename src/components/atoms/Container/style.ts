import styled, { css } from 'styled-components'
import { getMediaQuery } from '@utils/index'

export const StyledContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		width: 90%;
		max-width: 1041px;
		margin: 0 auto;
		z-index: ${props => props.theme.zIndex || 1};
		position: relative;

		${getMediaQuery(theme.breakpoints[3])} {
			width: 100%;
		}
	`}
`
