import { CustomType, CustomTypeDraft, UpdateAction } from '../types';
import { CommonModule } from './CommonModule';
export declare class CustomTypes extends CommonModule<CustomType, CustomTypeDraft> {
    protected entityType: string;
    create(customTypeDraft: CustomTypeDraft): Promise<CustomType>;
    updateByKey(key: string, actions: UpdateAction[]): Promise<CustomType>;
}
