import { Extension, ExtensionDraft } from "../types";
import { CommonModule } from './CommonModule';
export declare class Extensions extends CommonModule<Extension, ExtensionDraft> {
    protected entityType: string;
}
