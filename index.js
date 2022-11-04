"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageFromMagento = void 0;
const Axios = require("axios");
const pages = [
    {
        name: 'privacyPolicy',
        locales: [
            {
                language: 'en',
                pageId: '80'
            }
        ]
    }
];
function lookupPageId(pageName, lang) {
    console.log('REQUEST DETAILS: ', { pageName, lang });
    const page = pages.find(page => {
        return page.name === pageName;
    });
    console.log(page);
    const locale = page === null || page === void 0 ? void 0 : page.locales.find(l => {
        return l.language === lang;
    });
    console.log(locale);
    return locale === null || locale === void 0 ? void 0 : locale.pageId;
}
function getPageFromMagento(pageName, lang) {
    return __awaiter(this, void 0, void 0, function* () {
        const pageId = lookupPageId(pageName, lang);
        const result = yield Axios.get('https://mcstaging.eboohome.com/rest/all/V1' + `/cmsPage/${pageId}`);
        return result;
    });
}
exports.getPageFromMagento = getPageFromMagento;
