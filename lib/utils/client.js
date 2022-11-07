"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAxiosRetryClient = void 0;
const Axios = require("axios");
const axios_retry_1 = __importDefault(require("axios-retry"));
function setupAxiosRetryClient(retries, retryDelay) {
    retryDelay
        ? (0, axios_retry_1.default)(Axios, { retries, retryDelay })
        : (0, axios_retry_1.default)(Axios, { retries, retryDelay: axios_retry_1.default.exponentialDelay });
    return Axios;
}
exports.setupAxiosRetryClient = setupAxiosRetryClient;
