"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxCategories = void 0;
const CommonModule_1 = require("./CommonModule");
class TaxCategories extends CommonModule_1.CommonModule {
    constructor() {
        super(...arguments);
        this.entityType = 'taxCategories';
    }
}
exports.TaxCategories = TaxCategories;
