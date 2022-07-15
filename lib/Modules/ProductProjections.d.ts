import { PagedQueryResult, ProductProjection } from '../types';
import { BaseModule } from './BaseModule';
export declare class ProductProjections extends BaseModule {
    fetchBySku(sku: string, marked?: boolean): Promise<ProductProjection | undefined>;
    search(searchTerm: string, locale: string, filter?: Array<{
        key: string;
        value: string;
    }>): Promise<PagedQueryResult<ProductProjection>>;
    getAllPossibleValuesForAttribute(attributeName: string): Promise<Array<string>>;
}
