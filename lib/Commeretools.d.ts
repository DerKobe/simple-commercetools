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
    readonly carts: Promise<any>;
    readonly categories: Promise<any>;
    readonly channels: Promise<any>;
    readonly customObjects: Promise<any>;
    readonly extensions: Promise<any>;
    readonly inventoryEntries: Promise<any>;
    readonly orders: Promise<any>;
    readonly productProjections: Promise<any>;
    readonly products: Promise<any>;
    readonly productTypes: Promise<any>;
    readonly subscriptions: Promise<any>;
    readonly taxCategories: Promise<any>;
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
