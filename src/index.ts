import { setupAxiosRetryClient } from "./lib/utils/client";

type RetryConfig = {
	retries: number,
	delay?: Function
}

let client: any;
export function setupRetryClient(config: RetryConfig) {
  client = setupAxiosRetryClient(config.retries, config.delay);
}

export async function getPageFromMagento(pageId: string) {
  if (client) {
    const response = await client.get(
      process.env.MAGENTO_URL + `/cmsPage/${pageId}`
    );
    return response;
  } else {
	return { error: { message: 'You must setup the retry client before requesting pages.'}}
  }
}
