import { BaseModule } from './Modules';
import { PagedQueryResult } from './types';

export class ProductProjections extends BaseModule {
  public async fetchBySku(sku: string, marked?: boolean): Promise<any> { // TODO define ProductProjection interface
    let uri = this.request.productProjectionsSearch.filterByQuery(`variants.sku:"${sku}"`).page(1).perPage(1);

    if (marked) {
      uri = uri.markMatchingVariants();
    }

    const fetchRequest = {
      uri: uri.build(),
      method: 'GET',
      headers: this.headers,
    };

    return (
      this.client
        .execute(fetchRequest)
        .then(response => (response.body as PagedQueryResult<any>).results[0])
    );
  }

  public async search(searchTerm: string, locale: string, filterByProductTypeKey?: string): Promise<PagedQueryResult<any>> { // TODO define ProductProjection interface
    let uri = this.request.productProjectionsSearch.markMatchingVariants().text(searchTerm, locale);

    if (filterByProductTypeKey) {
      const fetchProductTypeRequest = {
        uri: this.request.productTypes.byKey(filterByProductTypeKey).build(),
        method: 'GET',
        headers: this.headers,
      };
      const productTypeId = await this.client.execute(fetchProductTypeRequest).then(response => response.body.id);
      uri = uri.filterByQuery(`productType.id:"${productTypeId}"`)
    }

    const fetchRequest = {
      uri: uri.build(),
      method: 'GET',
      headers: this.headers,
    };

    return (
      this.client
        .execute(fetchRequest)
        .then(response => (response.body as PagedQueryResult<any>))
    );
  }

  public async getAllPossibleValuesForAttribute(attributeName: string): Promise<string[]> {
    const facetSelector = `variants.attributes.${attributeName}`;

    const fetchRequest = {
      uri: this.request.productProjectionsSearch.facet(facetSelector).page(1).perPage(1).build(),
      method: 'GET',
      headers: this.headers,
    };

    return (
      this.client
        .execute(fetchRequest)
        .then(response => response.body.facets[facetSelector].terms.map(({ term }) => term))
    );
  }
}
