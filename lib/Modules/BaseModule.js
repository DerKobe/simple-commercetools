"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModule = void 0;
class BaseModule {
    constructor(commercetools) {
        this.headers = { Accept: 'application/json', 'Content-Type': 'application/json' };
        this.commercetools = commercetools;
        this.client = commercetools.client;
    }
    get request() {
        return this.commercetools.request;
    }
}
exports.BaseModule = BaseModule;
