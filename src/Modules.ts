/* tslint:disable:max-classes-per-file */
import { Commercetools } from "./Commeretools";
import { Entity, PagedQueryResult, Sort, UpdateAction } from './types';

export abstract class BaseModule {
  protected readonly commercetools;
  protected readonly request;
  protected readonly client;
  protected headers = { Accept: 'application/json', 'Content-Type': 'application/json' };
  protected entityType?: string;

  constructor(commercetools: Commercetools) {
    this.commercetools = commercetools;
    this.request = commercetools.request;
    this.client = commercetools.client;
  }
}

export abstract class CommonModule extends BaseModule {
  protected entityType?: string;

  public async fetchAll(page?: number, perPage?: number, condition?: string, sort?: Sort): Promise<PagedQueryResult<any>> {
    let uri = this.request[this.entityType as string];

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

  public async fetch(condition): Promise<any> {
    const response = await this.fetchAll(1, 1, condition);
    return response.results[0];
  }

  public async fetchByKey(key: string): Promise<any> {
    const fetchRequest = {
      uri: this.request[this.entityType as string].byKey(key).build(),
      method: 'GET',
      headers: this.headers,
    };

    return this.client.execute(fetchRequest).then(({ body }) => body);
  }

  public async fetchById(id: string): Promise<any> {
    const fetchRequest = {
      uri: this.request[this.entityType as string].byId(id).build(),
      method: 'GET',
      headers: this.headers,
    };

    return this.client.execute(fetchRequest).then(({ body }) => body);
  }

  public async delete(keyOrEntity): Promise<void> {
    const { id, version } = await this.resolveKeyAndVersion(keyOrEntity, this.fetchByKey);

    const createRequest = {
      uri: this.request[this.entityType as string].byId(id).withVersion(version).build(),
      method: 'DELETE',
      headers: this.headers,
    };

    return this.client.execute(createRequest);
  }

  public async deleteById(id: string): Promise<void> {
    const { version } = await this.fetchById(id);

    const deleteRequest = {
      uri: this.request[this.entityType as string].byId(id).withVersion(version).build(),
      method: 'DELETE',
      headers: this.headers,
    };

    return this.client.execute(deleteRequest);
  }

  public async create(draft: any): Promise<any> {
    const postRequest = {
      uri: this.request[this.entityType as string].build(),
      method: 'POST',
      headers: this.headers,
      body: draft,
    };

    return (
      this.client
        .execute(postRequest)
        .then(response => response.body)
    );
  }

  public async update(keyOrEntity: string | Entity, actions: UpdateAction[]): Promise<void> {
    const { id, version } = await this.resolveKeyAndVersion(keyOrEntity, this.fetchByKey);

    const updateRequest = {
      uri: this.request[this.entityType as string].byId(id).withVersion(version).build(),
      method: 'POST',
      headers: this.headers,
      body: { version, actions },
    };

    return this.client.execute(updateRequest);
  }

  protected async resolveKeyAndVersion(keyOrEntity: string | Entity, fetchByKey: Function): Promise<any> {
    switch (typeof keyOrEntity) {
      case 'object':
        return new Promise(resolve => {
          resolve({
            key: (keyOrEntity as Entity).key,
            version: (keyOrEntity as Entity).version,
          });
        });

      case 'string':
        return fetchByKey(keyOrEntity)
          .then((entity: Entity) => ({
            key: keyOrEntity,
            version: entity.version,
          }));

      default:
        throw new Error(`Invalid value for keyOrEntity: ${JSON.stringify(keyOrEntity)}`);
    }
  }
}
