import clsx from "clsx";
import { Tooltip } from "react-tooltip";
import { BACKGROUND_COLOR } from "../constants";
import { Data } from "../types/Data";
import { formatDate } from "../utils/dateHelpers";

export function DataCell({ contribution }: { contribution: Data }) {
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

  const events = contribution.contributions ?? 0;
  const dataLevel = getDataLevel(events);

  return (
    <td
      data-ix={contribution.weekNumber}
      data-level={dataLevel}
      className={clsx(
        "border border-gray-300 w-5 rounded",
        BACKGROUND_COLOR[dataLevel]
      )}
    >
      <a
        data-tooltip-id={contribution.date}
        data-tooltip-content={`${
          events ? events : "No"
        } contributions on ${formatDate(contribution.date)}`}
        className="flex"
      >
        &nbsp;
      </a>
      <Tooltip id={contribution.date} />
    </td>
  );
}
