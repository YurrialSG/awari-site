const title = 'Porteira Adentro'
const description = 'Porteira Adentro Descrição'

const SEO = {
	title,
	description,
	canonical: 'https://site.porteiraadentro.com.br/',
	openGraph: {
		type: 'website',
		locale: 'pt_BR',
		url: 'https://site.porteiraadentro.com.br/',
		title,
		description,
		images: [
			{
				url: 'https://site.porteiraadentro.com.br/banner.png',
				alt: title,
				width: 1280,
				height: 720
			}
		]
	}
}

export default SEO
