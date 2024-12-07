import clsx from "clsx";
import { backgroundColor } from "../utils/dataLevel";

export function DataCell({
  dataIx,
  dataLevel,
}: {
  dataIx: number;
  dataLevel: keyof typeof backgroundColor;
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
      &nbsp;
    </td>
  );
}
