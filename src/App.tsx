import { DataCells } from "./components/DataCells";
import { DayCell } from "./components/DayCell";
import { MonthCell } from "./components/MonthCell";
import { generateContributions } from "./dummyData/contributions";
import { dateMap } from "./utils/dateMap";

export default function App() {
  const contributions = generateContributions();

  return (
    <div className="w-full flex flex-col items-center">
      <header className="py-4">
        <h1 className="text-4xl">Github Contributions</h1>
      </header>
      <main>
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
                  contributions={contributions}
                  dates={dateMap.get("Sunday") ?? []}
                />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Mon" />
                <DataCells
                  contributions={contributions}
                  dates={dateMap.get("Monday") ?? []}
                />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Tue" hidden />
                <DataCells
                  contributions={contributions}
                  dates={dateMap.get("Tuesday") ?? []}
                />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Wed" />
                <DataCells
                  contributions={contributions}
                  dates={dateMap.get("Wednesday") ?? []}
                />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Thu" hidden />
                <DataCells
                  contributions={contributions}
                  dates={dateMap.get("Thursday") ?? []}
                />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Fri" />
                <DataCells
                  contributions={contributions}
                  dates={dateMap.get("Friday") ?? []}
                />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Sat" hidden />
                <DataCells
                  contributions={contributions}
                  dates={dateMap.get("Saturday") ?? []}
                />
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
