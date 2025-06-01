import type { ErrorInfo } from "@/interfaces/error/ErrorModel"

export interface LoginChallengeUserInfo {
  email: string;
  password: string;
  login_save: number;
}

export interface LoginInfo {
  grant_token?: string;
  status?: number;
  member_id?: number;
  messages?: string[];
  errors: ErrorInfo[];
}

export interface ProfileInfo {
  email: string;
  member_id: string;
  group_ids: Map<string, string>;
}

