import { SERVICES_BG_IMAGES, SERVICES_LOGOS } from "@/assets";
import { ServiceCardProps } from "@/components/UI/ServiceCard";
import { CgProfile } from "react-icons/cg";
import { FaSwimmingPool, FaDoorOpen } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa";

export const SERVICES = [
  "youtube",
  "google",
  "icloud",
] as const;

export const SERVICES_INFO : ServiceCardProps[] = [
  {
    cardBackgroundImage: SERVICES_BG_IMAGES.youtube,
    serviceName: "youtube premium",
    serviceDescription: "Enjoy ad-free YouTube and YouTube Music, with offline access and background play.",
    imageUrl: SERVICES_LOGOS.youtube,
  },
  {
    cardBackgroundImage: SERVICES_BG_IMAGES.google,
    serviceName: "google drive",
    serviceDescription: "Store any and all files. Access your files anytime, anywhere from desktop and mobile devices. Control how files are shared.",
    imageUrl: SERVICES_LOGOS.google,
  },
  {
    cardBackgroundImage: SERVICES_BG_IMAGES.icloud,
    serviceName: "Apple icloud service",
    serviceDescription: "Free Cloud Services Beyond Anything Offered to Date",
    imageUrl: SERVICES_LOGOS.icloud,
  },
 
] as const;

export type UserPopover = {
  name : string,
  href : string
}

export const USER_POPOVER : UserPopover[] = [
  {
    name :"profile",
    href : "profile"
  },
  {
    name : "Share Subscriptions",
    href : "create-pool"
  },
  {
    name : "join Subscriptions",
    href : "join-pool"
  },
  {
    name : "Subscription management",
    href : "subscription-management"
  }
] as const;


export const MAX_POOL_MEMBERS = 5;

export enum HTTP_STATUS {
  OK = 200,
  CREATED = 201,
  UNAUTHORIZED = 401,
  INTERNAL_SERVER_ERROR = 500,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  FORBIDDEN = 403,
  // CONFLICT = 409,
  // UNPROCESSABLE_ENTITY = 422,
  // TOO_MANY_REQUESTS = 429,
  // SERVICE_UNAVAILABLE = 503,
  // GATEWAY_TIMEOUT = 504,
  // NOT_IMPLEMENTED = 501,
  // BAD_GATEWAY = 502
}

export const SIDE_BAR = [
  {
    href: "/profile",
    name: "Profile",
    icon: CgProfile
  },
  {
    href: "/create-pool",
    name: "Share subscriptions",
    icon: FaDoorOpen
  },
  {
    href: "/subscription-management",
    name: "Manage subscriptions",
    icon: FaRegFolderOpen
  },
  {
    href: "/join-pool",
    name: "Join subscriptions",
    icon: FaSwimmingPool
  },
  {
    href: "/payment",
    name: "Payment",
    icon: MdOutlinePayment
  }
];