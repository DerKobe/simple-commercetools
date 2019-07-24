import { CustomObject, CustomObjectDraft, PagedQueryResult, Sort } from '../types';
import { BaseModule } from './BaseModule';

export class CustomObjects extends BaseModule {
  public async fetchAll(page?: number, perPage?: number, condition?: string, sort?: Sort): Promise<PagedQueryResult<CustomObject>> {
    let uri = this.request.customObjects;

    if (page) {uri = uri.page(page);}
    if (perPage) {uri = uri.page(perPage);}
    if (condition) {uri = uri.where(condition);}
    if (sort) {uri = uri.parse({ sort })}

    const fetchRequest = {
      uri: uri.build(),
      method: 'GET',
      headers: this.headers,
    };

    return (
      this.client
        .execute(fetchRequest)
        .then(response => response.body)
    );
  }

  public async fetchById(id: string): Promise<CustomObject> {
    const fetchRequest = {
      uri: this.request.customObjects.byId(id).build(),
      method: 'GET',
      headers: this.headers,
    };

    return (
      this.client
        .execute(fetchRequest)
        .then(response => response.body)
    );
  }

  public async fetchByKeyAndContainer(key: string, container: string): Promise<CustomObject> {
    const condition = `key="${key}" AND container="${container}"`;
    return (await this.fetchAll(1, 1, condition)).results[0] as CustomObject;
  }

  public async save(customObjectDraft: CustomObjectDraft): Promise<CustomObject> {
    const postRequest = {
      uri: this.request.customObjects.build(),
      method: 'POST',
      headers: this.headers,
      body: customObjectDraft,
    };

    return (
      this.client
        .execute(postRequest)
        .then(response => response.body)
    );
  }
}
