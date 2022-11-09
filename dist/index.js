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
exports.getPageFromMagento = exports.setupClient = void 0;
const client_1 = require("./lib/utils/client");
let client;
let url;
function setupClient(config) {
    url = config.url;
    config.retryEnabled
        ? (client = (0, client_1.setupAxiosRetry)(config.retries, config.retryDelay))
        : (client = (0, client_1.setupAxiosRetry)(0));
}
exports.setupClient = setupClient;
function getPageFromMagento(pageId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (client || url) {
            const response = yield client.get(url + `/cmsPage/${pageId}`);
            return response;
        }
        else {
            return {
                error: {
                    message: "You must setup the retry client before requesting pages.",
                },
            };
        }
    });
}
exports.getPageFromMagento = getPageFromMagento;
