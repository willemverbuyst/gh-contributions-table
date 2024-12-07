export function MonthCell({
  month,
  colSpan,
}: {
  month: string;
  colSpan: number;
}) {
  return (
    <td colSpan={colSpan} className="text-left">
      {month}
    </td>
  );
}
