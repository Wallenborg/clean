"use client";
import { useState } from "react";
import Button from "../button/Button";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import { useUser } from "@/context/UserContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ProfileContainer.css";

export default function ProfileContainer({ onClose }) {
  const { user, setUser } = useUser(); // Include setUser to update user state
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [newStartDate, setNewStartDate] = useState(null);

  const formattedStartDate =
    user && user.startDate
      ? new Date(user.startDate).toLocaleDateString("en-GB")
      : "N/A";

  const handleDateChange = (date) => {
    setNewStartDate(date);
  };

  const handleUpdateStartDate = async () => {
    if (!user || !newStartDate) {
      console.error("User not found or no new start date selected");
      return;
    }

    try {
      const normalizedUsername = user.username.toLowerCase(); // Ensure username is in lowercase
      const userDocRef = doc(db, "users", normalizedUsername); // Use normalized username
      await updateDoc(userDocRef, {
        startDate: newStartDate.toISOString(),
      });

      console.log("Start date updated successfully");
      setShowDatePicker(false);

      // Fetch the updated user data and refresh the context
      const updatedUserDoc = await getDoc(userDocRef);
      if (updatedUserDoc.exists()) {
        const updatedUserData = { ...user, ...updatedUserDoc.data() };
        setUser(updatedUserData); // Update user context with the new data
      }
    } catch (error) {
      console.error("Error updating start date:", error);
    }
  };

  return (
    <section className="profile-container">
      <IoMdCloseCircleOutline className="profile-close" onClick={onClose} />
      <RiUser3Line className="user-icon" />
      <p className="profile-text big">{user ? user.username : "Loading..."}</p>
      <p className="profile-text">Clean Since</p>
      <p className="profile-text big">{formattedStartDate}</p>
      {showDatePicker && (
        <DatePicker
          selected={newStartDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select new start date"
          className="datepicker-input"
        />
      )}
      <Button
        text={showDatePicker ? "Confirm" : "Re-start"}
        className="button-left-bottom"
        onClick={() => {
          if (showDatePicker) {
            handleUpdateStartDate();
          } else {
            setShowDatePicker(true);
          }
        }}
      />
    </section>
  );
}
