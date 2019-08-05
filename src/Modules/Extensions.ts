import { Extension } from "../types";
import { CommonModule } from './CommonModule';

export class Extensions extends CommonModule<Extension> {
  protected entityType = 'extensions';
}
