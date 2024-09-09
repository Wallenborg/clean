// "use client";
// import Button from "../button/Button";
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import { RiUser3Line } from "react-icons/ri";
// import "./ProfileContainer.css";
// import { useStartDate } from "@/context/StartDateContext";

// export default function ProfileContainer({ onClose }) {
//   const startDate = useStartDate();

//   return (
//     <section className="profile-container">
//       <IoMdCloseCircleOutline className="profile-close" onClick={onClose} />
//       <RiUser3Line className="user-icon" />
//       <p className="profile-text big">username</p>
//       <p className="profile-text">Clean Since</p>
//       <p className="profile-text big">{startDate}</p>
//       <Button text="Re-start" className="button-left-bottom" />
//     </section>
//   );
// }

// ProfileContainer.jsx
"use client";
import Button from "../button/Button";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import { useStartDate } from "@/context/StartDateContext";
import { useUser } from "@/context/UserContext"; // Import the useUser hook
import "./ProfileContainer.css";

export default function ProfileContainer({ onClose }) {
  const startDate = useStartDate();
  const user = useUser(); // Get the user object

  const formattedStartDate = startDate
    ? new Date(startDate).toLocaleDateString("en-GB") // Format start date
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
