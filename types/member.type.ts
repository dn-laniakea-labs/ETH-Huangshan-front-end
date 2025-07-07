export enum MemberRoleType {
  coreTeam = 'coreTeam',
  advisor = 'advisor',
}

export interface Member {
  id: number;
  name: string;
  position: string;
  background: string;
  photo: string;
  social: string;
  role: MemberRoleType;
  isDelete: boolean;
}
