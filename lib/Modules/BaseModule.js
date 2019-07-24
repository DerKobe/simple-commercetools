"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseModule {
    constructor(commercetools) {
        this.headers = { Accept: 'application/json', 'Content-Type': 'application/json' };
        this.commercetools = commercetools;
        this.request = commercetools.request;
        this.client = commercetools.client;
    }
}
exports.BaseModule = BaseModule;
