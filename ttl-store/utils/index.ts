import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
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