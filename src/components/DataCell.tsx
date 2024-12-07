import clsx from "clsx";
import { Tooltip } from "react-tooltip";
import { BACKGROUND_COLOR } from "../constants";
import { formatDate } from "../utils/dateHelpers";

export function DataCell({
  dataIx,
  date,
  contributions,
}: {
  dataIx: number;
  date: string;
  contributions: number;
}) {
  function getDataLevel(v: number) {
    switch (true) {
      case v > 45:
        return 4;
      case v > 30:
        return 3;
      case v > 15:
        return 2;
      case v > 0:
        return 1;
      default:
        return 0;
    }
  }

  const dataLevel = getDataLevel(contributions);

  return (
    <td
      data-ix={dataIx}
      data-level={dataLevel}
      className={clsx(
        "border border-gray-300 w-5 rounded",
        BACKGROUND_COLOR[dataLevel]
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
