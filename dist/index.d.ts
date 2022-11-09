import { configureMagentoClient } from './lib/configureMagentoClient';
import { Configuration } from './lib/clientFactory';
export declare function getContents(pageId: string, config: Configuration): Promise<any>;
export declare const magento: {
    configureMagentoClient: typeof configureMagentoClient;
    getContents: typeof getContents;
};
declare const _default: {
    magento: {
        configureMagentoClient: typeof configureMagentoClient;
        getContents: typeof getContents;
    };
};
export default _default;
