"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommonModule_1 = require("./CommonModule");
class Products extends CommonModule_1.CommonModule {
    constructor() {
        super(...arguments);
        this.entityType = 'products';
    }
    fetchAllByAttribute(name, value, page, perPage) {
        const where = `masterData(current(masterVariant(attributes(name="${name}" and value="${value}"))))`;
        return this.fetchAll(page, perPage, where);
    }
    fetchByAttribute(name, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.fetchAllByAttribute(name, value, 1, 1);
            return response.results[0];
        });
    }
    fetchByVariantSku(sku) {
        return __awaiter(this, void 0, void 0, function* () {
            const where = `masterData(current(masterVariant(sku="${sku}")))`;
            const response = yield this.fetchAll(1, 1, where);
            return response.results[0];
        });
    }
}
exports.Products = Products;
