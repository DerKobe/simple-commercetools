import { InventoryEntry, InventoryEntryDraft, PagedQueryResult } from '../types';
import { CommonModule } from './CommonModule';
export declare class InventoryEntries extends CommonModule<InventoryEntry, InventoryEntryDraft> {
    protected entityType: string;
    fetchAllByChannelId(channelId: string): Promise<PagedQueryResult<InventoryEntry>>;
    fetchBySkuAndSupplyChannelKey(sku: string, supplyChannelKey: string): Promise<InventoryEntry>;
}
