import { generateRandomDataLevel } from "../utils/dataLevel";
import { DataCell } from "./DataCell";

export function DataCells() {
  return Array.from({ length: 52 }, (_, i) => i).map((_, i) => (
    <DataCell dataIx={i} dataLevel={generateRandomDataLevel()} />
  ));
}
