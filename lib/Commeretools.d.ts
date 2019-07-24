import 'isomorphic-fetch';
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
    readonly carts: any;
    readonly categories: any;
    readonly channels: any;
    readonly customObjects: any;
    readonly extensions: any;
    readonly inventoryEntries: any;
    readonly orders: any;
    readonly productProjections: any;
    readonly products: any;
    readonly productTypes: any;
    readonly subscriptions: any;
    readonly taxCategories: any;
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
