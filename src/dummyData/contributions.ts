const MAXIMUM_NUMBER_OF_CONTRIBUTIONS = 60;

export type Contribution = {
  id: string;
  date: Date;
};

function weightedRandom(): number {
  const random = Math.random();
  const weighted = Math.pow(random, 3);

  return Math.floor(weighted * MAXIMUM_NUMBER_OF_CONTRIBUTIONS);
}

export function generateContributions(year: number) {
  return Array.from({ length: 365 }).reduce(
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
  const years = [2020, 2021, 2022, 2023, 2024];

  const constributionsForYears = new Map();

  years.forEach((y) => {
    constributionsForYears.set(y, generateContributions(y));
  });

  return constributionsForYears;
}
