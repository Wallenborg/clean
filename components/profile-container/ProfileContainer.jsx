"use client";
import Button from "../button/Button";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "./ProfileContainer.css";
import { useStartDate } from "@/context/StartDateContext";

export default function ProfileContainer({ onClose }) {
  const startDate = useStartDate();

  return (
    <section className="profile-container">
      <IoMdCloseCircleOutline className="profile-close" onClick={onClose} />
      <p className="profile-text big">username</p>
      <p className="profile-text">Been Clean Since</p>
      <p className="profile-text big">{startDate}</p>
      <Button text="Re-start" className="button-left-bottom" />
    </section>
  );
}
