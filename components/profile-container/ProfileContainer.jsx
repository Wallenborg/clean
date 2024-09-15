// "use client";
// import { useState } from "react";
// import Button from "../button/Button";
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import { RiUser3Line } from "react-icons/ri";
// import { useUser } from "@/context/UserContext";
// import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
// import { db } from "../../lib/firebase";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import {
//   getAuth,
//   deleteUser,
//   reauthenticateWithCredential,
//   EmailAuthProvider,
// } from "firebase/auth";
// import "./ProfileContainer.css";

// export default function ProfileContainer({ onClose }) {
//   const { user, setUser } = useUser(); // Include setUser to update user state
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [newStartDate, setNewStartDate] = useState(null);
//   const [confirmDelete, setConfirmDelete] = useState(false); // Toggle delete confirmation
//   const [password, setPassword] = useState(""); // Store user password input

//   const formattedStartDate =
//     user && user.startDate
//       ? new Date(user.startDate).toLocaleDateString("en-GB")
//       : "N/A";

//   const handleDateChange = (date) => {
//     setNewStartDate(date);
//   };

//   const handleUpdateStartDate = async () => {
//     if (!user || !newStartDate) {
//       console.error("User not found or no new start date selected");
//       return;
//     }

//     try {
//       const normalizedUsername = user.username.toLowerCase();
//       const userDocRef = doc(db, "users", normalizedUsername);
//       await updateDoc(userDocRef, {
//         startDate: newStartDate.toISOString(),
//       });

//       console.log("Start date updated successfully");
//       setShowDatePicker(false);

//       const updatedUserDoc = await getDoc(userDocRef);
//       if (updatedUserDoc.exists()) {
//         const updatedUserData = { ...user, ...updatedUserDoc.data() };
//         setUser(updatedUserData);
//       }
//     } catch (error) {
//       console.error("Error updating start date:", error);
//     }
//   };

//   const handleDeleteUser = async () => {
//     if (!user || !password) {
//       alert("Please enter your password to proceed.");
//       return;
//     }

//     try {
//       const auth = getAuth();
//       const currentUser = auth.currentUser;

//       const credential = EmailAuthProvider.credential(
//         currentUser.email,
//         password
//       );

//       // Reauthenticate the user
//       await reauthenticateWithCredential(currentUser, credential);
//       console.log("User reauthenticated successfully");

//       // Step 1: Delete user data from Firestore
//       const normalizedUsername = user.username.toLowerCase();
//       const userDocRef = doc(db, "users", normalizedUsername);
//       await deleteDoc(userDocRef);
//       console.log("User data deleted successfully from Firestore");

//       // Step 2: Delete user from Firebase Authentication
//       await deleteUser(currentUser);
//       console.log("User deleted successfully from Firebase Authentication");

//       setUser(null);
//       onClose(); // Close the profile view
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       alert("Error deleting user. Please try again.");
//     }
//   };

//   return (
//     <section className="profile-container">
//       <IoMdCloseCircleOutline className="profile-close" onClick={onClose} />
//       <RiUser3Line className="user-icon" />
//       <p className="profile-text big">{user ? user.username : "Loading..."}</p>
//       <p className="profile-text">Clean Since</p>
//       <p className="profile-text big">{formattedStartDate}</p>

//       {showDatePicker && (
//         <div className="date-picker-container">
//           <div>
//             <p className="restart-text">
//               No worries, it&apos;s happened to the best.
//             </p>
//             <p className="restart-text">Today is a new day.</p>
//             <p className="restart-text extra-margin">
//               Choose a new date and then press confirm
//             </p>
//           </div>
//           <DatePicker
//             selected={newStartDate}
//             onChange={handleDateChange}
//             dateFormat="dd/MM/yyyy"
//             placeholderText="dd/MM/yyyy"
//             className="input-field"
//             onFocus={(e) => e.target.blur()} // prevent the keyboard (on mobil)
//           />
//         </div>
//       )}

//       {/* Update start date button */}
//       <Button
//         text={showDatePicker ? "Confirm" : "Re-start"}
//         className="button-left-bottom"
//         onClick={() => {
//           if (showDatePicker) {
//             handleUpdateStartDate();
//           } else {
//             setShowDatePicker(true);
//           }
//         }}
//       />

