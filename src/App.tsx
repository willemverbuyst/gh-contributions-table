import { DataCells } from "./components/DataCells";
import { DayCell } from "./components/DayCell";
import { MonthCell } from "./components/MonthCell";
import { generateContributions } from "./dummyData/contributions";

export default function App() {
  const contributions = generateContributions();

  function getContributionsForDay(day: number) {
    return Object.fromEntries(
      Object.entries(contributions).filter(
        ([k]) => new Date(k).getDay() === day
      )
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      <header className="py-4">
        <h1 className="text-4xl">Github Contributions Table</h1>
      </header>
      <main>
        <div className="border py-2 rounded">
          <table className="border-separate border-spacing-2">
            <thead>
              <tr>
                <td></td>
                <MonthCell month="Dec" colSpan={5} />
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
              </tr>
            </thead>

            <tbody>
              <tr className="h-3 leading-none">
                <DayCell day="Sun" hidden />
                <DataCells contributions={getContributionsForDay(0)} />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Mon" />
                <DataCells contributions={getContributionsForDay(1)} />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Tue" hidden />
                <DataCells contributions={getContributionsForDay(2)} />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Wed" />
                <DataCells contributions={getContributionsForDay(3)} />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Thu" hidden />
                <DataCells contributions={getContributionsForDay(4)} />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Fri" />
                <DataCells contributions={getContributionsForDay(5)} />
              </tr>
              <tr className="h-3 leading-none">
                <DayCell day="Sat" hidden />
                <DataCells contributions={getContributionsForDay(6)} />
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
