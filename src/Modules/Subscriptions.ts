import { Subscription } from "../types";
import { CommonModule } from './CommonModule';

export class Subscriptions extends CommonModule<Subscription> {
  protected entityType = 'subscriptions';
}
