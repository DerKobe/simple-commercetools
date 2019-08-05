import { Category } from '../types'
import { CommonModule } from './CommonModule';

export class Categories extends CommonModule<Category> {
  protected entityType = 'categories';
}
