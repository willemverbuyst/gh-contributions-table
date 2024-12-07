import clsx from "clsx";

export function DayCell({
  day,
  hidden = false,
}: {
  day: string;
  hidden?: boolean;
}) {
  return (
    <td className={clsx("text-gray-700", hidden && "invisible")}>{day}</td>
  );
}
