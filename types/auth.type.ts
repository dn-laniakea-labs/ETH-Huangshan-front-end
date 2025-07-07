import { CreateDateAndUpdateDate } from "./createAndUpdate.type";
import { User } from "./user.type";

export interface Auth extends CreateDateAndUpdateDate {
  id: number;
  accessToken: string; // 第三方 token（可选）
  refreshToken: string; // 刷新 token（可选）
  user: User;
}
