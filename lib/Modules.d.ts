import { Commercetools } from "./Commeretools";
import { Entity, PagedQueryResult, Sort, UpdateAction } from './types';
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
export declare abstract class CommonModule extends BaseModule {
    protected entityType?: string;
    fetchAll(page?: number, perPage?: number, condition?: string, sort?: Sort): Promise<PagedQueryResult<any>>;
    fetch(condition: any): Promise<any>;
    fetchByKey(key: string): Promise<any>;
    fetchById(id: string): Promise<any>;
    delete(keyOrEntity: any): Promise<void>;
    deleteById(id: string): Promise<void>;
    create(draft: any): Promise<any>;
    update(keyOrEntity: string | Entity, actions: UpdateAction[]): Promise<void>;
    protected resolveKeyAndVersion(keyOrEntity: string | Entity, fetchByKey: Function): Promise<any>;
}
