export interface SessionUser {
  id?: string | number;
  role?: string;
  image?: string;
  email?: string | null;
  name?: string | null;
  accessToken?: string;
  refreshToken?: string;
}