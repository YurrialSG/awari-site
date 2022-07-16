import { ButtonComponent } from './style'

type ButtonProps = {
	onClick?: (unknown) => unknown
	children: string | React.ReactNode
	type?: 'button' | 'submit' | 'reset'
	className?: string
	href?: string
}

export default function Button(props: ButtonProps) {
	const { children } = props

	return (
		<ButtonComponent {...props}>
			<a>{children}</a>
		</ButtonComponent>
	)
}
