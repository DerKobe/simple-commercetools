import { Entity, PagedQueryResult, Sort, UpdateAction } from '../types';
import { BaseModule } from './BaseModule';
export declare abstract class CommonModule<T extends Entity> extends BaseModule {
    protected entityType?: string;
    fetchAll(page?: number, perPage?: number, condition?: string, sort?: Sort): Promise<PagedQueryResult<T>>;
    fetch(condition: any): Promise<T>;
    fetchByKey(key: string): Promise<T>;
    fetchById(id: string): Promise<T>;
    fetchAllExpanded(page?: number, perPage?: number, condition?: string, expansions?: string[], sort?: Sort): Promise<PagedQueryResult<T>>;
    fetchExpandedById(id: string, expansions?: string[]): Promise<T>;
    delete(keyOrEntity: any): Promise<void>;
    deleteById(id: string): Promise<void>;
    create(draft: any): Promise<any>;
    updateByIdAndVersion(id: string, version: number, actions: UpdateAction[]): Promise<void>;
    updateByIdOnly(id: string, actions: UpdateAction[]): Promise<void>;
    updateByKeyOnly(key: string, actions: UpdateAction[]): Promise<void>;
    protected resolveKeyAndVersion(keyOrEntity: string | Entity, fetchByKey: Function): Promise<any>;
}
