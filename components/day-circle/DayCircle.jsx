// "use client";

// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";
// import { useUser } from "@/context/UserContext";
// import useGetTimeSpan from "@/hooks/useGetTimeSpan";
// import useGenerateCircles from "@/hooks/useGenerateCircles";
// import MainCircle from "../main-circle/MainCircle";
// import "./DayCircle.css";

// const DayCircle = () => {
//   const { user } = useUser(); // Get the user object from context
//   const startDate = user?.startDate || null; // Ensure startDate is accessed correctly
//   const daysPassed = useGetTimeSpan(startDate); // Calculate the number of days passed since the start date
//   const { circles } = useGenerateCircles(daysPassed); // Generate circles based on the days passed
//   const svgRef = useRef(); // Reference to the SVG element for D3.js manipulation

//   useEffect(() => {
//     if (!svgRef.current) return; // Early exit if SVG reference is not available

//     const svg = d3.select(svgRef.current);
//     svg.selectAll("*").remove();

//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     const mainCircleRadius = 38;

//     // Funktion för att generera position beroende på skärmstorlek
//     const generateRandomPosition = (index) => {
//       const angle = Math.random() * 2 * Math.PI;

//       // Kontrollera om det är en mobilskärm (bredd mindre än 768px)
//       if (width < 768) {
//         // Mobillogik: Begränsa distansen till att inte vara längre än skärmens bredd minus 10px
//         const maxDistance = width / 2 - 10;
//         const randomFactor = Math.random();
//         const distance =
//           mainCircleRadius +
//           50 +
//           randomFactor * (maxDistance - mainCircleRadius - 50);

//         let x = width / 2 + distance * Math.cos(angle);
//         let y = height / 2 + distance * Math.sin(angle);

//         // Begränsa x inom skärmens bredd
//         x = Math.max(10, Math.min(x, width - 20));
//         return { x, y };
//       } else {
//         // Desktoplogik: Gamla regler
//         const distance =
//           mainCircleRadius + 50 + Math.random() * Math.log(index + 1) * 40;
//         let x = width / 2 + distance * Math.cos(angle);
//         let y = height / 2 + distance * Math.sin(angle);

//         // Begränsa x inom skärmens bredd
//         x = Math.max(10, Math.min(x, width - 20));
//         return { x, y };
//       }
//     };

//     const isOverlapping = (newCircle, existingCircles) => {
//       for (const circle of existingCircles) {
//         const dx = newCircle.x - circle.x;
//         const dy = newCircle.y - circle.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         if (distance < 15) {
//           return true;
//         }
//       }
//       return false;
//     };

//     const existingCircles = [];

//     const animateCirclesSequentially = (circlesData) => {
//       circlesData.forEach((circleData, index) => {
//         if (index >= daysPassed) return; // break out if daysPassed exceeded
//         setTimeout(() => {
//           let position;
//           let attempts = 0;
//           do {
//             position = generateRandomPosition(index);
//             attempts++;
//           } while (isOverlapping(position, existingCircles) && attempts < 100);

//           existingCircles.push(position);

//           const circleGroup = svg;

//           circleGroup
//             .append("circle")
//             .attr("cx", position.x)
//             .attr("cy", position.y)
//             .attr("r", width < 768 ? 7 : 10) // Mindre cirklar på mobil (3px) och större på desktop (5px)
//             .attr("fill", circleData.color) // Color by year
//             .attr("stroke", "#18191a")
//             .attr("stroke-width", 1)
//             .attr("class", "custom-circle");
//         }, index * 50);
//       });
//     };

//     animateCirclesSequentially(circles);
//   }, [circles, svgRef]); // Add svgRef to dependencies

//   return (
//     <div className="daycircle-container">
//       <svg ref={svgRef} width="100%" height="100%"></svg>
//       <MainCircle startDate={startDate} />
//     </div>
//   );
// };

// export default DayCircle;

"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useUser } from "@/context/UserContext";
import useGetTimeSpan from "@/hooks/useGetTimeSpan";
import useGenerateCircles from "@/hooks/useGenerateCircles";
import MainCircle from "../main-circle/MainCircle";
import "./DayCircle.css";

const DayCircle = () => {
  const { user } = useUser(); // Get the user object from context
  const startDate = user?.startDate || null; // Ensure startDate is accessed correctly
  const daysPassed = useGetTimeSpan(startDate); // Calculate the number of days passed since the start date
  const { circles } = useGenerateCircles(daysPassed); // Generate circles based on the days passed
  const svgRef = useRef(); // Reference to the SVG element for D3.js manipulation

  useEffect(() => {
    if (!svgRef.current) return; // Early exit if SVG reference is not available

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = window.innerWidth;
    const height = window.innerHeight;
    const mainCircleRadius = 38;

    // Function to generate position based on screen size
    const generateRandomPosition = (index) => {
      const angle = Math.random() * 2 * Math.PI;

      // Mobile logic: Limit distance based on screen width minus 10px
      if (width < 768) {
        const maxDistance = width / 2 - 10;
        const randomFactor = Math.random();
        const distance =
          mainCircleRadius +
          50 +
          randomFactor * (maxDistance - mainCircleRadius - 50);

        let x = width / 2 + distance * Math.cos(angle);
        let y = height / 2 + distance * Math.sin(angle);

        x = Math.max(10, Math.min(x, width - 20));
        return { x, y };
      } else {
        // Desktop logic: Use existing rules
        const distance =
          mainCircleRadius + 50 + Math.random() * Math.log(index + 1) * 40;
        let x = width / 2 + distance * Math.cos(angle);
        let y = height / 2 + distance * Math.sin(angle);

        x = Math.max(10, Math.min(x, width - 20));
        return { x, y };
      }
    };

    const isOverlapping = (newCircle, existingCircles) => {
      for (const circle of existingCircles) {
        const dx = newCircle.x - circle.x;
        const dy = newCircle.y - circle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 15) {
          return true;
        }
      }
      return false;
    };

    const existingCircles = [];

    const animateCirclesSequentially = (circlesData) => {
      circlesData.forEach((circleData, index) => {
        if (index >= daysPassed) return; // Break out if daysPassed exceeded
        setTimeout(() => {
          let position;
          let attempts = 0;
          do {
            position = generateRandomPosition(index);
            attempts++;
          } while (isOverlapping(position, existingCircles) && attempts < 100);

          existingCircles.push(position);

          const circleGroup = svg;

          circleGroup
            .append("circle")
            .attr("cx", position.x)
            .attr("cy", position.y)
            .attr("r", width < 768 ? 7 : 10) // Smaller circles on mobile (7px) and larger on desktop (10px)
            .attr("fill", circleData.color) // Color by year
            .attr("stroke", "#18191a")
            .attr("stroke-width", 1)
            .attr("class", "custom-circle");
        }, index * 50);
      });
    };

    animateCirclesSequentially(circles);
  }, [circles, daysPassed, svgRef]); // Add daysPassed to dependencies

  return (
    <div className="daycircle-container">
      <svg ref={svgRef} width="100%" height="100%"></svg>
      <MainCircle startDate={startDate} />
    </div>
  );
};

export default DayCircle;
