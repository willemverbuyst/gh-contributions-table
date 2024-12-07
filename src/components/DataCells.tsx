import { DataCell } from "./DataCell";

export function DataCells({
  contributions,
  dates,
}: {
  contributions: { [k: string]: number };
  dates: (string | null)[];
}) {
  return dates.map((date, i) =>
    date ? (
      <DataCell
        key={i}
        dataIx={i}
        date={date}
        contributions={contributions[date]}
      />
    ) : (
      <td>&nbsp;</td>
    )
  );
}
