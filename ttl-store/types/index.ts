export type UserSession = {
  name: string;
  email: string;
  image: string;
  userId: string;
  emailVerified?: Date;
};

export type User = {
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
  poolType: ServiceType;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  maxMembers: number;
  currentMembers: number;
  description: string;
  isOpen: boolean;
  isPublic: boolean;
  members: string[] | User[];
};

export enum PoolMemberRole {
  Admin = "admin",
  Member = "member",
}
export type PoolMemberShip = {
  id?: string;
  poolId: string | Pool;
  userId: string;
  joinedAt: string;
  role: PoolMemberRole;
};


export type Service = {
  id?: string;
  name: ServiceType;
  price: number;
  currencyType: string;
  provider: string;
  max_users: number;
  description: string;
}

export function isServiceType(obj: any): obj is Service {
  return (
    (typeof obj.id === 'string' || obj.id === undefined) &&
    Object.values(ServiceType).includes(obj.name.toString().toLowerCase()) &&
    typeof obj.price === 'number' &&
    typeof obj.currencyType === 'string' &&
    typeof obj.provider === 'string' &&
    typeof obj.max_users === 'number' &&
    typeof obj.description === 'string'
  );
}