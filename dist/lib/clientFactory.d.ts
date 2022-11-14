export declare class clientFactory {
    static instance: clientFactory;
    private clientMap;
    private constructor();
    static GetInstance(): clientFactory;
    getClient(appName: string): any;
    private setClientWithRetry;
}
