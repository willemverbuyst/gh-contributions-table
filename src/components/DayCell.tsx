import clsx from "clsx";

export function DayCell({
  day,
  hidden = false,
}: {
  day: string;
  hidden?: boolean;
}) {
  return <td className={clsx("px-3", hidden && "invisible")}>{day}</td>;
}
