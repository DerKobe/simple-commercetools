import { BaseModule } from './Modules';
import { PagedQueryResult } from './types';
export declare class ProductProjections extends BaseModule {
    fetchBySku(sku: string, marked?: boolean): Promise<any>;
    search(searchTerm: string, locale: string, filterByProductTypeKey?: string): Promise<PagedQueryResult<any>>;
    getAllPossibleValuesForAttribute(attributeName: string): Promise<string[]>;
}
