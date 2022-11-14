"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modules = void 0;
const magentoAPI_1 = require("./lib/magentoAPI");
exports.modules = { getPageContents: magentoAPI_1.getPageContents, getSectionContents: magentoAPI_1.getSectionContents };
exports.default = { modules: exports.modules };
