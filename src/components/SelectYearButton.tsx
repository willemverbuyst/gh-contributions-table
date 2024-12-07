import { clsx } from "clsx";

export function SelectYearButton({
  year,
  selectedYear,
  setSelectedYear,
}: {
  year: number;
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}) {
  return (
    <button
      className={clsx(
        "py-1 px-4 text-gray-500",
        selectedYear === year && "bg-blue-600 text-white rounded",
        selectedYear !== year && "hover:bg-gray-200 rounded"
      )}
      onClick={() => setSelectedYear(year)}
    >
      {year}
    </button>
  );
}
