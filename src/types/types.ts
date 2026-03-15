
export const Gender = {
  MALE : "MALE",
  FEMALE : "FEMALE",
  OTHER : "OTHER",
} as const
export type Gender = typeof Gender[keyof typeof Gender]; 
export interface ApiResponse<T> {
  status: Status;
  data: T;
  timestamp: string;
}
export interface ApiErrorResponse {
  data: {
    status: {
      code: number;
      label: string;
      messages: string;
    };
  };
}
export interface Status {
  code: number;
  label: string;
  messages: string;
  requestId: string;
}
export interface AuthResponse {
  access_token: string;
  authenticated: boolean;
}
export interface Profile {
  username: string;
  email: string;
  phone: string;
  roles: string;
  gender:Gender
}

export interface Login {
  email: string;
  password: string;
}
export interface Register {
  username: string;
  email: string;
  password: string;
}
