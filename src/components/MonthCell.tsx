export function MonthCell({
  month,
  colSpan,
}: {
  month: string;
  colSpan: number;
}) {
  return (
    <td colSpan={colSpan} className="text-gray-700 text-left">
      {month}
    </td>
  );
}
