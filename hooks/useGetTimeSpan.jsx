import { useState, useEffect } from "react";

function useGetTimeSpan(startDate) {
  const [daysPassed, setDaysPassed] = useState(0);

  useEffect(() => {
    const calculateDaysPassed = () => {
      const start = new Date(startDate);
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
