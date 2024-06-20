// import { useMemo } from "react";

// function useGenerateCircles(daysPassed) {
//   const circles = useMemo(() => {
//     return Array.from({ length: daysPassed }, (_, index) => {
//       const dayNumber = index + 1;
//       return {
//         id: dayNumber,
//         size: dayNumber % 28 === 0 ? "large" : "small",
//       };
//     });
//   }, [daysPassed]);

//   return circles;
// }

// export default useGenerateCircles;

// working good

// import { useMemo, useState, useEffect } from "react";

// function useGenerateCircles(daysPassed) {
//   const [year, setYear] = useState(0);

//   useEffect(() => {
//     const currentYear = Math.floor(daysPassed / 365);
//     setYear(currentYear);
//   }, [daysPassed]);

//   const circles = useMemo(() => {
//     // add +1 to see the first day
//     const currentCycleDays = (daysPassed % 365) + 1;

//     return Array.from({ length: currentCycleDays }, (_, index) => {
//       const dayNumber = index + 1;
//       return {
//         id: dayNumber,
//       };
//     });
//   }, [daysPassed]);

//   return { circles, year };
// }

// export default useGenerateCircles;

import { useMemo, useState, useEffect } from "react";

function useGenerateCircles(daysPassed) {
  const [year, setYear] = useState(0);

  useEffect(() => {
    const currentYear = Math.floor(daysPassed / 365);
    setYear(currentYear);
  }, [daysPassed]);

  const circles = useMemo(() => {
    // add +1 to see the first day
    const currentCycleDays = (daysPassed % 365) + 1;

    return Array.from({ length: currentCycleDays }, (_, index) => {
      const dayNumber = index + 1;
      return {
        id: dayNumber,
        color: index % 28 === 0 ? "#4fe78e" : "black", // Assign green color every 28th circle
      };
    });
  }, [daysPassed]);

  return { circles, year };
}

export default useGenerateCircles;
