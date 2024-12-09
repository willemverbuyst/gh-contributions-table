import { useContributions } from "../hooks/useContributions";
import { SelectYearButton } from "./SelectYearButton";

export function SelectYearSection({
  selectedYear,
  setSelectedYear,
}: {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}) {
  const { years } = useContributions();

  return (
    <section className="flex gap-2 p-4 w-[150px]">
      {years.map((y) => (
        <SelectYearButton
          key={y}
          year={y}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      ))}
    </section>
  );
}
