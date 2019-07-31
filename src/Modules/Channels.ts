import { CommonModule } from './CommonModule';

export class Channels extends CommonModule {
  protected entityType = 'channels';

  public async fetchByKey(key: string): Promise<any> {
    const fetchRequest = {
      uri: this.request[this.entityType as string].where(`key="${key}"`).build(),
      method: 'GET',
      headers: this.headers,
    };

    return this.client.execute(fetchRequest).then(({ body }) => body);
  }
}
