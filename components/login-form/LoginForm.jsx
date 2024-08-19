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
        <label className="label-form" htmlFor="fname">
          User Name:
        </label>
        <input
          type="text"
          id="fname"
          {...register("fname", { required: "User Name is required" })}
        />
        {errors.fname && (
          <p className="error-message">{errors.fname.message}</p>
        )}

        <label className="label-form" htmlFor="lname">
          Password:
        </label>
        <input
          type="password"
          id="lname"
          {...register("lname", { required: "Password is required" })}
        />
        {errors.lname && (
          <p className="error-message">{errors.lname.message}</p>
        )}

        <Button text="Login" className="button-center-bottom" />
      </form>
      <Link href="/clean">
        <Button text="Login" className="button-center-bottom" />
      </Link>
    </div>
  );
}