//       {/* Delete user button */}
//       <Button
//         text={confirmDelete ? "Confirm" : "Delete"}
//         className="button-right-bottom"
//         onClick={() => {
//           if (confirmDelete) {
//             handleDeleteUser(); // Confirm delete action
//           } else {
//             setConfirmDelete(true); // Show password input for confirmation
//           }
//         }}
//       />

//       {/* Password input for confirmation (only show if delete is clicked) */}
//       {confirmDelete && (
//         <div className="password-confirmation">
//           <p className="delete-user-text">
//             Enter your password and press confirm to delete profile.
//           </p>
//           <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="input-field-password input-field"
//           />
//         </div>
//       )}
//     </section>
//   );
// }
"use client";
import { useState } from "react";
import Button from "../button/Button";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import { useUser } from "@/context/UserContext";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getAuth,
  deleteUser,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import "./ProfileContainer.css";

export default function ProfileContainer({ onClose }) {
  const { user, setUser } = useUser();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [newStartDate, setNewStartDate] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  const formattedStartDate =
    user && user.startDate
      ? new Date(user.startDate).toLocaleDateString("en-GB")
      : "N/A";

  const handleDateChange = (date) => {
    setNewStartDate(date);
  };

  // Centralized error handling for validation
  const handleError = (message) => {
    setErrorMessage(message);
  };

  const handleUpdateStartDate = async () => {
    if (!user || !newStartDate) {
      handleError("User not found or no new start date selected");
      return;
    }

    try {
      const normalizedUsername = user.username.toLowerCase();
      const userDocRef = doc(db, "users", normalizedUsername);
      await updateDoc(userDocRef, {
        startDate: newStartDate.toISOString(),
      });

      console.log("Start date updated successfully");
      setShowDatePicker(false);

      const updatedUserDoc = await getDoc(userDocRef);
      if (updatedUserDoc.exists()) {
        const updatedUserData = { ...user, ...updatedUserDoc.data() };
        setUser(updatedUserData);
      }
    } catch (error) {
      handleError("Error updating start date");
      console.error("Error updating start date:", error);
    }
  };

  const handleDeleteUser = async () => {
    if (!user || !password) {
      handleError("Please enter your password to proceed.");
      return;
    }

    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;

      const credential = EmailAuthProvider.credential(
        currentUser.email,
        password
      );

      // Reauthenticate the user
      await reauthenticateWithCredential(currentUser, credential);
      console.log("User reauthenticated successfully");

      // Step 1: Delete user data from Firestore
      const normalizedUsername = user.username.toLowerCase();
      const userDocRef = doc(db, "users", normalizedUsername);
      await deleteDoc(userDocRef);
      console.log("User data deleted successfully from Firestore");

      // Step 2: Delete user from Firebase Authentication
      await deleteUser(currentUser);
      console.log("User deleted successfully from Firebase Authentication");

      setUser(null);
      onClose();
    } catch (error) {
      handleError("Error deleting user. Please try again.");
      console.error("Error deleting user:", error);
    }
  };

  return (
    <section className="profile-container">
      <IoMdCloseCircleOutline className="profile-close" onClick={onClose} />
      <RiUser3Line className="user-icon" />
      <p className="profile-text big">{user ? user.username : "Loading..."}</p>
      <p className="profile-text">Clean Since</p>
      <p className="profile-text big">{formattedStartDate}</p>

      {/* Error message */}
      {errorMessage && <p className="error-message-profile">{errorMessage}</p>}

      {showDatePicker && (
        <div className="date-picker-container">
          <div>
            <p className="restart-text">
              No worries, it&apos;s happened to the best.
            </p>
            <p className="restart-text">Today is a new day.</p>
            <p className="restart-text extra-margin">
              Choose a new date and then press confirm
            </p>
          </div>
          <DatePicker
            selected={newStartDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/MM/yyyy"
            className="input-field"
            onFocus={(e) => e.target.blur()}
          />
        </div>
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

      <Button
        text={confirmDelete ? "Confirm" : "Delete"}
        className="button-right-bottom"
        onClick={() => {
          if (confirmDelete) {
            handleDeleteUser();
          } else {
            setConfirmDelete(true);
          }
        }}
      />

      {confirmDelete && (
        <div className="password-confirmation">
          <p className="delete-user-text">
            Enter your password and press confirm to delete profile.
          </p>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field-password input-field"
          />
        </div>
      )}
    </section>
  );
}
