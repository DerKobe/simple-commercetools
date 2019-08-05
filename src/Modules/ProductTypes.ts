import {ProductType} from '../types';
import { CommonModule } from './CommonModule';

export class ProductTypes extends CommonModule<ProductType> {
  protected entityType = 'productTypes';
}
