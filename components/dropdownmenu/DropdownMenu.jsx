import React from "react";
import useGetTimeSpan from "@/hooks/useGetTimeSpan";
import Link from "next/link";
import "./DropdownMenu.css";

const DropdownMenu = ({ startDate }) => {
  const daysPassed = useGetTimeSpan(startDate);

  return (
    <div className="dropdown-menu">
      <p>Days Passed: {daysPassed}</p>
      <p>Restart</p>
      <p>Add Shortcut</p>
      <Link href="/">Logout</Link>
    </div>
  );
};

export default DropdownMenu;
