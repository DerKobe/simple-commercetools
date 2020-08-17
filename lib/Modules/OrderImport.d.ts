import { Order, OrderImportDraft } from "../types";
import { BaseModule } from "./BaseModule";
export declare class OrderImport extends BaseModule {
    create(draft: OrderImportDraft): Promise<Order>;
}
