import { CommonModule } from './CommonModule';
import { InventoryEntry, PagedQueryResult } from '../types';

export class InventoryEntries extends CommonModule {
  protected entityType = 'inventory';

  public fetchAllByChannelId(channelId: string): Promise<PagedQueryResult<InventoryEntry>> {
    const condition = `supplyChannel(typeId="channel" and id="${channelId}")`;
    return this.fetchAll(1, 500, condition);
  }

  public async fetchBySkuAndSupplyChannelKey(sku: string, supplyChannelKey: string): Promise<InventoryEntry> {
    const channel = await this.commercetools.channels.fetchByKey(supplyChannelKey);

    const fetchRequest = {
      uri: this.request.inventory.where(`sku="${sku}" and supplyChannel(typeId="channel" and id="${channel.id}")`).build(),
      method: 'GET',
      headers: this.headers,
    };

    return (
      this.client
        .execute(fetchRequest)
        .then(({ body: { results } }) => results[0])
    );
  }
}
