import clsx from "clsx";
import { Tooltip } from "react-tooltip";
import { backgroundColor } from "../utils/dataLevel";
import { formatDate } from "../utils/dateHelpers";

export function DataCell({
  dataIx,
  dataLevel,
  date,
  contributions,
}: {
  dataIx: number;
  dataLevel: keyof typeof backgroundColor;
  date: string;
  contributions: number;
}) {
  return (
    <td
      data-ix={dataIx}
      data-level={dataLevel}
      className={clsx(
        "border border-gray-300 w-5 rounded",
        backgroundColor[dataLevel]
      )}
    >
      <a
        data-tooltip-id={date}
        data-tooltip-content={`${
          contributions ? contributions : "No"
        } contributions on ${formatDate(date)}`}
        className="flex"
      >
        &nbsp;
      </a>
      <Tooltip id={date} />
    </td>
  );
}
