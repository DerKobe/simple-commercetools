import 'isomorphic-fetch';
import { createRequestBuilder } from '@commercetools/api-request-builder';
import { createClient } from '@commercetools/sdk-client';
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth';
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http';
import { createQueueMiddleware } from '@commercetools/sdk-middleware-queue';
import * as modules from './Modules/index';

interface CommercetoolsConfig {
  projectKey: string,
  clientId: string,
  clientSecret: string,
  locale: string,
  concurrency: number,
  authHost: string,
  apiHost: string,
}

export class Commercetools {
  public get carts(): modules.Carts { return this.initModule('Carts') }
  public get categories(): modules.Categories { return this.initModule('Categories') }
  public get channels(): modules.Channels { return this.initModule('Channels') }
  public get customObjects(): modules.CustomObjects { return this.initModule('CustomObjects') }
  public get extensions(): modules.Extensions { return this.initModule('Extensions') }
  public get inventoryEntries(): modules.InventoryEntries { return this.initModule('InventoryEntries') }
  public get orders(): modules.Orders { return this.initModule('Orders') }
  public get productProjections(): modules.ProductProjections { return this.initModule('ProductProjections') }
  public get products(): modules.Products { return this.initModule('Products') }
  public get productTypes(): modules.ProductTypes { return this.initModule('ProductTypes') }
  public get subscriptions(): modules.Subscriptions { return this.initModule('Subscriptions') }
  public get taxCategories(): modules.TaxCategories { return this.initModule('TaxCategories') }

  public get projectKey() { return this.config.projectKey; }
  public get client() { return this._client; }
  public get request() { return this._request; }

  public locale: string | undefined;

  private readonly config: CommercetoolsConfig;

  private _client;
  private _request;

  private moduleCarts?: modules.Carts;
  private moduleCategories?: modules.Categories;
  private moduleChannels?: modules.Channels;
  private moduleCustomObjects?: modules.CustomObjects;
  private moduleCustomTypes?: modules.CustomTypes;
  private moduleExtensions?: modules.Extensions;
  private moduleInventoryEntries?: modules.InventoryEntries;
  private moduleOrders?: modules.Orders;
  private moduleProductProjections?: modules.ProductProjections;
  private moduleProducts?: modules.Products;
  private moduleProductTypes?: modules.ProductTypes;
  private moduleSubscriptions?: modules.Subscriptions;
  private moduleTaxCategories?: modules.TaxCategories;

  constructor(config: CommercetoolsConfig) {
    this.config = config;
  }

  public async initClient(): Promise<any> {
    if (this.client) { return; }

    const { projectKey, clientId, clientSecret, concurrency, locale, apiHost, authHost } = this.config as CommercetoolsConfig;

    this.locale = locale;

    const httpMiddleware = createHttpMiddleware({ host: apiHost, fetch });
    const queueMiddleware = createQueueMiddleware({ concurrency });
    const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
      host: authHost,
      projectKey,
      credentials: { clientId, clientSecret },
    });

    this._request = createRequestBuilder({ projectKey });
    this._client = createClient({ middlewares: [authMiddleware, httpMiddleware, queueMiddleware] });

    this.locale = locale;
  }

  private initModule(moduleName) {
    if (!this._client) {
      throw new Error('Client is not initialized! Run "await initClient()" first.');
    }

    if (!this[`module${moduleName}`]) {
      this[`module${moduleName}`] = new modules[moduleName](this);
    }

    return this[`module${moduleName}`];
  }
}
