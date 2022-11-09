"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureMagentoClient = void 0;
class configureMagentoClient {
    static configureMagentoClient() {
        if (!configureMagentoClient.instance) {
            configureMagentoClient.instance = new configureMagentoClient();
        }
        return configureMagentoClient.instance;
    }
    static setConfiguration(config) {
        this.config = config;
    }
    static getConfiguration() {
        return this.config;
    }
}
exports.configureMagentoClient = configureMagentoClient;
exports.default = configureMagentoClient;
