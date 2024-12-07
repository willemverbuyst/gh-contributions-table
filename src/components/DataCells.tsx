import { DataCell } from "./DataCell";

export function DataCells({
  contributions,
  dates,
}: {
  contributions: { [k: string]: number };
  dates: string[];
}) {
  return dates.map((date, i) => (
    <DataCell
      key={i}
      dataIx={i}
      date={date}
      contributions={contributions[date]}
    />
  ));
}
