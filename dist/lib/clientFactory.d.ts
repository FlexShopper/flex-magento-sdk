export interface Configuration {
    url: string;
    doRetry: boolean;
    retries: number;
    retryDelay?: number;
    fixedDelay?: boolean;
}
export declare function getClient(config: Configuration): any;
