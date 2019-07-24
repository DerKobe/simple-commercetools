import { Commercetools } from "../Commeretools";
export declare abstract class BaseModule {
    protected readonly commercetools: any;
    protected readonly request: any;
    protected readonly client: any;
    protected headers: {
        Accept: string;
        'Content-Type': string;
    };
    protected entityType?: string;
    constructor(commercetools: Commercetools);
}
