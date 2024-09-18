import { SERVICES_BG_IMAGES, SERVICES_LOGOS } from "@/assets";

export const SERVICES = [
  "youtube",
  "google",
  "icloud",
] as const;

export const SERVICES_INFO = [
  {
    cardBackgroundImage: SERVICES_BG_IMAGES.youtube,
    name: "youtube premium",
    description: "Enjoy ad-free YouTube and YouTube Music, with offline access and background play.",
    imageUrl: SERVICES_LOGOS.youtube,
  },
  {
    cardBackgroundImage: SERVICES_BG_IMAGES.google,
    name: "google drive",
    description: "Store any and all files. Access your files anytime, anywhere from desktop and mobile devices. Control how files are shared.",
    imageUrl: SERVICES_LOGOS.google,
  },
  {
    cardBackgroundImage: SERVICES_BG_IMAGES.icloud,
    name: "Apple icloud service",
    description: "Free Cloud Services Beyond Anything Offered to Date",
    imageUrl: SERVICES_LOGOS.icloud,
  },
 
] as const;

export const USER_POPOVER = ["profile", "settings"] as const;


export const MAX_POOL_MEMBERS = 5;

export const FETCH_POOLS = `http://localhost:3001/pools/`
export const FETCH_MEMBERSHIP = `http://localhost:3001/poolMemberShips/`

export enum HTTP_STATUS {
  OK = 200,
  CREATED = 201,
  UNAUTHORIZED = 401,
  INTERNAL_SERVER_ERROR = 500,
}