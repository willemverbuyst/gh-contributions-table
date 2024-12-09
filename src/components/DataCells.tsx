import { Data } from "../types/Data";
import { DataCell } from "./DataCell";

export function DataCells({
  contributions,
}: {
  contributions: (Data | null)[];
}) {
  return contributions.map((contribution, i) =>
    contribution ? (
      <DataCell key={i} contribution={contribution} />
    ) : (
      <td key={i}>&nbsp;</td>
    )
  );
}
