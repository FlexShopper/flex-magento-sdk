"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientFactory = void 0;
const Axios = require('axios');
const axios_retry_1 = require("axios-retry");
const configurationProvider_1 = require("./configurationProvider");
class clientFactory {
    constructor() {
        this.clientMap = new Map();
    }
    static GetInstance() {
        if (!clientFactory.instance) {
            clientFactory.instance = new clientFactory();
        }
        return clientFactory.instance;
    }
    getClient(appName) {
        if (this.clientMap.has(appName)) {
            console.log('clientFactory', `client already exists for ${appName}`);
            return this.clientMap.get(appName);
        }
        const config = configurationProvider_1.default.getConfiguration();
        if (config === undefined)
            throw new Error('configuration is not provided');
        if ((config === null || config === void 0 ? void 0 : config.url) === undefined)
            throw new Error('configuration:url is not provided');
        const client = Axios.create({
            baseURL: config.url,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if (config.doRetry)
            this.setClientWithRetry(config, client);
        this.clientMap.set(appName, client);
        console.log('clientFactory', `new client created for ${appName}`);
        return client;
    }
    setClientWithRetry(config, client) {
        config.fixedDelay
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
}
exports.clientFactory = clientFactory;
