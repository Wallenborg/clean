import { useMemo } from "react";

function useGenerateCircles(daysPassed) {
  const circles = useMemo(() => {
    return Array.from({ length: daysPassed }, (_, index) => {
      const dayNumber = index + 1;
      return {
        id: dayNumber,
        size: dayNumber % 28 === 0 ? "large" : "small",
      };
    });
  }, [daysPassed]);

  return circles;
}

export default useGenerateCircles;
