import { TaxCategory } from "../types";
import { CommonModule } from './CommonModule';

export class TaxCategories extends CommonModule<TaxCategory> {
  protected entityType = 'taxCategories';
}
