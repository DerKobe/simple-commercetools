import { InventoryEntry, PagedQueryResult } from '../types';
import { CommonModule } from './CommonModule';
export declare class InventoryEntries extends CommonModule<InventoryEntry> {
    protected entityType: string;
    fetchAllByChannelId(channelId: string): Promise<PagedQueryResult<InventoryEntry>>;
    fetchBySkuAndSupplyChannelKey(sku: string, supplyChannelKey: string): Promise<InventoryEntry>;
}
