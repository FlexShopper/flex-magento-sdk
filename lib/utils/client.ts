const Axios = require("axios");
import axiosRetry from "axios-retry";

export function setupAxiosRetryClient(retries: number, retryDelay?: any) {
  retryDelay
    ? axiosRetry(Axios, { retries, retryDelay })
    : axiosRetry(Axios, { retries, retryDelay: axiosRetry.exponentialDelay });

  return Axios;
}
