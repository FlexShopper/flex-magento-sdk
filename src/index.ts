import { configureMagentoClient } from './lib/configureMagentoClient';
import { Configuration, getClient } from './lib/clientFactory';

export async function getContents(pageId: string, config: Configuration) {
    const client = getClient(config);
    const response = await client.get(`/cmsPage/${pageId}`);
    return response;
}

export const magento = { configureMagentoClient, getContents };
export default { magento };
