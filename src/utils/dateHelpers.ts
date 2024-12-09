import { format } from "date-fns";

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return format(date, "MMMM do");
}

export function getDateString(date: Date) {
  return date.toISOString().split("T")[0];
}
