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
exports.getPageFromMagento = exports.setupRetryClient = void 0;
const client_js_1 = require("./lib/utils/client.js");
let client;
function setupRetryClient(config) {
    client = (0, client_js_1.setupAxiosRetryClient)(config.retries, config.delay);
}
exports.setupRetryClient = setupRetryClient;
function getPageFromMagento(pageId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (client) {
            const response = yield client.get(process.env.MAGENTO_URL + `/cmsPage/${pageId}`);
            return response;
        }
    });
}
exports.getPageFromMagento = getPageFromMagento;
