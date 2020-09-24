```typescript
import {  Commercetools, CommercetoolsConfig, PagedQueryResult } from 'simple-commercetools';

const config: CommercetoolsConfig = {
  projectKey: '[PROJECTKEY]',
  clientId: '[CLIENTID]',
  clientSecret: '[CLIENTSECRET]',
  locale: 'de-DE',
  concurrency: 5,
  authHost: "https://auth.sphere.io",
  apiHost: "https://api.sphere.io",
}

const commercetools = new Commercetools(config);
await commercetools.initClient();

const data: PagedQueryResult<Order> = await commercetools.orders.fetchAll(1, 10);
```
