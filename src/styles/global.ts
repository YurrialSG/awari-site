import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html{
		scroll-behavior: smooth;
	}

	p+p {
		margin: 0;
	}

	button {
		font-family: unset;
		font: unset;
	}

	body {
		background: ${props => props.theme.colors.branco};
		color: ${props => props.theme.colors.preto};
		font-family: 'Aeonik', sans-serif;
	}

	body,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
	}

	a {
		text-decoration: none !important;
		display: flex;

		&:hover {
			text-decoration: none;
		}
	}

	li{
		list-style: none;
	}

	button {
		font-family: 'Aeonik', sans-serif;
		cursor: pointer;
	}

	input {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

	.overflow-hidden {
		overflow: hidden !important;
	}

	.relative {
		position: relative;
	}

	.width-100 {
		width: 100% !important;
	}

	.hidden-sm,
	.hidden-md,
	.hidden-lg {
		display: flex;
	}

	.hidden-xs,
	.visible-xs,
	.visible-sm,
	.visible-md,
	.visible-lg {
		display: none;
	}

	@media (min-width: 540px) {
		.visible-xs {
			display: flex;
		}
	}

	@media (min-width: 768px) {
		.hidden-sm {
			display: none;
		}

		.visible-sm,
		.hidden-xs {
			display: flex;
		}
	}

	@media (min-width: 992px) {
		.hidden-md {
			display: none;
		}

		.visible-md {
			display: flex;
		}
	}

	@media (min-width: 1200px) {
		.hidden-lg {
			display: none;
		}

		.visible-lg {
			display: flex;
		}
	}
`
