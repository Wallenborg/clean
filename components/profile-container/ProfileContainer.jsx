"use client";
import Button from "../button/Button";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiUser3Line } from "react-icons/ri";
import "./ProfileContainer.css";
import { useStartDate } from "@/context/StartDateContext";

export default function ProfileContainer({ onClose }) {
  const startDate = useStartDate();

  return (
    <section className="profile-container">
      <IoMdCloseCircleOutline className="profile-close" onClick={onClose} />
      {/* <CgProfile className="user-icon" /> */}
      <RiUser3Line className="user-icon" />
      <p className="profile-text big">username</p>
      <p className="profile-text">Clean Since</p>
      <p className="profile-text big">{startDate}</p>
      <Button text="Re-start" className="button-left-bottom" />
    </section>
  );
}
