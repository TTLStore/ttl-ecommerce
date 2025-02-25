export type UserSession = {
  name: string;
  email: string;
  image: string;
  userId: string;
  emailVerified?: Date;
};

export type User = {
  name: string;
  email: string;
  image: string;
  userId: string;
};

export enum Service {
  youtube = "youtube",
  google = "google",
  icloud = "icloud",
};

export type Pool = {
  _id: string;
  poolType: Service;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  maxMembers: number;
  currentMembers: number;
  description: string;
  isOpen: boolean;
  isPublic: boolean;
};

export enum PoolMemberRole {
  Admin = "admin",
  Member = "member",
}
export type PoolMemberShip = {
  id: string;
  poolId: string;
  userId: string;
  joinedAt: string;
  role: PoolMemberRole;
};