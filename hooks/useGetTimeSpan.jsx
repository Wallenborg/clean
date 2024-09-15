"use client";
import { useState, useEffect } from "react";

function useGetTimeSpan(startDate) {
  const [daysPassed, setDaysPassed] = useState(0);

  useEffect(() => {
    if (!startDate) return; // Handle missing startDate

    const calculateDaysPassed = () => {
      const start = new Date(startDate);
      if (isNaN(start.getTime())) {
        console.error("Invalid startDate:", startDate); // Debugging info
        return;
      }

      const now = new Date();
      const timeDifference = now - start;
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      setDaysPassed(daysDifference);
    };

    calculateDaysPassed();
  }, [startDate]);

  return daysPassed;
}

export default useGetTimeSpan;
