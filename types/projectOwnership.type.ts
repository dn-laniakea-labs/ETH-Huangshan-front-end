import { CreateDateAndUpdateDate } from "./createAndUpdate.type";
import { Project } from "./project.type";
import { User } from "./user.type";

export enum OwnershipType {
  USER = 'user',
}

export interface ProjectOwnership extends CreateDateAndUpdateDate {
  id: number;
  project: Project;
  cryptoPlatform: OwnershipType;
  user: User;
}
