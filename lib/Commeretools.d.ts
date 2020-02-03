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
    get carts(): modules.Carts;
    get categories(): modules.Categories;
    get channels(): modules.Channels;
    get customObjects(): modules.CustomObjects;
    get customTypes(): modules.CustomTypes;
    get extensions(): modules.Extensions;
    get inventoryEntries(): modules.InventoryEntries;
    get orders(): modules.Orders;
    get productProjections(): modules.ProductProjections;
    get products(): modules.Products;
    get productTypes(): modules.ProductTypes;
    get subscriptions(): modules.Subscriptions;
    get taxCategories(): modules.TaxCategories;
    get projectKey(): string;
    get client(): any;
    get request(): any;
    locale: string | undefined;
    private readonly config;
    private _client;
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
