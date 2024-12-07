export function getDayOfTheFirstInMonth(year: number, month: number) {
  const date = new Date(year, month, 1);

  return date.getDay();
}

export function createDatesArray(day: number) {
  const dayOfTheFirstInMonth = getDayOfTheFirstInMonth(2022, 0);
  const dates: string[] = [];
  const d = new Date("2022-01-01");
  const startDate = new Date(d);

  startDate.setDate(d.getDate() - (dayOfTheFirstInMonth - day));

  Array.from({ length: 52 }).forEach((_, i) => {
    const dd = new Date(startDate);

    dd.setDate(startDate.getDate() + i * 7);

    dates.push(dd.toISOString().split("T")[0]);
  });

  return dates;
}

export const dateMap = new Map([
  ["Monday", createDatesArray(1)],
  ["Tuesday", createDatesArray(2)],
  ["Wednesday", createDatesArray(3)],
  ["Thursday", createDatesArray(4)],
  ["Friday", createDatesArray(5)],
  ["Saturday", createDatesArray(6)],
  ["Sunday", createDatesArray(0)],
]);
