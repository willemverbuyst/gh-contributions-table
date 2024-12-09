import { YEARS } from "../constants";
import { getContributionsForYears } from "../dummyData/contributions";
import { getDateString } from "./dateHelpers";

const contributions = getContributionsForYears();

export type Data = {
  date: string;
  weekNumber: number;
  year: number;
  contributions: number | undefined;
};

export function createDatesArray(day: number, year: number) {
  const dates: (Data | null)[] = [];
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
      const dateString = getDateString(dd);
      dates.push({
        date: dateString,
        weekNumber: i + 1,
        year,
        contributions: contributions.get(year)?.get(dateString),
      });
    }
  });

  return dates;
}

export function createDays(year: number) {
  const days: Map<number, (Data | null)[]> = new Map();

  Array.from({ length: 7 }).forEach((_, i) => {
    days.set(i, createDatesArray(i, year));
  });

  return days;
}

export function getDateMapsForYears() {
  const contributionDates: Map<
    number,
    Map<number, (Data | null)[]>
  > = new Map();

  YEARS.forEach((y) => {
    contributionDates.set(y, createDays(y));
  });

  return contributionDates;
}
