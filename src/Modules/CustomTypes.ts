import { CommonModule } from './CommonModule';
import { CustomType, CustomTypeDraft, UpdateAction } from '../types'

export class CustomTypes extends CommonModule {
  protected entityType = 'types';

  public async create(customTypeDraft: CustomTypeDraft): Promise<CustomType> {
    const postRequest = {
      uri: this.request.types.build(),
      method: 'POST',
      headers: this.headers,
      body: customTypeDraft,
    };

    return (
      this.client
        .execute(postRequest)
        .then(response => response.body)
    );
  }

  public async updateByKey(key: string, actions: UpdateAction[]): Promise<CustomType> {
    const customType = await this.resolveKeyAndVersion(key, this.fetchByKey.bind(this));

    const postRequest = {
      uri: this.request.types.byKey(key).build(),
      method: 'POST',
      headers: this.headers,
      body: {
        version: customType.version,
        actions
      },
    };

    return (
      this.client
        .execute(postRequest)
        .then(response => response.body)
    );
  }
}
