import { Extension, ExtensionDraft } from "../types";
import { CommonModule } from './CommonModule';

export class Extensions extends CommonModule<Extension, ExtensionDraft> {
  protected entityType = 'extensions';
}
