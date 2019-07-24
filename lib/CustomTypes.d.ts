import { CommonModule } from './Modules';
import { CustomType, CustomTypeDraft, UpdateAction } from './types';
export declare class CustomTypes extends CommonModule {
    protected entityType: string;
    create(customTypeDraft: CustomTypeDraft): Promise<CustomType>;
    updateByKey(key: string, actions: UpdateAction[]): Promise<CustomType>;
}
