import { Request } from "express";

export interface User {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}


export type UserToCreate = Omit<User, "user_id">;
export interface UserToGet {
  user_id: number;
  email: string;
  first_name?: string;
  last_name?: string;
  password:string;
}

export default User;