import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
import { ZodError } from "zod";

/** 
 * connect classnames without conflict
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandom32BitsString() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function roundToTwo(num: number) {
  return +(Math.round(Number(num + "e+2")) + "e-2");
}

export function makeDeepCopy(obj : any) : any {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Converts a Zod error into a readable string.
 * @param error - The ZodError object.
 * @returns A formatted string containing error messages.
 */
export function formatZodErrors(error: ZodError): string {
  return error.errors
    .map((err) => `${err.path.join(".")}: ${err.message}`)
    .join("\n");
}

export function convert2Cents(money : number) : number {
  return money * 100;
}

/**
 * 
 * @param servicePrice - Price of the Subscription
 * @param maxServiceMembers - The maximum members that provider allows excludes the host
 * @param targetMembers - the maximum members that the host allows. This must be less than maxServiceMembers
 * 
 * @returns total received funds
 */
export function calTotalRecievedFunds({
  servicePrice,
  maxServiceMembers,
  targetMembers
}: {
  servicePrice : number,
  maxServiceMembers : number,
  targetMembers : number
}) {
  if (targetMembers > maxServiceMembers || targetMembers <= 0) return 0;

  const pricePerMember = calculatePricePerMember({servicePrice, maxServiceMembers});
  return roundToTwo(pricePerMember * targetMembers);
}


export function calculatePricePerMember({
  servicePrice,
  maxServiceMembers
} : {
  servicePrice : number,
  maxServiceMembers : number
}) {
  return roundToTwo(servicePrice/ (maxServiceMembers + 1));
}