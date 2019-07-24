import { PagedQueryResult } from '../types';
import { BaseModule } from './BaseModule';
export declare class ProductProjections extends BaseModule {
    fetchBySku(sku: string, marked?: boolean): Promise<any>;
    search(searchTerm: string, locale: string, filterByProductTypeKey?: string): Promise<PagedQueryResult<any>>;
    getAllPossibleValuesForAttribute(attributeName: string): Promise<string[]>;
}
