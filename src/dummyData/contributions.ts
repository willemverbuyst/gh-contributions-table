import { MAXIMUM_NUMBER_OF_CONTRIBUTIONS, YEARS } from "../constants";

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
  return Array.from({ length: getNumberOfDaysInYear(year) }).reduce(
    (acc: Record<string, number>, _, i) => {
      const today = new Date(`${year}-01-01`);
      const tomorrow = new Date(today);

      tomorrow.setDate(today.getDate() + i);

      const randomNumber = weightedRandom();
      const dataKey = tomorrow.toISOString().split("T")[0];

      acc[dataKey] = randomNumber;

      return acc;
    },
    {}
  );
}

export function getContributionsForYears() {
  const constributionsForYears = new Map();

  YEARS.forEach((y) => {
    constributionsForYears.set(y, generateContributions(y));
  });

  return constributionsForYears;
}
