import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react"; // Import useState here
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
      setErrorMessage("Login failed. Please check your username and password.");
    }
  };

  return (
    <div className="form-shape">
      <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
        <label className="label-form" htmlFor="username">
          User Name:
        </label>
        <input
          className="input-field"
          type="text"
          id="username"
          placeholder="Username"
          {...register("username", {
            required: "All fields must be completed.",
          })}
        />
        {errors.username && (
          <p className="error-message">{errors.username.message}</p>
        )}

        <label className="label-form" htmlFor="password">
          Password:
        </label>
        <input
          className="input-field"
          type="password"
          id="password"
          placeholder="Password"
          {...register("password", {
            required: "All fields must be completed.",
          })}
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <Button type="submit" text="Log In" className="button-center-bottom" />
      </form>
    </div>
  );
}
