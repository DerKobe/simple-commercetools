import { CommonModule } from './Modules'
import { Order, PagedQueryResult, Sort } from "./types";

export class Orders extends CommonModule {
  protected entityType = 'orders';

  public async fetchAllExpanded(page?: number, perPage?: number, condition?: string, expansions?: string[], sort?: Sort): Promise<PagedQueryResult<Order>> {
    let uri = this.request[this.entityType as string];

    if (page) { uri = uri.page(page); }
    if (perPage) { uri = uri.page(perPage); }
    if (condition) { uri = uri.where(condition); }
    if (expansions) { expansions.forEach(expansion => uri = uri.expand(expansion)); }
    if (sort) { uri = uri.parse({ sort }); }

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

  public fetchExpandedById(id: string, expansions?: string[]): Promise<Order> {
    let uri = this.request().orders.byId(id);

    if (expansions) {
      expansions.forEach(expansion => uri = uri.expand(expansion))
    }

    const fetchRequest = {
      uri: uri.build(),
      method: 'GET',
      headers: this.headers,
    };

    return this.client.execute(fetchRequest).then(({ body }) => body);
  }
}
