import { CreateDateAndUpdateDate } from "./createAndUpdate.type";
import { Project } from "./project.type";
import { User } from "./user.type";

export enum VoteType {
  UP = 'up',
  DOWN = 'down',
}

export interface Vote extends CreateDateAndUpdateDate {
  id: number;
  userId: number;
  projectId: number;
  type: VoteType;
  project: Project;
  user: User;
}
