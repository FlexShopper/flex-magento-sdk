import { Configuration } from '../model/configuration';
export declare class clientFactory {
    static instance: clientFactory;
    private clientMap;
    private constructor();
    static GetInstance(): clientFactory;
    getClient(config: Configuration, appName: string): any;
    private setClientWithRetry;
}
