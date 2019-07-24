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
const Modules_1 = require("./Modules");
class Orders extends Modules_1.CommonModule {
    constructor() {
        super(...arguments);
        this.entityType = 'orders';
    }
    fetchAllExpanded(page, perPage, condition, expansions, sort) {
        return __awaiter(this, void 0, void 0, function* () {
            let uri = this.request[this.entityType];
            if (page) {
                uri = uri.page(page);
            }
            if (perPage) {
                uri = uri.page(perPage);
            }
            if (condition) {
                uri = uri.where(condition);
            }
            if (expansions) {
                expansions.forEach(expansion => uri = uri.expand(expansion));
            }
            if (sort) {
                uri = uri.parse({ sort });
            }
            const fetchRequest = {
                uri: uri.build(),
                method: 'GET',
                headers: this.headers,
            };
            return (this.client
                .execute(fetchRequest)
                .then(response => response.body));
        });
    }
    fetchExpandedById(id, expansions) {
        let uri = this.request().orders.byId(id);
        if (expansions) {
            expansions.forEach(expansion => uri = uri.expand(expansion));
        }
        const fetchRequest = {
            uri: uri.build(),
            method: 'GET',
            headers: this.headers,
        };
        return this.client.execute(fetchRequest).then(({ body }) => body);
    }
}
exports.Orders = Orders;
