import { CreateDateAndUpdateDate } from "./createAndUpdate.type";
import { CreateCategoryDto } from "./createCategoryDto.type";
import { Member } from "./member.type";
import { ProjectOwnership } from "./projectOwnership.type";
import { ProjectVoteStats } from "./projectVoteStats";
import { Vote } from "./vote.type";

export interface Project extends CreateDateAndUpdateDate {
  id: number;
  name: string;
  logo: string;
  categories: CreateCategoryDto[];
  introduction: string;
  website: string;
  screenshot: string[];
  video: string;
  functionality: string;
  member: Member[];
  social: string;
  projectOwnership: ProjectOwnership;
  votes: Vote[];
  vote?: ProjectVoteStats;
  isPublished: boolean;
  isDelete: boolean;
}
