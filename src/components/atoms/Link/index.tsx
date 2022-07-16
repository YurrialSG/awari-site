import Link from 'next/link'
import { LinkComponentText } from './style'

type LinkProps = {
	children: string | React.ReactNode
	href: string
}

export default function LinkComponent({ children, href }: LinkProps) {
	return (
		<Link href={href}>
			<LinkComponentText>{children}</LinkComponentText>
		</Link>
	)
}
