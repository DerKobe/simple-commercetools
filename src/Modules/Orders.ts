import { Order } from "../types";
import { CommonModule } from './CommonModule';

export class Orders extends CommonModule<Order, any> { // TODO implement OrderDraft
  protected entityType = 'orders';
}
