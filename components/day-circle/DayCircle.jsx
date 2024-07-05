"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useStartDate } from "@/context/StartDateContext";
import useGetTimeSpan from "@/hooks/useGetTimeSpan";
import useGenerateCircles from "@/hooks/useGenerateCircles";
import MainCircle from "../main-circle/MainCircle";
import "./DayCircle.css";

const DayCircle = () => {
  const startDate = useStartDate(); // Starting date for the calculation this is now hard-coded will be based on user input
  const daysPassed = useGetTimeSpan(startDate); // Calculates the number of days passed since the start date
  const { circles, year } = useGenerateCircles(daysPassed); // Generates circles and year based on days passed
  const svgRef = useRef(); // Reference to the SVG element for manipulation with D3.js

  useEffect(() => {
    const svg = d3.select(svgRef.current); // Selects the SVG element with D3.js
    svg.selectAll("*").remove(); // Removes all previous elements within the SVG

    const width = window.innerWidth; // Width of the window
    const height = window.innerHeight; // Height of the window
    const mainCircleRadius = 38; // Radius of the main circle
    // this is to be abel to have the small onn top of large
    const largeCirclesGroup = svg.append("g").attr("id", "large-circles"); // Group for large circles
    const smallCirclesGroup = svg.append("g").attr("id", "small-circles"); // Group for small circles

    // Function to generate random positions for the circles
    const generateRandomPosition = (index) => {
      const angle = Math.random() * 2 * Math.PI; // Random angle between 0 and 2*PI
      const distance =
        mainCircleRadius + 50 + Math.random() * Math.log(index + 1) * 40; // Logarithmic distance increment
      let x = width / 2 + distance * Math.cos(angle); // Calculate x-coordinate
      let y = height / 2 + distance * Math.sin(angle); // Calculate y-coordinate

      // Ensure circles stay within screen boundaries
      x = Math.max(10, Math.min(x, width - 20));

      return { x, y };
    };

    // Function to check for overlapping circles dont work super well
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

    const existingCircles = []; // Array to store existing circles

    // Function to render circles one by one
    const animateCirclesSequentially = (circlesData) => {
      circlesData.forEach((circleData, index) => {
        setTimeout(() => {
          let position;
          let attempts = 0;
          // Try to generate a position that does not overlap with existing circles
          do {
            position = generateRandomPosition(index);
            attempts++;
          } while (isOverlapping(position, existingCircles) && attempts < 100);

          existingCircles.push(position);

          const circleGroup =
            circleData.size === "large" ? largeCirclesGroup : smallCirclesGroup;

          circleGroup
            .append("circle")
            .attr("cx", position.x)
            .attr("cy", position.y)
            .attr("r", circleData.size === "large" ? 40 : 10) // every 28 is large
            .attr("fill", "#f9f9f9")
            .attr("stroke", "#18191a") // Adds a border to the circle
            .attr("stroke-width", 1) // Sets the border width
            .attr("class", "custom-circle");
        }, index * 200); // time for render circles one by one
      });
    };

    animateCirclesSequentially(circles);
  }, [circles]);

  return (
    <div className="daycircle-container">
      <svg ref={svgRef} width="100%" height="100%"></svg>
      <MainCircle startDate={startDate} />
      {year >= 1 ? (
        <div className="year-display">
          {year} {year === 1 ? "Year" : "Years"}
        </div>
      ) : null}
    </div>
  );
};

export default DayCircle;
