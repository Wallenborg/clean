// import useGetColorForHour from "@/hooks/useGetColorForHour";
// import "./MainCircle.css";

// export default function MainCircle() {
//   const color = useGetColorForHour(
//     new Date().getHours(),
//     new Date().getMinutes()
//   );

//   const circleStyle = {
//     backgroundColor: color,
//   };

//   return (
//     <div className="maincircle-circle" style={circleStyle}>
//       <div className="maincircle-eyes">
//         <span className="maincircle-eye"></span>
//         <span className="maincircle-eye"></span>
//       </div>
//     </div>
//   );
// }

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

  // State to manage visibility of days passed
  const [showDaysPassed, setShowDaysPassed] = useState(false);

  // Calculate days passed using the hook
  const daysPassed = useGetTimeSpan(startDate);

  // Function to toggle visibility and start timer to hide after 5 seconds
  const toggleDaysPassed = () => {
    setShowDaysPassed(true);
    setTimeout(() => {
      setShowDaysPassed(false);
    }, 5000);
  };

  return (
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
  );
}
