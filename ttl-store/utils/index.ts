import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
import { ZodError } from "zod";

const isDebugMode = process.env.DEBUG === 'true';

/** 
 * console log with color for the debug mode
 */
export const log = (message: string, color: string = 'white') => {
  if (isDebugMode) {
    console.log(`%c${message}`, `color: ${color}`);
  }
}

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