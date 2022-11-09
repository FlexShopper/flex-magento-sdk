"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = void 0;
const Axios = require('axios');
const axios_retry_1 = require("axios-retry");
function getClient(config) {
    console.log('configuration', config);
    const client = Axios.create({
        baseURL: config.url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return config.doRetry ? getClientWithRetry(client, config) : client;
}
exports.getClient = getClient;
function getClientWithRetry(client, config) {
    return config.fixedDelay
        ? (0, axios_retry_1.default)(client, {
            retries: config.retries,
            retryDelay: (retryCount) => {
                return config.retryDelay / 1000;
            },
        })
        : (0, axios_retry_1.default)(client, {
            retries: config.retries,
            retryDelay: axios_retry_1.default.exponentialDelay,
        });
}
