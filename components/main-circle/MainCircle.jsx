import React, { useState } from "react";
import useGetColorForHour from "@/hooks/useGetColorForHour";
import "./MainCircle.css";
import useGetTimeSpan from "@/hooks/useGetTimeSpan";

export default function MainCircle({ startDate }) {
  const color = useGetColorForHour(
    new Date().getHours(),
    new Date().getMinutes()
  );
  const circleStyle = {
    backgroundColor: color,
  };

  const [showDaysPassed, setShowDaysPassed] = useState(false);

  const daysPassed = useGetTimeSpan(startDate);

  const toggleDaysPassed = () => {
    setShowDaysPassed(true);
    setTimeout(() => {
      setShowDaysPassed(false);
    }, 5000);
  };
  // test by adding a box for main circle
  return (
    <div className="test">
      <div
        className="maincircle-circle"
        style={circleStyle}
        onClick={toggleDaysPassed}
      >
        <div className="maincircle-eyes">
          <span className="maincircle-eye"></span>
          <span className="maincircle-eye"></span>
        </div>
        {showDaysPassed && (
          <div className="days-passed-text">
            {startDate && <>Days Clean: {daysPassed}</>}
          </div>
        )}
      </div>
    </div>
  );
}
