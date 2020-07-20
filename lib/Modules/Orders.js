"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const CommonModule_1 = require("./CommonModule");
class Orders extends CommonModule_1.CommonModule {
    constructor() {
        super(...arguments);
        this.entityType = 'orders';
    }
}
exports.Orders = Orders;
