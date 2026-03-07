
export interface User{
    userId:string;
    username:string;
    phone:string;
    email:string;
    isActive:boolean;
    createdAt:number;
    updatedAt:number;
}

export interface Profile {
  username: string;
  email: string;
  phone: string;
  roles: string;
}
export interface AuthResponse {
  access_token: string;
  authenticated: boolean;
}
export interface Login {
  email:string;
  password:string;
}
export interface Register {
  username:string;
  email:string;
  password:string;
}