import React, { useEffect, useState } from "react";
import "./RandomCirclesBackground.css";

export default function RandomCirclesBackground() {
  const [smallCircleCount, setSmallCircleCount] = useState(10);
  const [largeCircleCount, setLargeCircleCount] = useState(5);
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const updateCircleCount = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setSmallCircleCount(0);
        setLargeCircleCount(0);
      } else {
        setSmallCircleCount(30);
        setLargeCircleCount(4);
      }
    };

    updateCircleCount();
    window.addEventListener("resize", updateCircleCount);

    return () => {
      window.removeEventListener("resize", updateCircleCount);
    };
  }, []);

  useEffect(() => {
    const newCircles = [...Array(smallCircleCount + largeCircleCount)].map(
      (_, i) => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        type: i < smallCircleCount ? "small" : "big",
      })
    );
    setCircles(newCircles);
  }, [smallCircleCount, largeCircleCount]);

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
