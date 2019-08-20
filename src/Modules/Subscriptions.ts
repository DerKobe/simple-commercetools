import { Subscription, SubscriptionDraft } from "../types";
import { CommonModule } from './CommonModule';

export class Subscriptions extends CommonModule<Subscription, SubscriptionDraft> {
  protected entityType = 'subscriptions';
}
