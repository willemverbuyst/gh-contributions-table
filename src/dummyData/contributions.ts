import { getDateString } from "../utils/dateHelpers";

const YEARS = [2020, 2021, 2022, 2023, 2024];
const MAXIMUM_NUMBER_OF_CONTRIBUTIONS = 60;

function getNumberOfDaysInYear(year: number) {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  return isLeapYear ? 366 : 365;
}

function weightedRandom(): number {
  const random = Math.random();
  const weighted = Math.pow(random, 3);

  return Math.floor(weighted * MAXIMUM_NUMBER_OF_CONTRIBUTIONS);
}

export function generateContributions(year: number) {
  const contributions: Map<string, number> = new Map();

  Array.from({ length: getNumberOfDaysInYear(year) }).forEach((_, i) => {
    const today = new Date(`${year}-01-01`);
    const tomorrow = new Date(today);

    tomorrow.setDate(today.getDate() + i);

    const randomNumber = weightedRandom();
    const dataKey = getDateString(tomorrow);

    contributions.set(dataKey, randomNumber);
  });

  return contributions;
}

export function getDummyData() {
  const contributionsForYears: Map<number, Map<string, number>> = new Map();

  YEARS.forEach((y) => {
    contributionsForYears.set(y, generateContributions(y));
  });

  return contributionsForYears;
}
