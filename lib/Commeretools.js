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
exports.Commercetools = void 0;
const node_fetch_1 = require("node-fetch");
const api_request_builder_1 = require("@commercetools/api-request-builder");
const sdk_client_1 = require("@commercetools/sdk-client");
const sdk_middleware_auth_1 = require("@commercetools/sdk-middleware-auth");
const sdk_middleware_http_1 = require("@commercetools/sdk-middleware-http");
const sdk_middleware_queue_1 = require("@commercetools/sdk-middleware-queue");
const modules = require("./Modules/index");
class Commercetools {
    constructor(config) {
        this.config = config;
    }
    get carts() { return this.initModule('Carts'); }
    get categories() { return this.initModule('Categories'); }
    get channels() { return this.initModule('Channels'); }
    get customObjects() { return this.initModule('CustomObjects'); }
    get customTypes() { return this.initModule('CustomTypes'); }
    get extensions() { return this.initModule('Extensions'); }
    get inventoryEntries() { return this.initModule('InventoryEntries'); }
    get orders() { return this.initModule('Orders'); }
    get orderImport() { return this.initModule('OrderImport'); }
    get productProjections() { return this.initModule('ProductProjections'); }
    get products() { return this.initModule('Products'); }
    get productTypes() { return this.initModule('ProductTypes'); }
    get subscriptions() { return this.initModule('Subscriptions'); }
    get taxCategories() { return this.initModule('TaxCategories'); }
    get projectKey() { return this.config.projectKey; }
    get client() { return this._client; }
    get request() { return (0, api_request_builder_1.createRequestBuilder)({ projectKey: this.projectKey }); }
    initClient() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.client) {
                return;
            }
            const { projectKey, clientId, clientSecret, concurrency, locale, apiHost, authHost } = this.config;
            this.locale = locale;
            const httpMiddleware = (0, sdk_middleware_http_1.createHttpMiddleware)({ host: apiHost, fetch: node_fetch_1.default });
            const queueMiddleware = (0, sdk_middleware_queue_1.createQueueMiddleware)({ concurrency });
            const authMiddleware = (0, sdk_middleware_auth_1.createAuthMiddlewareForClientCredentialsFlow)({
                fetch: node_fetch_1.default,
                host: authHost,
                projectKey,
                credentials: { clientId, clientSecret },
            });
            this._client = (0, sdk_client_1.createClient)({ middlewares: [authMiddleware, httpMiddleware, queueMiddleware] });
            this.locale = locale;
        });
    }
    initModule(moduleName) {
        if (!this._client) {
            throw new Error('Client is not initialized! Run "await initClient()" first.');
        }
        if (!this[`module${moduleName}`]) {
            this[`module${moduleName}`] = new modules[moduleName](this);
        }
        return this[`module${moduleName}`];
    }
}
exports.Commercetools = Commercetools;
