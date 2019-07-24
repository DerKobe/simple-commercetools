import { CommonModule } from './CommonModule';
import { InventoryEntry, PagedQueryResult } from '../types';
export declare class InventoryEntries extends CommonModule {
    protected entityType: string;
    fetchAllByChannelId(channelId: string): Promise<PagedQueryResult<InventoryEntry>>;
    fetchBySkuAndSupplyChannelKey(sku: string, supplyChannelKey: string): Promise<InventoryEntry>;
}
