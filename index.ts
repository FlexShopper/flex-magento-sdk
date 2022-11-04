const Axios = require("axios");

type Page = {
	name: string,
	locales: [
		{
			language: string,
			pageId: string
		}
	]
}

const pages: [Page] = [
	{
		name: 'privacyPolicy',
		locales: [
			{
				language: 'en',
				pageId: '80'
			}
		]
	}
]

function lookupPageId(pageName: string, lang: string) {
	console.log('REQUEST DETAILS: ', {pageName, lang})
	const page = pages.find(page => {
		return page.name === pageName
	})

	const locale = page?.locales.find(l => {
		return l.language === lang
	})
	
	return locale?.pageId
}

export async function getPageFromMagento(pageName: string, lang: string) {
	const pageId = lookupPageId(pageName, lang)
	const result = await Axios.get('https://mcstaging.eboohome.com/rest/all/V1' + `/cmsPage/${pageId}`)
	return result
}
