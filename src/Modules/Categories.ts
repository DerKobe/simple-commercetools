import { Category } from '../types'
import { CommonModule } from './CommonModule';

export class Categories extends CommonModule<Category, any> { // TODO implement CategoryDraft
  protected entityType = 'categories';
}
