"use client";
import Button from "../button/Button";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import { useUser } from "@/context/UserContext"; // Import the useUser hook
import "./ProfileContainer.css";

export default function ProfileContainer({ onClose }) {
  const user = useUser(); // Get the user object

  // Convert startDate to a Date object if it exists
  const formattedStartDate =
    user && user.startDate
      ? new Date(user.startDate).toLocaleDateString("en-GB") // Format start date
      : "N/A";

  return (
    <section className="profile-container">
      <IoMdCloseCircleOutline className="profile-close" onClick={onClose} />
      <RiUser3Line className="user-icon" />
      <p className="profile-text big">
        {user ? user.username : "Loading..."}
      </p>{" "}
      {/* Display username */}
      <p className="profile-text">Clean Since</p>
      <p className="profile-text big">{formattedStartDate}</p>{" "}
      {/* Display formatted start date */}
      <Button text="Re-start" className="button-left-bottom" />
    </section>
  );
}
