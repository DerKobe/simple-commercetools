import { Subscription, SubscriptionDraft } from "../types";
import { CommonModule } from './CommonModule';
export declare class Subscriptions extends CommonModule<Subscription, SubscriptionDraft> {
    protected entityType: string;
}
