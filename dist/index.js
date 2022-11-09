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
exports.magento = exports.getContents = void 0;
const configureMagentoClient_1 = require("./lib/configureMagentoClient");
const clientFactory_1 = require("./lib/clientFactory");
function getContents(pageId, config) {
    return __awaiter(this, void 0, void 0, function* () {
        debugger;
        console.log('configuration', config);
        const client = (0, clientFactory_1.getClient)(config);
        const response = yield client.get(`/cmsPage/${pageId}`);
        debugger;
        return response;
    });
}
exports.getContents = getContents;
exports.magento = { configureMagentoClient: configureMagentoClient_1.configureMagentoClient, getContents };
exports.default = { magento: exports.magento };
