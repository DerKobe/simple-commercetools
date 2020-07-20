"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriptions = void 0;
const CommonModule_1 = require("./CommonModule");
class Subscriptions extends CommonModule_1.CommonModule {
    constructor() {
        super(...arguments);
        this.entityType = 'subscriptions';
    }
}
exports.Subscriptions = Subscriptions;
