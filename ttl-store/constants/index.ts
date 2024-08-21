export const SERVICES = [
  "youtube",
  "google",
  "icloud",
] as const;

export const SERVICES_INFO = [
  {
    name: "youtube",
    description: "YouTube is an American online video sharing and social media platform owned by Google.",
    imageUrl: "/images/youtube.jpeg",
  },
  {
    name: "google",
    description: "Google is an American multinational technology company that specializes in Internet-related services and products.",
    imageUrl: "/images/google.jpg",
  },
  {
    name: "icloud",
    description: "iCloud is a cloud storage and cloud computing service from Apple Inc.",
    imageUrl: "/images/icloud.png",
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