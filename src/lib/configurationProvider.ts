import { Configuration } from './clientFactory';

export class configurationProvider {
    static instance: configurationProvider;
    private config: Configuration;

    public static getInstance(): configurationProvider {
        if (!configurationProvider.instance) {
            configurationProvider.instance = new configurationProvider();
        }
        return configurationProvider.instance;
    }

    public setConfiguration(config: Configuration) {
        this.config = config;
    }

    public getConfiguration() {
        return this.config;
    }
}

export default configurationProvider;
