"use client";

import "./FormContainer.css";
import CircleFaceAnimation from "../circle-face-animation/CircleFaceAnimation";
import LoginForm from "../login-form/LoginForm";

export default function FormContainer() {
  return (
    <section className="form-container">
      <CircleFaceAnimation />
      <LoginForm />
    </section>
  );
}
