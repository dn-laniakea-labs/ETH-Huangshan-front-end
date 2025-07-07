import { CreateDateAndUpdateDate } from "./createAndUpdate.type";
import { User } from "./user.type";

export interface ThirdPartyAuth extends CreateDateAndUpdateDate {
  id: number;
  providerId: string; // 第三方平台的用户 ID
  provider: string; // 第三方来源（如 github）
  user: User;
}
