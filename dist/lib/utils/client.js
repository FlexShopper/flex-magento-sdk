"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAxiosRetryClient = void 0;
const Axios = require("axios");
const axios_retry_1 = require("axios-retry");
function setupAxiosRetryClient(retries, retryDelay) {
    retryDelay
        ? (0, axios_retry_1.default)(Axios, { retries, retryDelay })
        : (0, axios_retry_1.default)(Axios, { retries, retryDelay: axios_retry_1.default.exponentialDelay });
    return Axios;
}
exports.setupAxiosRetryClient = setupAxiosRetryClient;
