import {PagedQueryResult} from '../types';
import {BaseModule} from './BaseModule';

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

  public async search(searchTerm: string, locale: string, filter?: Array<{ key: string, value: string }>): Promise<PagedQueryResult<any>> { // TODO define ProductProjection interface
    const uri = this.request.productProjectionsSearch.markMatchingVariants().text(searchTerm, locale);

    if (filter) {
      for (let i = 0; i < filter.length; i++) {
        if (filter[i].key === 'productType') {
          const fetchProductTypeRequest = {
            uri: this.request.productTypes.byKey(filter[i].value).build(),
            method: 'GET',
            headers: this.headers,
          };
          const productTypeId = await this.client.execute(fetchProductTypeRequest).then(response => response.body.id);
          uri.filterByQuery(`productType.id:"${productTypeId}"`)
        } else {
          uri.filterByQuery(`variants.attributes.${filter[i].key}:"${filter[i].value}"`)
        }
      }
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
        .then(response => response.body.facets[facetSelector].terms.map(({term}) => term))
    );
  }
}
