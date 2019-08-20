import { Channel, ChannelDraft } from '../types';
import { CommonModule } from './CommonModule';
export declare class Channels extends CommonModule<Channel, ChannelDraft> {
    protected entityType: string;
    fetchByKey(key: string): Promise<Channel>;
}
