import { format } from 'date-fns';

export function formatDDMMYYYY(date: string) {
  const temp = date.split('T')[0]
  return format(new Date(temp), 'dd/MM/yyyy');
}

export function formatMMDDYYYY(date: string) {
  const temp = date.split('T')[0]
  return format(new Date(temp), 'MM/dd/yyyy');
}