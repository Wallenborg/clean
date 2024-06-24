import React from "react";
import useGetTimeSpan from "@/hooks/useGetTimeSpan";
import Link from "next/link";
import "./Dropdown.css";

export default function DropdownMenu({ startDate }) {
  const daysPassed = useGetTimeSpan(startDate);
  const weeksPassed = Math.floor(daysPassed / 7);
  // const hoursPassed = daysPassed * 24; this need new logic to work, maybe rewrite useGetTimeSpan check later

  return (
    <div className="dropdown-menu">
      <p className="dropdown-text">Days Clean: {daysPassed}</p>
      <p className="dropdown-text">Weeks Clean: {weeksPassed}</p>
      {/* <p className="dropdown-text">Hours Clean: {hoursPassed}</p> */}
      <p className="dropdown-text">Re-start</p>
      <Link className="dropdown-link" href="/">
        <p className="dropdown-text">Logout</p>
      </Link>
    </div>
  );
}
