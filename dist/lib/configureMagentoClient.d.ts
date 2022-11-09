import { Configuration } from './clientFactory';
export declare class configureMagentoClient {
    static instance: configureMagentoClient;
    private static config;
    static configureMagentoClient(): configureMagentoClient;
    static setConfiguration(config: Configuration): void;
    static getConfiguration(): Configuration;
}
export default configureMagentoClient;
