import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { auth, db } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import Button from "../button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SignUpForm.css";

export default function SignUpForm({ onSuccess }) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState(""); // Initialize state for error message
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const { username, password, startDate } = data;

      // Validate password length
      if (password.length < 6) {
        setErrorMessage("Password must be at least 6 characters long.");
        return;
      }

      // Normalize the username
      const normalizedUsername = username.toLowerCase();

      // Check if the username already exists in Firestore and give error message if it does.
      const userDocRef = doc(db, "users", normalizedUsername);
      const userDocSnapshot = await getDoc(userDocRef);
      if (userDocSnapshot.exists()) {
        setErrorMessage(
          "Username already exists. Please choose a different username."
        );
        return;
      }

      // Create the user in Firebase Authentication
      const email = `${normalizedUsername}@example.com`; // Use username to create email format
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save user data to Firestore
      await setDoc(userDocRef, {
        username: normalizedUsername,
        startDate: startDate.toISOString(),
        uid: user.uid,
      });

      onSuccess(); // Trigger the success callback
    } catch (error) {
      console.error("Error signing up:", error);
      setErrorMessage("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Centralized error handling for validation
  const handleError = () => {
    setErrorMessage("All fields must be completed.");
  };

  return (
    <div className="sign-up-form-shape">
      <form
        className="sign-up-form-signup"
        onSubmit={handleSubmit(onSubmit, handleError)}
      >
        <label className="sign-up-label-form" htmlFor="username">
          User Name:
        </label>
        <input
          className="input-field"
          type="text"
          id="username"
          placeholder="User name"
          {...register("username", { required: true })}
        />

        <label className="sign-up-label-form" htmlFor="password">
          Password:
        </label>
        <input
          className="input-field"
          type="password"
          id="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />

        <label className="sign-up-label-form" htmlFor="startdate">
          Start Date:
        </label>
        <Controller
          control={control}
          name="startDate"
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              placeholderText="dd/MM/yyyy"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              dateFormat="dd/MM/yyyy"
              className="input-field"
              onFocus={(e) => e.target.blur()} // prevent the keyboard (on mobile)
            />
          )}
        />

        {/* Centralized error message display */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <Button text="Sign Up" className="button-center-bottom" />
      </form>
    </div>
  );
}
