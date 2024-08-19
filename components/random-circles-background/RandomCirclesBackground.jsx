// import React, { useEffect, useState } from "react";
// import "./RandomCirclesBackground.css";

// export default function RandomCirclesBackground() {
//   const [smallCircleCount, setSmallCircleCount] = useState(10);
//   const [largeCircleCount, setLargeCircleCount] = useState(5);

//   useEffect(() => {
//     const updateCircleCount = () => {
//       if (window.matchMedia("(max-width: 768px)").matches) {
//         // Mobil
//         setSmallCircleCount(10);
//         setLargeCircleCount(4);
//       } else {
//         // Laptop plus
//         setSmallCircleCount(30);
//         setLargeCircleCount(5);
//       }
//     };

//     updateCircleCount();

//     window.addEventListener("resize", updateCircleCount);

//     return () => {
//       window.removeEventListener("resize", updateCircleCount);
//     };
//   }, []);

//   return (
//     <div className="random-circles-background">
//       {[...Array(smallCircleCount + largeCircleCount)].map((_, i) => (
//         <div
//           key={i}
//           className={`circle ${i < smallCircleCount ? "small" : "big"}`}
//           style={{
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./RandomCirclesBackground.css";

export default function RandomCirclesBackground() {
  const [smallCircleCount, setSmallCircleCount] = useState(10);
  const [largeCircleCount, setLargeCircleCount] = useState(5);
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const updateCircleCount = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        // Mobil
        setSmallCircleCount(10);
        setLargeCircleCount(4);
      } else {
        // Laptop plus
        setSmallCircleCount(30);
        setLargeCircleCount(5);
      }
    };

    updateCircleCount();
    window.addEventListener("resize", updateCircleCount);

    return () => {
      window.removeEventListener("resize", updateCircleCount);
    };
  }, []);

  useEffect(() => {
    // Generera cirklarnas positioner endast på klienten
    const newCircles = [...Array(smallCircleCount + largeCircleCount)].map(
      (_, i) => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        type: i < smallCircleCount ? "small" : "big",
      })
    );
    setCircles(newCircles);
  }, [smallCircleCount, largeCircleCount]); // Körs om små eller stora cirklar ändras

  return (
    <div className="random-circles-background">
      {circles.map((circle, i) => (
        <div
          key={i}
          className={`circle ${circle.type}`}
          style={{
            top: circle.top,
            left: circle.left,
          }}
        ></div>
      ))}
    </div>
  );
}
