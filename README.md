```typescript
import { Commercetools } from 'simple-commercetools';

interface CommercetoolsConfig {
  projectKey: string,
  clientId: string,
  clientSecret: string,
  locale: string,
  concurrency: number,
  authHost: string,
  apiHost: string,
}
const config: CommercetoolsConfig = { ... }
test
const commercetools = new Commercetools(config);

interface PagedQueryResult {
  offset: number;
  limit: number;
  count: number;
  total?: number;
  results: any[];
  meta?: any;
}

commercetools.orders.fetchAll(1, 10).then((data: PagedQueryResult<Order>) => {
  console.info(data);
});
```
