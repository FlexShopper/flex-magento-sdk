const Axios = require('axios');
import axiosRetry from 'axios-retry';

export interface Configuration {
    url: string;
    doRetry: boolean;
    retries: number;
    //retryDelay is in miliseconds
    retryDelay?: number;
    fixedDelay?: boolean;
}

export class clientFactory {
    static instance: clientFactory;
    private client: any;

    private constructor() {}

    public static GetInstance(): clientFactory {
        if (!clientFactory.instance) {
            clientFactory.instance = new clientFactory();
        }
        return clientFactory.instance;
    }

    public getClient(config: Configuration) {
        if (this.client === undefined) {
            console.log('clientFactory', 'client created');
            this.client = Axios.create({
                baseURL: config.url,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            if (config.doRetry) this.setClientWithRetry(config);
            return this.client;
        }
        console.log('clientFactory', 'client already exists');
        return this.client;
    }

    private setClientWithRetry(config: Configuration) {
        config.fixedDelay
            ? axiosRetry(this.client, {
                  retries: config.retries,
                  retryDelay: (retryCount) => {
                      return config.retryDelay / 1000;
                  },
              })
            : axiosRetry(this.client, {
                  retries: config.retries,
                  retryDelay: axiosRetry.exponentialDelay,
              });
    }
}
