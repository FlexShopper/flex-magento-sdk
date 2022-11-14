export interface Configuration {
    url: string;
    doRetry: boolean;
    retries: number;
    //retryDelay is in miliseconds
    retryDelay?: number;
    fixedDelay?: boolean;
}
