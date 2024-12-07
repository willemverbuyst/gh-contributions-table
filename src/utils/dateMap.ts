import { YEARS } from "../constants";

export function getDayOfTheFirstInMonth(year: number, month: number) {
  const date = new Date(year, month, 1);

  return date.getDay();
}

export function createDatesArray(day: number, year: number) {
  const dates: (string | null)[] = [];
  const firstDate = new Date(`${year}-01-01`);
  const lastDate = new Date(`${year}-12-31`);
  const dayOfTheFirstInMonth = firstDate.getDay();

  const startDate = new Date(firstDate);

  startDate.setDate(firstDate.getDate() - (dayOfTheFirstInMonth - day));

  Array.from({ length: 53 }).forEach((_, i) => {
    const dd = new Date(startDate);

    dd.setDate(startDate.getDate() + i * 7);

    if (
      dd.getTime() < firstDate.getTime() ||
      dd.getTime() > lastDate.getTime()
    ) {
      dates.push(null);
    } else {
      dates.push(dd.toISOString().split("T")[0]);
    }
  });

  return dates;
}

export function getDateMap(year: number) {
  return new Map([
    ["Sunday", createDatesArray(0, year)],
    ["Monday", createDatesArray(1, year)],
    ["Tuesday", createDatesArray(2, year)],
    ["Wednesday", createDatesArray(3, year)],
    ["Thursday", createDatesArray(4, year)],
    ["Friday", createDatesArray(5, year)],
    ["Saturday", createDatesArray(6, year)],
  ]);
}

export function getDateMapsForYears() {
  const dateMapForYears = new Map();

  YEARS.forEach((y) => {
    dateMapForYears.set(y, getDateMap(y));
  });

  return dateMapForYears;
}
