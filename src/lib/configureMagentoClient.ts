import { Configuration } from './clientFactory';

export class configureMagentoClient {
    static instance: configureMagentoClient;
    private static config: Configuration;

    public static configureMagentoClient(): configureMagentoClient {
        if (!configureMagentoClient.instance) {
            configureMagentoClient.instance = new configureMagentoClient();
        }
        return configureMagentoClient.instance;
    }

    public static setConfiguration(config: Configuration) {
        this.config = config;
    }

    public static getConfiguration() {
        return this.config;
    }
}

export default configureMagentoClient;
