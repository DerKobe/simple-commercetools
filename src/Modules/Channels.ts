import { Channel, ChannelDraft } from '../types';
import { CommonModule } from './CommonModule';

export class Channels extends CommonModule<Channel, ChannelDraft> {
  protected entityType = 'channels';

  public async fetchByKey(key: string): Promise<Channel> {
    const fetchRequest = {
      uri: this.request[this.entityType as string].where(`key="${key}"`).build(),
      method: 'GET',
      headers: this.headers,
    };

    return this.client.execute(fetchRequest).then(({ body }) => body.results[0]);
  }
}
