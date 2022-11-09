declare type RetryConfig = {
    url: string;
    retries: number;
    retryEnabled: boolean;
    retryDelay?: Function;
};
export declare function setupClient(config: RetryConfig): void;
export declare function getPageFromMagento(pageId: string): Promise<any>;
export {};
