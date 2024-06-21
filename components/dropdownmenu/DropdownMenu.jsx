import React from "react";
import useGetTimeSpan from "@/hooks/useGetTimeSpan";
import Link from "next/link";
import "./DropdownMenu.css";

export default function DropdownMenu({ startDate }) {
  const daysPassed = useGetTimeSpan(startDate);

  return (
    <div className="dropdown-menu">
      <p className="dropdown-text">Days Passed: {daysPassed}</p>
      <p className="dropdown-text">Re-start</p>
      <p className="dropdown-text">Add Shortcut</p>
      <Link className="dropdown-link" href="/">
        <p className="dropdown-text">Logout</p>
      </Link>
    </div>
  );
}
