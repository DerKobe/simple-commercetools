import { Channel } from '../types';
import { CommonModule } from './CommonModule';
export declare class Channels extends CommonModule<Channel> {
    protected entityType: string;
    fetchByKey(key: string): Promise<Channel>;
}
