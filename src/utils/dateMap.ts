export function getDayOfTheFirstInMonth(year: number, month: number) {
  const date = new Date(year, month, 1);

  return date.getDay();
}

export function createDatesArray(day: number, year: number) {
  const dayOfTheFirstInMonth = getDayOfTheFirstInMonth(2023, 0);
  const dates: (string | null)[] = [];
  const d = new Date(`${year}-01-01`);
  const startDate = new Date(d);

  startDate.setDate(d.getDate() - (dayOfTheFirstInMonth - day));

  Array.from({ length: 52 + (dayOfTheFirstInMonth === day ? 0 : 1) }).forEach(
    (_, i) => {
      const dd = new Date(startDate);

      dd.setDate(startDate.getDate() + i * 7);

      if (dd.getTime() < d.getTime()) {
        dates.push(null);
      } else {
        dates.push(dd.toISOString().split("T")[0]);
      }
    }
  );

  return dates;
}

export function getDateMap(year: number) {
  return new Map([
    ["Monday", createDatesArray(1, year)],
    ["Tuesday", createDatesArray(2, year)],
    ["Wednesday", createDatesArray(3, year)],
    ["Thursday", createDatesArray(4, year)],
    ["Friday", createDatesArray(5, year)],
    ["Saturday", createDatesArray(6, year)],
    ["Sunday", createDatesArray(0, year)],
  ]);
}

export function getDateMapsForYears() {
  const years = [2020, 2021, 2022, 2023, 2024];

  const dateMapForYears = new Map();

  years.forEach((y) => {
    dateMapForYears.set(y, getDateMap(y));
  });

  return dateMapForYears;
}
