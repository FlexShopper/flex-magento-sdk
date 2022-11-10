"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientFactory = void 0;
const Axios = require('axios');
const axios_retry_1 = require("axios-retry");
class clientFactory {
    constructor() { }
    static GetInstance() {
        if (!clientFactory.instance) {
            clientFactory.instance = new clientFactory();
        }
        return clientFactory.instance;
    }
    getClient(config) {
        if (this.client === undefined) {
            this.client = Axios.create({
                baseURL: config.url,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            if (config.doRetry)
                this.getClientWithRetry(config);
            return this.client;
        }
        return this.client;
    }
    getClientWithRetry(config) {
        config.fixedDelay
            ? (0, axios_retry_1.default)(this.client, {
                retries: config.retries,
                retryDelay: (retryCount) => {
                    return config.retryDelay / 1000;
                },
            })
            : (0, axios_retry_1.default)(this.client, {
                retries: config.retries,
                retryDelay: axios_retry_1.default.exponentialDelay,
            });
    }
}
exports.clientFactory = clientFactory;
