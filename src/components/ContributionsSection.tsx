import { useState } from "react";
import { DAYS_WITH_DAY_NUMBER, MONTHS_WITH_COLSPAN } from "../constants";
import { getDateMapsForYears } from "../utils/dates";
import { DataCells } from "./DataCells";
import { DayCell } from "./DayCell";
import { MonthCell } from "./MonthCell";

export function ContributionsSection({
  selectedYear,
}: {
  selectedYear: number;
}) {
  const [contributions] = useState(getDateMapsForYears());

  return (
    <>
      <div className="border py-2 rounded">
        <table className="border-separate border-spacing-2">
          <thead>
            <tr>
              <td></td>
              {MONTHS_WITH_COLSPAN.map(({ month, colSpan }) => (
                <MonthCell key={month} month={month} colSpan={colSpan} />
              ))}
            </tr>
          </thead>

          <tbody>
            {DAYS_WITH_DAY_NUMBER.map(({ day, dayNumber, display }) => (
              <tr className="h-3 leading-none" key={day}>
                <DayCell day={day} hidden={!display} />
                <DataCells
                  contributions={
                    contributions.get(selectedYear)?.get(dayNumber) ?? []
                  }
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
