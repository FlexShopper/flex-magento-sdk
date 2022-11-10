export interface Configuration {
    url: string;
    doRetry: boolean;
    retries: number;
    retryDelay?: number;
    fixedDelay?: boolean;
}
export declare class clientFactory {
    static instance: clientFactory;
    private client;
    private constructor();
    static GetInstance(): clientFactory;
    getClient(config: Configuration): any;
    private getClientWithRetry;
}
