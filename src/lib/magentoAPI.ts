import { clientFactory } from './clientFactory';

export async function getPageContents(pageId: string, appName: string) {
    const instance = clientFactory.GetInstance();
    const client = instance.getClient(appName);
    const response = await client.get(`/cmsPage/${pageId}`);
    return response;
}

export async function getSectionContents(sectionId: string, appName: string) {
    const instance = clientFactory.GetInstance();
    const client = instance.getClient(appName);
    const response = await client.get(`/cmsBlock/${sectionId}`);
    return response;
}
