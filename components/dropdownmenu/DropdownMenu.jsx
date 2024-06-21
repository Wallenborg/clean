import React from "react";
import useGetTimeSpan from "@/hooks/useGetTimeSpan";
import Link from "next/link";
import "./DropdownMenu.css";

export default function DropdownMenu({ startDate }) {
  const daysPassed = useGetTimeSpan(startDate);

  return (
    <div className="dropdown-menu">
      <p>Days Passed: {daysPassed}</p>
      <p>Re-start</p>
      <p>Add Shortcut</p>
      <Link href="/">Logout</Link>
    </div>
  );
}
