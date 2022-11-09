"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAxiosRetry = void 0;
const Axios = require("axios");
const axios_retry_1 = require("axios-retry");
function setupAxiosRetry(retries, retryDelay) {
    retryDelay
        ? (0, axios_retry_1.default)(Axios, { retries, retryDelay })
        : (0, axios_retry_1.default)(Axios, { retries });
    return Axios;
}
exports.setupAxiosRetry = setupAxiosRetry;
