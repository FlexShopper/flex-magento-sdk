declare type RetryConfig = {
    retries: number;
    delay?: Function;
};
export declare function setupRetryClient(config: RetryConfig): void;
export declare function getPageFromMagento(pageId: string): Promise<any>;
export {};
