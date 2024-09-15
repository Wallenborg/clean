import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./LoginForm.css";
import Button from "../button/Button";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(""); // Initialize state for error message

  const onSubmit = async (data) => {
    try {
      const normalizedUsername = data.username.toLowerCase();
      const email = `${normalizedUsername}@example.com`;

      await signInWithEmailAndPassword(auth, email, data.password);

      router.push("/clean");
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("Login failed. Check username and password.");
    }
  };

  // Wrap handleSubmit to check for validation errors
  const handleError = (errors) => {
    if (errors.username || errors.password) {
      setErrorMessage("All fields must be completed.");
    }
  };

  return (
    <div className="form-shape">
      <form
        className="form-login"
        onSubmit={handleSubmit(onSubmit, handleError)}
      >
        <label className="label-form" htmlFor="username">
          User Name:
        </label>
        <input
          className="input-field"
          type="text"
          id="username"
          placeholder="Username"
          {...register("username", { required: true })}
        />

        <label className="label-form" htmlFor="password">
          Password:
        </label>
        <input
          className="input-field"
          type="password"
          id="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />

        {/* Display the central error message */}
        {errorMessage && <p className="error-message-login">{errorMessage}</p>}

        <Button type="submit" text="Log In" className="button-center-bottom" />
      </form>
    </div>
  );
}
