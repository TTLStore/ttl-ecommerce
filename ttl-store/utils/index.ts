const isDebugMode = process.env.DEBUG === 'true';

// console log with color for the debug mode
export const log = (message: string, color: string = 'white') => {
  if (isDebugMode) {
    console.log(`%c${message}`, `color: ${color}`);
  }
}