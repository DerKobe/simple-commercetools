import { Commercetools } from "../Commeretools";

export abstract class BaseModule {
  protected readonly commercetools;
  protected readonly client;
  protected headers = { Accept: 'application/json', 'Content-Type': 'application/json' };
  protected entityType?: string;

  constructor(commercetools: Commercetools) {
    this.commercetools = commercetools;
    this.client = commercetools.client;
  }

  get request() {
    return this.commercetools.request;
  }
}
