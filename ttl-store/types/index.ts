export type UserSession = {
  name: string;
  email: string;
  image: string;
  userId: string;
  emailVerified?: Date;
};

export type User = {
  _id?:string;
  id?: string;
  name: string;
  email: string;
  image: string;
  userId: string;
};

export enum ServiceType {
  youtube = "youtube",
  google = "google",
  icloud = "icloud",
};

export type Pool = {
  _id?: string;
  id?: string;
  poolType: ServiceType;
  createdBy: string | User;
  createdAt?: string;
  updatedAt?: string;
  maxMembers: number;
  currentMembers: number;
  description: string;
  isOpen: boolean;
  isPublic: boolean;
  verified: boolean;
  members: string[] | User[];
};

export enum PoolMemberRole {
  Admin = "admin",
  Member = "member",
}
export type PoolMemberShip = {
  id?: string;
  _id? : string;
  poolId: string | Pool;
  userId: string;
  joinedAt: string;
  role: PoolMemberRole;
};


export type Service = {
  _id?: string;
  id?: string;
  name: ServiceType;
  price: number;
  currencyType: string;
  provider: string;
  max_users: number;
  description: string;
}