import { useForm, Controller } from "react-hook-form";

import Button from "../button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SignUpForm.css";

export default function SignUpForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Later, connect to Firebase backend
  };

  return (
    <div className="sign-up-form-shape">
      <form className="sign-up-form-signup" onSubmit={handleSubmit(onSubmit)}>
        <label className="sign-up-label-form" htmlFor="username">
          User Name:
        </label>
        <input
          className="input-field"
          type="text"
          id="username"
          {...register("username", {
            required: "All fields must be completed.",
          })}
        />
        {errors.username && (
          <p className="error-message">{errors.username.message}</p>
        )}

        <label className="sign-up-label-form" htmlFor="password">
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

        <label className="sign-up-label-form" htmlFor="startdate">
          Start Date:
        </label>
        <Controller
          control={control}
          name="startDate"
          rules={{ required: "All fields must be completed." }}
          render={({ field }) => (
            <DatePicker
              placeholderText="Select start date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              dateFormat="dd/MM/yyyy"
              className="datepicker-input"
            />
          )}
        />
        {errors.startDate && (
          <p className="error-message">{errors.startDate.message}</p>
        )}

        <Button text="Sign Up" className="button-center-bottom" />
      </form>
    </div>
  );
}
