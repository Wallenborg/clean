import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import "./LoginForm.css";
import Button from "../button/Button";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter(); // Initialize useRouter

  const onSubmit = async (data) => {
    try {
      // Normalize the username to lowercase
      const normalizedUsername = data.username.toLowerCase();

      // Convert the normalized username to an email format
      const email = `${normalizedUsername}@example.com`;

      // Attempt to sign in with the converted email address and password
      await signInWithEmailAndPassword(auth, email, data.password);

      // On successful login, redirect to the protected page using router.push
      router.push("/clean");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please check your username and password.");
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
        {errors.username && alert(errors.username.message)}
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
        {errors.password && alert(errors.password.message)}
        <Button
          type="submit"
          text="Log In"
          className="button-center-bottom"
        ></Button>
      </form>
    </div>
  );
}
