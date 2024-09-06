import { useMemo, useState, useEffect } from "react";

function useGenerateCircles(daysPassed) {
  const [year, setYear] = useState(0);

  useEffect(() => {
    const currentYear = Math.floor(daysPassed / 365);
    setYear(currentYear);
  }, [daysPassed]);

  const circles = useMemo(() => {
    const currentCycleDays = (daysPassed % 365) + 1;

    return Array.from({ length: currentCycleDays }, (_, index) => {
      const dayNumber = index + 1;
      return {
        id: dayNumber,

        size: dayNumber % 28 === 0 ? "large" : "small",
      };
    });
  }, [daysPassed]);

  return { circles, year };
}

export default useGenerateCircles;
