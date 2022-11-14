import { Configuration } from '../model/configuration';

export class configurationProvider {
    public static getConfiguration() {
        const config: Configuration = {
            doRetry: Boolean(process.env.MAGENTO_DORETRY),
            url: process.env.MAGENTO_API_URL,
            retries: Number(process.env.MAGENTO_RETRIES),
            fixedDelay: Boolean(process.env.MAGENTO_FIXED_DELAY),
            retryDelay: Number(process.env.MAGENTO_RETRY_DELAY),
        };
        return config;
    }
}

export default configurationProvider;
