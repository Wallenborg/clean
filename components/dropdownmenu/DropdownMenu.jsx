// import Link from "next/link";
// import "./Dropdown.css";
// import Button from "../button/Button";

// export default function DropdownMenu({ startDate }) {
//   const daysPassed = useGetTimeSpan(startDate);
//   const weeksPassed = Math.floor(daysPassed / 7);

//   return (
//     <div className="dropdown-menu">
//       <p className="dropdown-text">Days Clean: {daysPassed}</p>
//       <p className="dropdown-text">Weeks Clean: {weeksPassed}</p>
//       <Button text="Profile" />
//       <Link className="dropdown-link" href="/">
//         <Button text="Logout" />
//       </Link>
//     </div>
//   );
// }

import { useState } from "react";
import Button from "../button/Button";
import "./Dropdown.css";
import Link from "next/link";
import ProfileContainer from "@/components/profile-container/ProfileContainer";
import useGetTimeSpan from "@/hooks/useGetTimeSpan";

export default function DropdownMenu({ startDate }) {
  const [showProfile, setShowProfile] = useState(false); // State to control visibility
  const daysPassed = useGetTimeSpan(startDate);
  const weeksPassed = Math.floor(daysPassed / 7);

  const toggleProfile = () => {
    setShowProfile((prevShowProfile) => !prevShowProfile); // Toggle visibility
  };

  return (
    <>
      <div className="dropdown-menu">
        <p className="dropdown-text">Days Clean: {daysPassed}</p>
        <p className="dropdown-text">Weeks Clean: {weeksPassed}</p>
        <Button text="Profile" onClick={toggleProfile} />
        {/* Toggle ProfileContainer */}
        <Link className="dropdown-link" href="/">
          <Button text="Logout" />
        </Link>
      </div>
      {showProfile && <ProfileContainer onClose={toggleProfile} />}
      {/* Conditionally render ProfileContainer */}
    </>
  );
}
