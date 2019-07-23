import { CommonModule } from './Modules'
import { PagedQueryResult, Product } from './types';

export class Products extends CommonModule {
  protected entityType = 'products';

  public fetchAllByAttribute(name: string, value: string, page?: number, perPage?: number): Promise<PagedQueryResult<Product>> {
    const where = `masterData(current(masterVariant(attributes(name="${name}" and value="${value}"))))`;
    return this.fetchAll(page, perPage, where);
  }

  public async fetchByAttribute(name: string, value: string): Promise<Product> {
    const response = await this.fetchAllByAttribute(name, value, 1, 1, );
    return response.results[0];
  }

  public async fetchByVariantSku(sku: string): Promise<Product> {
    const where = `masterData(current(masterVariant(sku="${sku}")))`;
    const response = await this.fetchAll(1, 1, where);
    return response.results[0];
  }
}
