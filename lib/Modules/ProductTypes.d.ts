import { ProductType, ProductTypeDraft } from '../types';
import { CommonModule } from './CommonModule';
export declare class ProductTypes extends CommonModule<ProductType, ProductTypeDraft> {
    protected entityType: string;
}
