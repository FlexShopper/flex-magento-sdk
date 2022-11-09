import { setupAxiosRetry } from "./lib/utils/client";

type RetryConfig = {
  url: string;
  retries: number;
  retryEnabled: false;
  retryDelay?: Function;
};

let client: any;
let url: string;

export function setupClient(config: RetryConfig) {
  url = config.url;
  config.retryEnabled
    ? (client = setupAxiosRetry(config.retries, config.retryDelay))
    : (client = setupAxiosRetry(0));
}

export async function getPageFromMagento(pageId: string) {
  if (client || url) {
    const response = await client.get(url + `/cmsPage/${pageId}`);
    return response;
  } else {
    return {
      error: {
        message: "You must setup the retry client before requesting pages.",
      },
    };
  }
}
