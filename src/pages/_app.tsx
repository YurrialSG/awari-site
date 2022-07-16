import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'styled-components'
import SEO from '../../next-seo-config'

import Navbar from '@organisms/Navbar'
import Footer from '@organisms/Footer'

import GlobalStyles from '@styles/global'
import theme from '@styles/theme'
import 'react-simple-flex-grid/lib/main.css'
import '@styles/fonts.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<DefaultSeo {...SEO} />
			<Navbar />
			<Component {...pageProps} />
			<Footer />
			<GlobalStyles />
		</ThemeProvider>
	)
}
