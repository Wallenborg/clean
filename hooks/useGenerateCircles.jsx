// import { useMemo, useState, useEffect } from "react";

// function useGenerateCircles(daysPassed) {
//   const [year, setYear] = useState(0);

//   useEffect(() => {
//     const currentYear = Math.floor(daysPassed / 365);
//     setYear(currentYear);
//   }, [daysPassed]);

//   const circles = useMemo(() => {
//     const currentCycleDays = (daysPassed % 365) + 1;

//     return Array.from({ length: currentCycleDays }, (_, index) => {
//       const dayNumber = index + 1;
//       return {
//         id: dayNumber,

//         size: dayNumber % 28 === 0 ? "large" : "small",
//       };
//     });
//   }, [daysPassed]);

//   return { circles, year };
// }

// export default useGenerateCircles;

import { useMemo, useState, useEffect } from "react";

const colors = [
  "#f9f9f9", // Bright off-white (Year 1)
  "#ffd700", // Golden yellow (Year 2)
  "#e28743", // Warm amber (Year 3)
  "#8cb369", // Muted green (Year 4)
  "#569cbf", // Soft blue (Year 5)
  "#d36c96", // Dusty rose (Year 6)
  "#b392ac", // Light lavender (Year 7)
  "#6883ba", // Cool grayish-blue (Year 8)
  "#c2c1c2", // Neutral silver (Year 9)
  "#a68d60", // Soft taupe (Year 10)
];

function useGenerateCircles(daysPassed) {
  const [year, setYear] = useState(0);

  useEffect(() => {
    const currentYear = Math.floor(daysPassed / 365);
    setYear(currentYear);
  }, [daysPassed]);

  const getColorForYear = (day) => {
    const yearIndex = Math.floor(day / 365); // Get the year index based on the number of days
    return colors[yearIndex % colors.length]; // Return the color for the corresponding year
  };

  const circles = useMemo(() => {
    return Array.from({ length: daysPassed }, (_, index) => {
      const dayNumber = index + 1;
      return {
        id: dayNumber,
        year: Math.floor(dayNumber / 365), // Calculate the year for each day
        color: getColorForYear(dayNumber), // Assign color based on the year for each day
      };
    });
  }, [daysPassed]);

  return { circles, year };
}

export default useGenerateCircles;
