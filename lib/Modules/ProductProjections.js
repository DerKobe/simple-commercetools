"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseModule_1 = require("./BaseModule");
class ProductProjections extends BaseModule_1.BaseModule {
    fetchBySku(sku, marked) {
        return __awaiter(this, void 0, void 0, function* () {
            let uri = this.request.productProjectionsSearch.filterByQuery(`variants.sku:"${sku}"`).page(1).perPage(1);
            if (marked) {
                uri = uri.markMatchingVariants();
            }
            const fetchRequest = {
                uri: uri.build(),
                method: 'GET',
                headers: this.headers,
            };
            return (this.client
                .execute(fetchRequest)
                .then(response => response.body.results[0]));
        });
    }
    search(searchTerm, locale, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = this.request.productProjectionsSearch.markMatchingVariants().text(searchTerm, locale);
            if (filter) {
                for (let i = 0; i < filter.length; i++) {
                    if (filter[i].key === 'productType') {
                        const fetchProductTypeRequest = {
                            uri: this.request.productTypes.byKey('commodity').build(),
                            method: 'GET',
                            headers: this.headers,
                        };
                        const productTypeId = yield this.client.execute(fetchProductTypeRequest).then(response => response.body.id);
                        uri.filterByQuery(`productType.id:"${productTypeId}"`);
                    }
                    else {
                        uri.filterByQuery(`${filter[i].key}.de:"${filter[i].value}"`);
                    }
                }
            }
            const fetchRequest = {
                uri: uri.build(),
                method: 'GET',
                headers: this.headers,
            };
            console.log('url:', fetchRequest);
            return (this.client
                .execute(fetchRequest)
                .then(response => response.body));
        });
    }
    getAllPossibleValuesForAttribute(attributeName) {
        return __awaiter(this, void 0, void 0, function* () {
            const facetSelector = `variants.attributes.${attributeName}`;
            const fetchRequest = {
                uri: this.request.productProjectionsSearch.facet(facetSelector).page(1).perPage(1).build(),
                method: 'GET',
                headers: this.headers,
            };
            return (this.client
                .execute(fetchRequest)
                .then(response => response.body.facets[facetSelector].terms.map(({ term }) => term)));
        });
    }
}
exports.ProductProjections = ProductProjections;
