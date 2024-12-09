import { useState } from "react";
import { getDummyData } from "../dummyData/contributions";
import { Data } from "../types/Data";
import { getDateString } from "../utils/dateHelpers";

export function createDataArray(
  day: number,
  year: number,
  events: Map<number, Map<string, number>>
) {
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
        contributions: events.get(year)?.get(dateString),
      });
    }
  });

  return dates;
}

export function createDaysMap(
  year: number,
  events: Map<number, Map<string, number>>
) {
  const days: Map<number, (Data | null)[]> = new Map();

  Array.from({ length: 7 }).forEach((_, i) => {
    days.set(i, createDataArray(i, year, events));
  });

  return days;
}

export function createContributionsMap(
  events: Map<number, Map<string, number>>,
  years: number[]
) {
  const contributionDates: Map<
    number,
    Map<number, (Data | null)[]>
  > = new Map();

  years.forEach((y) => {
    contributionDates.set(y, createDaysMap(y, events));
  });

  return contributionDates;
}

export function useContributions() {
  const dummyEvents = getDummyData();
  const years = Array.from(dummyEvents.keys());

  const [contributions] = useState(createContributionsMap(dummyEvents, years));

  return { contributions, years };
}
