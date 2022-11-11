import { configurationProvider } from './lib/configurationProvider';
import { getPageContents, getSectionContents } from './lib/magentoAPI';

export const modules = { configurationProvider, getPageContents, getSectionContents };
export default { modules };
