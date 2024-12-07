import { YEARS } from "../constants";
import { SelectYearButton } from "./SelectYearButton";

export function SelectYearSection({
  selectedYear,
  setSelectedYear,
}: {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}) {
  return (
    <section className="flex gap-2 p-4 w-[150px]">
      {YEARS.map((y) => (
        <SelectYearButton
          year={y}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      ))}
    </section>
  );
}
