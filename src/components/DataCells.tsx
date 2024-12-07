import { DataCell } from "./DataCell";

export function DataCells({
  contributions,
}: {
  contributions: { [k: string]: number };
}) {
  function getDataLevel(v: number) {
    switch (true) {
      case v === 0:
        return 0;
      case v < 15:
        return 1;
      case v < 30:
        return 2;
      case v < 45:
        return 3;
      default:
        return 4;
    }
  }

  return Object.values(contributions).map((v, i) => (
    <DataCell dataIx={i} dataLevel={getDataLevel(v)} />
  ));
}
