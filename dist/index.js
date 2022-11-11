"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modules = void 0;
const configurationProvider_1 = require("./lib/configurationProvider");
const magentoAPI_1 = require("./lib/magentoAPI");
exports.modules = { configurationProvider: configurationProvider_1.configurationProvider, getPageContents: magentoAPI_1.getPageContents, getSectionContents: magentoAPI_1.getSectionContents };
exports.default = { modules: exports.modules };
