import { Channel } from '../types';
import { CommonModule } from './CommonModule';
export declare class Channels extends CommonModule {
    protected entityType: string;
    fetchByKey(key: string): Promise<Channel>;
}
