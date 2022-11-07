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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageFromMagento = void 0;
const Axios = require("axios");
const axios_retry_1 = __importDefault(require("axios-retry"));
const pages = [
    {
        name: 'privacy-policy',
        locales: [
            {
                language: 'en',
                pageId: '80'
            }
        ]
    }
];
function lookupPageId(pageName, lang) {
    const page = pages.find(page => {
        return page.name === pageName;
    });
    const translatedPage = page === null || page === void 0 ? void 0 : page.locales.find(locale => {
        return locale.language === lang;
    });
    if (translatedPage) {
        return translatedPage;
    }
    else {
        return undefined;
    }
}
function getPageFromMagento(pageName, lang) {
    return __awaiter(this, void 0, void 0, function* () {
        const pageMeta = lookupPageId(pageName, lang);
        if (pageMeta) {
            (0, axios_retry_1.default)(Axios, { retries: 3, retryDelay: axios_retry_1.default.exponentialDelay });
            const response = yield Axios.get(process.env.APP_DESIGNATION + `/cmsPage/${pageMeta.pageId}`);
            return response;
        }
    });
}
exports.getPageFromMagento = getPageFromMagento;
