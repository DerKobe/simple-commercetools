import { ProductType, ProductTypeDraft } from '../types';
import { CommonModule } from './CommonModule';

export class ProductTypes extends CommonModule<ProductType, ProductTypeDraft> {
  protected entityType = 'productTypes';
}
