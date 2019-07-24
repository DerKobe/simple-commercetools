import { CustomObject, CustomObjectDraft, PagedQueryResult, Sort } from '../types';
import { BaseModule } from './BaseModule';
export declare class CustomObjects extends BaseModule {
    fetchAll(page?: number, perPage?: number, condition?: string, sort?: Sort): Promise<PagedQueryResult<CustomObject>>;
    fetchById(id: string): Promise<CustomObject>;
    fetchByKeyAndContainer(key: string, container: string): Promise<CustomObject>;
    save(customObjectDraft: CustomObjectDraft): Promise<CustomObject>;
    deleteById(id: string): Promise<void>;
}
