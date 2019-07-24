import { createRequestBuilder } from '@commercetools/api-request-builder';
import { createClient } from '@commercetools/sdk-client';
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth';
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http';
import { createQueueMiddleware } from '@commercetools/sdk-middleware-queue';
import 'isomorphic-fetch';
import { Carts } from "./Carts";
import { Categories } from "./Categories";
import { Channels } from './Channels';
import { CustomObjects } from './CustomObjects';
import { CustomTypes } from "./CustomTypes";
import { Extensions } from "./Extensions";
import { InventoryEntries } from './InventoryEntries';
import { Orders } from "./Orders";
import { ProductProjections } from "./ProductProjections";
import { Products } from "./Products";
import { ProductTypes } from "./ProductTypes";
import { Subscriptions } from "./Subscriptions";
import { TaxCategories } from "./TaxCategories";

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
  public get carts() { return this.initModule('Carts') }
  public get categories() { return this.initModule('Categories') }
  public get channels() { return this.initModule('Channels') }
  public get customObjects() { return this.initModule('CustomObjects') }
  public get extensions() { return this.initModule('Extensions') }
  public get inventoryEntries() { return this.initModule('InventoryEntries') }
  public get orders() { return this.initModule('Orders') }
  public get productProjections() { return this.initModule('ProductProjections') }
  public get products() { return this.initModule('Products') }
  public get productTypes() { return this.initModule('ProductTypes') }
  public get subscriptions() { return this.initModule('Subscriptions') }
  public get taxCategories() { return this.initModule('TaxCategories') }

  public get client() { return this._client; }
  public get request() { return this._request; }

  public locale: string | undefined;

  private readonly config: CommercetoolsConfig;

  private _client;
  private _request;

  private moduleCarts?: Carts;
  private moduleCategories?: Categories;
  private moduleChannels?: Channels;
  private moduleCustomObjects?: CustomObjects;
  private moduleCustomTypes?: CustomTypes;
  private moduleExtensions?: Extensions;
  private moduleInventoryEntries?: InventoryEntries;
  private moduleOrders?: Orders;
  private moduleProductProjections?: ProductProjections;
  private moduleProducts?: Products;
  private moduleProductTypes?: ProductTypes;
  private moduleSubscriptions?: Subscriptions;
  private moduleTaxCategories?: TaxCategories;

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

  private async initModule(moduleName) {
    await this.initClient();

    if (!this[`module${moduleName}`]) {
      this[`module${moduleName}`] = new global[this[moduleName]](this);
    }

    return this[`module${moduleName}`]
  }
}
