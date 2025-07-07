import { User } from "next-auth";
import { CreateDateAndUpdateDate } from "./createAndUpdate.type";

export enum CryptoPlatformEnum {
  ETH = 'eth',
}

export interface Wallet extends CreateDateAndUpdateDate {
  id: number;
  cryptoPlatform: CryptoPlatformEnum;
  address: `0x${string}`;
  key?: string;
  isActivate?: boolean;
  user: User;
}
