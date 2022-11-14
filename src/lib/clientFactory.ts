const Axios = require('axios');
import axiosRetry from 'axios-retry';
import { Configuration } from '../model/configuration';
import configurationProvider from './configurationProvider';

export class clientFactory {
    static instance: clientFactory;
    private clientMap: Map<string, any> = new Map<string, any>();

    private constructor() {}

    public static GetInstance(): clientFactory {
        if (!clientFactory.instance) {
            clientFactory.instance = new clientFactory();
        }
        return clientFactory.instance;
    }

    public getClient(appName: string) {
        if (this.clientMap.has(appName)) {
            console.log('clientFactory', `client already exists for ${appName}`);
            return this.clientMap.get(appName);
        }

        const config: Configuration = configurationProvider.getConfiguration();
        if (config === undefined) throw new Error('configuration is not provided');
        if (config?.url === undefined) throw new Error('configuration:url is not provided');

        const client = Axios.create({
            baseURL: config.url,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if (config.doRetry) this.setClientWithRetry(config, client);

        this.clientMap.set(appName, client);
        console.log('clientFactory', `new client created for ${appName}`);
        return client;
    }

    private setClientWithRetry(config: Configuration, client: any) {
        config.fixedDelay
            ? axiosRetry(client, {
                  retries: config.retries,
                  retryDelay: (retryCount) => {
                      return config.retryDelay / 1000;
                  },
              })
            : axiosRetry(client, {
                  retries: config.retries,
                  retryDelay: axiosRetry.exponentialDelay,
              });
    }
}
