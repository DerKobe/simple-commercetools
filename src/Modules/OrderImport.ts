import { Order, OrderImportDraft } from "../types";
import { BaseModule } from "./BaseModule";

export class OrderImport extends BaseModule {
  public async create(draft: OrderImportDraft): Promise<Order> {
    const postRequest = {
      uri: this.request.orderImport.build(),
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
}
