import { useState } from "react";
import Button from "../button/Button";
import "./Dropdown.css";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import ProfileContainer from "@/components/profile-container/ProfileContainer";
import useGetTimeSpan from "@/hooks/useGetTimeSpan";
import { useUser } from "@/context/UserContext"; // Import useUser hook
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase"; // Adjust the import path as necessary

export default function DropdownMenu() {
  const [showProfile, setShowProfile] = useState(false); // State to control visibility
  const user = useUser(); // Get the user object from context
  const daysPassed = useGetTimeSpan(user?.startDate); // Use user startDate
  const weeksPassed = Math.floor(daysPassed / 7);
  const router = useRouter(); // Initialize useRouter

  const toggleProfile = () => {
    setShowProfile((prevShowProfile) => !prevShowProfile); // Toggle visibility
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect to the home page after successful logout
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <>
      <div className="dropdown-menu">
        <p className="dropdown-text">Days Clean: {daysPassed}</p>
        <p className="dropdown-text">Weeks Clean: {weeksPassed}</p>
        <Button text="Profile" onClick={toggleProfile} />
        <Button text="Logout" onClick={handleLogout} />{" "}
        {/* Use onClick for logout */}
      </div>
      {showProfile && <ProfileContainer onClose={toggleProfile} />}
      {/* Conditionally render ProfileContainer */}
    </>
  );
}
