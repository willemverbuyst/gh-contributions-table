import clsx from "clsx";
import { useState } from "react";
import { DataCells } from "./components/DataCells";
import { DayCell } from "./components/DayCell";
import { MonthCell } from "./components/MonthCell";
import { getContributionsForYears } from "./dummyData/contributions";
import { getDateMapsForYears } from "./utils/dateMap";

export default function App() {
  const [contributions] = useState(getContributionsForYears());
  const [year, setYear] = useState(new Date().getFullYear());
  const [dateMapForYears] = useState(getDateMapsForYears());

  function handleClick(selectedYear: number) {
    setYear(selectedYear);
  }

  return (
    <div className="w-full flex flex-col items-center">
      <header className="py-4">
        <h1 className="text-4xl">Github Contributions</h1>
      </header>
      <main>
        <section className="flex gap-2 p-4 w-[150px]">
          <button
            className={clsx(
              "py-1 px-4 text-gray-500",
              year === 2020 && "bg-blue-600 text-white rounded",
              year !== 2020 && "hover:bg-gray-200 rounded"
            )}
            onClick={() => handleClick(2020)}
          >
            2020
          </button>
          <button
            className={clsx(
              "py-1 px-4 text-gray-500",
              year === 2021 && "bg-blue-600 text-white rounded",
              year !== 2021 && "hover:bg-gray-200 rounded"
            )}
            onClick={() => handleClick(2021)}
          >
            2021
          </button>
          <button
            className={clsx(
              "py-1 px-4 text-gray-500",
              year === 2022 && "bg-blue-600 text-white rounded",
              year !== 2022 && "hover:bg-gray-200 rounded"
            )}
            onClick={() => handleClick(2022)}
          >
            2022
          </button>
          <button
            className={clsx(
              "py-1 px-4 text-gray-500",
              year === 2023 && "bg-blue-600 text-white rounded",
              year !== 2023 && "hover:bg-gray-200 rounded"
            )}
            onClick={() => handleClick(2023)}
          >
            2023
          </button>
          <button
            className={clsx(
              "py-1 px-4 text-gray-500",
              year === 2024 && "bg-blue-600 text-white rounded",
              year !== 2024 && "hover:bg-gray-200 rounded"
            )}
            onClick={() => handleClick(2024)}
          >
            2024
          </button>
        </section>
        <div className="border py-2 rounded">
          <table className="border-separate border-spacing-2">
            <thead>
              <tr>
                <td></td>
                <MonthCell month="Jan" colSpan={4} />
                <MonthCell month="Feb" colSpan={4} />
                <MonthCell month="Mar" colSpan={5} />
                <MonthCell month="Apr" colSpan={4} />
                <MonthCell month="May" colSpan={4} />
                <MonthCell month="Jun" colSpan={5} />
                <MonthCell month="Jul" colSpan={4} />
                <MonthCell month="Aug" colSpan={5} />
                <MonthCell month="Sep" colSpan={4} />
                <MonthCell month="Oct" colSpan={4} />
                <MonthCell month="Nov" colSpan={4} />
                <MonthCell month="Dec" colSpan={5} />
              </tr>
            </thead>

            <tbody>
              <tr className="h-3 leading-none">
                <DayCell day="Sun" hidden />
                <DataCells
                  contributions={contributions.get(year)}
                  dates={dateMapForYears.get(year).get("Sunday") ?? []}
                />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Mon" />
                <DataCells
                  contributions={contributions.get(year)}
                  dates={dateMapForYears.get(year).get("Monday") ?? []}
                />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Tue" hidden />
                <DataCells
                  contributions={contributions.get(year)}
                  dates={dateMapForYears.get(year).get("Tuesday") ?? []}
                />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Wed" />
                <DataCells
                  contributions={contributions.get(year)}
                  dates={dateMapForYears.get(year).get("Wednesday") ?? []}
                />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Thu" hidden />
                <DataCells
                  contributions={contributions.get(year)}
                  dates={dateMapForYears.get(year).get("Thursday") ?? []}
                />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Fri" />
                <DataCells
                  contributions={contributions.get(year)}
                  dates={dateMapForYears.get(year).get("Friday") ?? []}
                />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Sat" hidden />
                <DataCells
                  contributions={contributions.get(year)}
                  dates={dateMapForYears.get(year).get("Saturday") ?? []}
                />
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
