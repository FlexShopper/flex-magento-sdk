"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modules = void 0;
const configurationProvider_1 = require("./lib/configurationProvider");
const magentoAPI_1 = require("./lib/magentoAPI");
exports.modules = { configurationProvider: configurationProvider_1.configurationProvider, getContents: magentoAPI_1.getContents };
exports.default = { modules: exports.modules };
