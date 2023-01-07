import { DataItemModel } from './DataItemModel';

export interface DataModel {
  backgrounds: Array<{
    url: string;
  }>;
  items: DataItemModel[];
}
