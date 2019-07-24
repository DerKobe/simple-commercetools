import { CommonModule } from './CommonModule';
import { Order, PagedQueryResult, Sort } from "../types";
export declare class Orders extends CommonModule {
    protected entityType: string;
    fetchAllExpanded(page?: number, perPage?: number, condition?: string, expansions?: string[], sort?: Sort): Promise<PagedQueryResult<Order>>;
    fetchExpandedById(id: string, expansions?: string[]): Promise<Order>;
}
