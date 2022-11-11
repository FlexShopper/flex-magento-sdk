import { Configuration, clientFactory } from './clientFactory';
import configurationProvider from './configurationProvider';

export async function getPageContents(pageId: string) {
    const config: Configuration = configurationProvider.getInstance()?.getConfiguration();

    if (config === undefined) throw new Error('configuration is not provided');

    if (config?.url === undefined) throw new Error('configuration:url is not provided');

    const instance = clientFactory.GetInstance();
    const client = instance.getClient(config);
    const response = await client.get(`/cmsPage/${pageId}`);
    return response;
}

export async function getSectionContents(sectionId: string) {
    const config: Configuration = configurationProvider.getInstance()?.getConfiguration();

    if (config === undefined) throw new Error('configuration is not provided');

    if (config?.url === undefined) throw new Error('configuration:url is not provided');

    const instance = clientFactory.GetInstance();
    const client = instance.getClient(config);
    const response = await client.get(`/cmsBlock/${sectionId}`);
    return response;
}
