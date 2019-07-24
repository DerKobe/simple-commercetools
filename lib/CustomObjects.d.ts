import { BaseModule } from './Modules';
import { CustomObject, CustomObjectDraft, PagedQueryResult, Sort } from './types';
export declare class CustomObjects extends BaseModule {
    fetchAll(page?: number, perPage?: number, condition?: string, sort?: Sort): Promise<PagedQueryResult<CustomObject>>;
    fetchByKeyAndContainer(key: string, container: string): Promise<CustomObject>;
    save(customObjectDraft: CustomObjectDraft): Promise<CustomObject>;
}
