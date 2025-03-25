import * as dateFns from 'date-fns';

export function formatDDMMYYYY(date: string) {
  const temp = date.split('T')[0]
  return dateFns.format(new Date(temp), 'dd/MM/yyyy');
}

export function formatMMDDYYYY(date: string) {
  const temp = date.split('T')[0]
  return dateFns.format(new Date(temp), 'MM/dd/yyyy');
}

export function addDays(date: Date, days: number) {
  return dateFns.addDays(date, days);
}