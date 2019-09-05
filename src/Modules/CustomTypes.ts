import { CustomType, CustomTypeDraft, UpdateAction } from '../types'
import { CommonModule } from './CommonModule';

export class CustomTypes extends CommonModule<CustomType, CustomTypeDraft>{
  protected entityType = 'types';
}
