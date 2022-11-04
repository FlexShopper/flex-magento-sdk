const Axios = require("axios");

type TranslatedPage = {
	language: string,
	pageId: string
}

type Page = {
	name: string,
	locales: [TranslatedPage]
}

const pages: [Page] = [
	{
		name: 'privacy-policy',
		locales: [
			{
				language: 'en',
				pageId: '80'
			}
		]
	}
]

function lookupPageId(pageName: string, lang: string): TranslatedPage | undefined {
	const page = pages.find(page => {
		return page.name === pageName
	})

	const translatedPage = page?.locales.find(locale => {
		return locale.language === lang
	})

	if (translatedPage) {
		return translatedPage
	} else {
		return undefined
	}
}

export async function getPageFromMagento(pageName: string, lang: string) {
	const page = lookupPageId(pageName, lang)

	if (page) {
		const response = await Axios.get('https://mcstaging.eboohome.com/rest/all/V1' + `/cmsPage/${page.pageId}`)
		return response
	}
}
