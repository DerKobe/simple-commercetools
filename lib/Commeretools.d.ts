import 'isomorphic-fetch';
import * as modules from './Modules/index';
interface CommercetoolsConfig {
    projectKey: string;
    clientId: string;
    clientSecret: string;
    locale: string;
    concurrency: number;
    authHost: string;
    apiHost: string;
}
export declare class Commercetools {
    readonly carts: modules.Carts;
    readonly categories: modules.Categories;
    readonly channels: modules.Channels;
    readonly customObjects: modules.CustomObjects;
    readonly extensions: modules.Extensions;
    readonly inventoryEntries: modules.InventoryEntries;
    readonly orders: modules.Orders;
    readonly productProjections: modules.ProductProjections;
    readonly products: modules.Products;
    readonly productTypes: modules.ProductTypes;
    readonly subscriptions: modules.Subscriptions;
    readonly taxCategories: modules.TaxCategories;
    readonly projectKey: string;
    readonly client: any;
    readonly request: any;
    locale: string | undefined;
    private readonly config;
    private _client;
    private _request;
    private moduleCarts?;
    private moduleCategories?;
    private moduleChannels?;
    private moduleCustomObjects?;
    private moduleCustomTypes?;
    private moduleExtensions?;
    private moduleInventoryEntries?;
    private moduleOrders?;
    private moduleProductProjections?;
    private moduleProducts?;
    private moduleProductTypes?;
    private moduleSubscriptions?;
    private moduleTaxCategories?;
    constructor(config: CommercetoolsConfig);
    initClient(): Promise<any>;
    private initModule;
}
export {};
