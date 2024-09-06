"use client";
import Button from "../button/Button";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";
import "./ProfileContainer.css";
import { useStartDate } from "@/context/StartDateContext";

export default function ProfileContainer({ onClose }) {
  const startDate = useStartDate();

  return (
    <section className="profile-container">
      <IoMdCloseCircleOutline className="profile-close" onClick={onClose} />
      <RiUser3Line className="user-icon" />
      <p className="profile-text big">username</p>
      // need to get the user name from datebase in firebase
      <p className="profile-text">Clean Since</p>
      <p className="profile-text big">{startDate}</p>
      <Button text="Re-start" className="button-left-bottom" /> /* this need to
      be conected to database and be abel to change startdate conectet to user
      */
    </section>
  );
}
