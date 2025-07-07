import { CategoryTypeEnum } from "./categoryType.enum";
import { CreateDateAndUpdateDate } from "./createAndUpdate.type";

export interface Category extends CreateDateAndUpdateDate {
  id: number;
  name: string;
  description?: string;
  type: CategoryTypeEnum;
  index: number;
  isDelete: boolean;
}
