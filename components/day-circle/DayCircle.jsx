"use client";
import React from "react";
import useGetTimeSpan from "@/hooks/useGetTimeSpan";
import useGenerateCircles from "@/hooks/useGenerateCircles";
import "./DayCircle.css";
import MainCircle from "../main-circle/MainCircle";

export default function DayCircle() {
  const startDate = "2024-05-01"; //this is just a hard coded test
  const daysPassed = useGetTimeSpan(startDate);
  const circles = useGenerateCircles(daysPassed);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "80px" }}>
        <MainCircle />
        {circles.map((circle) => (
          <div
            key={circle.id}
            style={{
              width: circle.size === "large" ? "80px" : "20px",
              height: circle.size === "large" ? "80px" : "20px",
              borderRadius: "50%",
              backgroundColor: "black",
              margin: "5px",
              boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.672)",
              animation: "breathe 4s ease-in-out infinite",
            }}
          />
        ))}
      </div>
    </div>
  );
}
