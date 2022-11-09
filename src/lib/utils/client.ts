const Axios = require("axios");
import axiosRetry from "axios-retry";

export function setupAxiosRetry(
  retries: number,
  retryDelay?: any
) {
  retryDelay
    ? axiosRetry(Axios, { retries, retryDelay })
    : axiosRetry(Axios, { retries });

  return Axios;
}
