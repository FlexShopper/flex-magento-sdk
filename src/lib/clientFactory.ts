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

export function getClient(config: Configuration) {
    const client = Axios.create({
        baseURL: config.url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    return config.doRetry ? getClientWithRetry(client, config) : client;
}

function getClientWithRetry(client: any, config: Configuration) {
    return config.fixedDelay
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
