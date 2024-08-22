import { useForm } from "react-hook-form";
import Link from "next/link";
import Button from "../button/Button";
import "./LoginForm.css";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Later, conect to Firebase backend
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
          {...register("usernam", {
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
          {...register("password", {
            required: "All fields must be completed.",
          })}
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}

        <Button text="Login" className="button-center-bottom" />
      </form>
      <Link href="/clean">
        <Button text="Login" className="button-center-bottom" />
      </Link>
    </div>
  );
}
