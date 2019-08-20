import { TaxCategory, TaxCategoryDraft } from "../types";
import { CommonModule } from './CommonModule';

export class TaxCategories extends CommonModule<TaxCategory, TaxCategoryDraft> {
  protected entityType = 'taxCategories';
}
