export interface UserDTO {
  id: number;
  name: string;
  email: string;
  phone: number;
  password: string;
  created_by: number;
  created_at: string;
  updated_by: null;
  updated_at: string;
  is_active: number;
  type: 'user';
}

export interface UserDetailsDTO {
  id: number;
  identity_id: number;
  access_token: string;
  refresh_token: string;
  agent: string;
  ip_addr: string;
  created_on: string;
  last_accessed_on: string;
  extra: number | string;
  user: UserDTO;
}

export interface LoginIntialStateDTO {
  isLogin: boolean;
  error: string;
  loading: boolean;
  userDetails: UserDetailsDTO;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface LoginResponseData {
  id: number;
  identity_id: number;
  access_token: string;
  refresh_token: string;
}
export interface RefreshTokenBodyDTO{
  refresh_token:string
}