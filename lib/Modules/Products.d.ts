import { PagedQueryResult, Product } from '../types';
import { CommonModule } from './CommonModule';
export declare class Products extends CommonModule {
    protected entityType: string;
    fetchAllByAttribute(name: string, value: string, page?: number, perPage?: number): Promise<PagedQueryResult<Product>>;
    fetchByAttribute(name: string, value: string): Promise<Product>;
    fetchByVariantSku(sku: string): Promise<Product>;
}
