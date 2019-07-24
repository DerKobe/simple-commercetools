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
require("isomorphic-fetch");
const api_request_builder_1 = require("@commercetools/api-request-builder");
const sdk_client_1 = require("@commercetools/sdk-client");
const sdk_middleware_auth_1 = require("@commercetools/sdk-middleware-auth");
const sdk_middleware_http_1 = require("@commercetools/sdk-middleware-http");
const sdk_middleware_queue_1 = require("@commercetools/sdk-middleware-queue");
const modules = require("./Modules");
class Commercetools {
    get carts() { return this.initModule('Carts'); }
    get categories() { return this.initModule('Categories'); }
    get channels() { return this.initModule('Channels'); }
    get customObjects() { return this.initModule('CustomObjects'); }
    get extensions() { return this.initModule('Extensions'); }
    get inventoryEntries() { return this.initModule('InventoryEntries'); }
    get orders() { return this.initModule('Orders'); }
    get productProjections() { return this.initModule('ProductProjections'); }
    get products() { return this.initModule('Products'); }
    get productTypes() { return this.initModule('ProductTypes'); }
    get subscriptions() { return this.initModule('Subscriptions'); }
    get taxCategories() { return this.initModule('TaxCategories'); }
    get client() { return this._client; }
    get request() { return this._request; }
    constructor(config) {
        this.config = config;
    }
    initClient() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.client) {
                return;
            }
            const { projectKey, clientId, clientSecret, concurrency, locale, apiHost, authHost } = this.config;
            this.locale = locale;
            const httpMiddleware = sdk_middleware_http_1.createHttpMiddleware({ host: apiHost, fetch });
            const queueMiddleware = sdk_middleware_queue_1.createQueueMiddleware({ concurrency });
            const authMiddleware = sdk_middleware_auth_1.createAuthMiddlewareForClientCredentialsFlow({
                host: authHost,
                projectKey,
                credentials: { clientId, clientSecret },
            });
            this._request = api_request_builder_1.createRequestBuilder({ projectKey });
            this._client = sdk_client_1.createClient({ middlewares: [authMiddleware, httpMiddleware, queueMiddleware] });
            this.locale = locale;
        });
    }
    initModule(moduleName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initClient();
            if (!this[`module${moduleName}`]) {
                this[`module${moduleName}`] = new modules[moduleName](this);
            }
            return this[`module${moduleName}`];
        });
    }
}
exports.Commercetools = Commercetools;
