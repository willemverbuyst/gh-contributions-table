import { useState } from "react";
import { getContributionsForYears } from "../dummyData/contributions";
import { getDateMapsForYears } from "../utils/dateMap";
import { DataCells } from "./DataCells";
import { DayCell } from "./DayCell";
import { MonthCell } from "./MonthCell";

export function ContributionsSection({
  selectedYear,
}: {
  selectedYear: number;
}) {
  const [contributions] = useState(getContributionsForYears());
  const [dateMapForYears] = useState(getDateMapsForYears());

  return (
    <>
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
                contributions={contributions.get(selectedYear)}
                dates={dateMapForYears.get(selectedYear).get("Sunday") ?? []}
              />
            </tr>
            <tr className="h-3 leading-none">
              <DayCell day="Mon" />
              <DataCells
                contributions={contributions.get(selectedYear)}
                dates={dateMapForYears.get(selectedYear).get("Monday") ?? []}
              />
            </tr>
            <tr className="h-3 leading-none">
              <DayCell day="Tue" hidden />
              <DataCells
                contributions={contributions.get(selectedYear)}
                dates={dateMapForYears.get(selectedYear).get("Tuesday") ?? []}
              />
            </tr>
            <tr className="h-3 leading-none">
              <DayCell day="Wed" />
              <DataCells
                contributions={contributions.get(selectedYear)}
                dates={dateMapForYears.get(selectedYear).get("Wednesday") ?? []}
              />
            </tr>
            <tr className="h-3 leading-none">
              <DayCell day="Thu" hidden />
              <DataCells
                contributions={contributions.get(selectedYear)}
                dates={dateMapForYears.get(selectedYear).get("Thursday") ?? []}
              />
            </tr>
            <tr className="h-3 leading-none">
              <DayCell day="Fri" />
              <DataCells
                contributions={contributions.get(selectedYear)}
                dates={dateMapForYears.get(selectedYear).get("Friday") ?? []}
              />
            </tr>
            <tr className="h-3 leading-none">
              <DayCell day="Sat" hidden />
              <DataCells
                contributions={contributions.get(selectedYear)}
                dates={dateMapForYears.get(selectedYear).get("Saturday") ?? []}
              />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
