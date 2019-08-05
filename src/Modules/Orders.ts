import { Order } from "../types";
import { CommonModule } from './CommonModule';

export class Orders extends CommonModule<Order> {
  protected entityType = 'orders';
}
