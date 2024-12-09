import { useState } from "react";
import { ContributionsSection } from "./components/ContributionsSection";
import { Header } from "./components/Header";
import { SelectYearSection } from "./components/SelectYearSection";

export default function App() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <main className="flex flex-col">
        <SelectYearSection
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
        <ContributionsSection selectedYear={selectedYear} />
      </main>
    </div>
  );
}
