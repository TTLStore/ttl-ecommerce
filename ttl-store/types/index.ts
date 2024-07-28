export type UserSession = {
  name: string;
  email: string;
  image: string;
  userId: string;
};

export type User = {
  name: string;
  email: string;
  image: string;
  userId: string;
};

export type PoolType = "Youtube" | "Google" | "Icloud";

export type Pool = {
  id: string;
  poolType: PoolType;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  maxMembers: number;
  currentMembers: number;
};

export type PoolMemberRole = "Admin" | "Member";

export type PoolMemberShip = {
  id: string;
  poolId: string;
  userId: string;
  joinAt: string;
  role: PoolMemberRole;
};