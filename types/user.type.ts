import { Auth } from "./auth.type";
import { CreateDateAndUpdateDate } from "./createAndUpdate.type";
import { Password } from "./password.type";
import { ProjectOwnership } from "./projectOwnership.type";
import { ThirdPartyAuth } from "./thirdPartyAuth.type";
import { Vote } from "./vote.type";
import { Wallet } from "./wallet.type";

export enum VoteType {
  UP = 'up',
  DOWN = 'down',
}

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

export interface User extends CreateDateAndUpdateDate {
  id: number;
  uid: string;
  name: string;
  description?: string;
  avatar?: string;
  email?: string;
  roles: Role[];
  votes: Vote[];
  isDelete?: boolean;
  hashId?: string; // 唯一 hash 标识符，用于关联密码表
  passwordInfo: Password;
  auth: Auth;
  thirdPartyAuths: ThirdPartyAuth[];
  wallet: Wallet[];
  projectOwnerships: ProjectOwnership[];
}
