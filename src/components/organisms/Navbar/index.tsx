import Container from '@components/atoms/Container'
import Link from '@components/atoms/Link'
import { Row, Col } from 'react-simple-flex-grid'
import { Navbar } from './style'

export default function Home() {
	return (
		<Navbar>
			<Container>
				<Row>
					<Col span={6}>
						<p>LOGO</p>
					</Col>
					<Col span={6}>
						<Row gutter={40}>
							<Col>
								<Link href="/">Link</Link>
							</Col>
							<Col>
								<Link href="/">Link</Link>
							</Col>
							<Col>
								<Link href="/">Link</Link>
							</Col>
							<Col>
								<Link href="/">Link</Link>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</Navbar>
	)
}
