import { TaxCategory, TaxCategoryDraft } from "../types";
import { CommonModule } from './CommonModule';
export declare class TaxCategories extends CommonModule<TaxCategory, TaxCategoryDraft> {
    protected entityType: string;
}
