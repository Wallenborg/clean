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
  const { circles, year } = useGenerateCircles(daysPassed); // Generate circles based on the days passed
  const svgRef = useRef(); // Reference to the SVG element for D3.js manipulation

  useEffect(() => {
    if (!svgRef.current) return; // Early exit if SVG reference is not available

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = window.innerWidth;
    const height = window.innerHeight;
    const mainCircleRadius = 38;

    const largeCirclesGroup = svg.append("g").attr("id", "large-circles");
    const smallCirclesGroup = svg.append("g").attr("id", "small-circles");

    const generateRandomPosition = (index) => {
      const angle = Math.random() * 2 * Math.PI;
      const distance =
        mainCircleRadius + 50 + Math.random() * Math.log(index + 1) * 40;
      let x = width / 2 + distance * Math.cos(angle);
      let y = height / 2 + distance * Math.sin(angle);

      x = Math.max(10, Math.min(x, width - 20));

      return { x, y };
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
        setTimeout(() => {
          let position;
          let attempts = 0;
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
            .attr("r", circleData.size === "large" ? 40 : 10)
            .attr("fill", "#f9f9f9")
            .attr("stroke", "#18191a")
            .attr("stroke-width", 1)
            .attr("class", "custom-circle");
        }, index * 200);
      });
    };

    animateCirclesSequentially(circles);
  }, [circles, svgRef]); // Add svgRef to dependencies

  return (
    <div className="daycircle-container">
      <svg ref={svgRef} width="100%" height="100%"></svg>
      <MainCircle startDate={startDate} />
      {year >= 1 && (
        <div className="year-display">
          + {year} {year === 1 ? "Year" : "Years"}
        </div>
      )}
    </div>
  );
};

export default DayCircle;
