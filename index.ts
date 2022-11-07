const Axios = require("axios");
import axiosRetry from 'axios-retry';

type TranslatedPageMeta = {
	language: string,
	pageId: string
}

type PageMeta = {
	name: string,
	locales: [TranslatedPageMeta]
}

const pages: [PageMeta] = [
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

function lookupPageId(pageName: string, lang: string): TranslatedPageMeta | undefined {
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
	const pageMeta = lookupPageId(pageName, lang)

	if (pageMeta) {
		axiosRetry(Axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });
		const response = await Axios.get(process.env.APP_DESIGNATION + `/cmsPage/${pageMeta.pageId}`)
		return response
	}
}
