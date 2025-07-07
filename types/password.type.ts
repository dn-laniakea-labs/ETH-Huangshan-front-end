import { CreateDateAndUpdateDate } from "./createAndUpdate.type";

export interface Password extends CreateDateAndUpdateDate {
  id: number;
  hashId: string;
  password: string;
}
