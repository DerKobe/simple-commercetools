import { PagedQueryResult } from '../types';
import { BaseModule } from './BaseModule';
export declare class ProductProjections extends BaseModule {
    fetchBySku(sku: string, marked?: boolean): Promise<any>;
    search(searchTerm: string, locale: string, filter?: Array<{
        key: string;
        value: string;
    }>): Promise<PagedQueryResult<any>>;
    suggest(searchTerm: string, locale: string, filter?: Array<{
        key: string;
        value: string;
    }>): Promise<PagedQueryResult<any>>;
    private searchLike;
    getAllPossibleValuesForAttribute(attributeName: string): Promise<string[]>;
}
