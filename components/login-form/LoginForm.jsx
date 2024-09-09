// import { useForm } from "react-hook-form";
// import Link from "next/link";
// import Button from "../button/Button";
// import "./LoginForm.css";

// export default function LoginForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//     // Later, conect to Firebase backend
//   };

//   return (
//     <div className="form-shape">
//       <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
//         <label className="label-form" htmlFor="username">
//           User Name:
//         </label>
//         <input
//           className="input-field"
//           type="text"
//           id="username"
//           {...register("usernam", {
//             required: "All fields must be completed.",
//           })}
//         />
//         {errors.username && (
//           <p className="error-message">{errors.username.message}</p>
//         )}

//         <label className="label-form" htmlFor="password">
//           Password:
//         </label>
//         <input
//           className="input-field"
//           type="password"
//           id="password"
//           {...register("password", {
//             required: "All fields must be completed.",
//           })}
//         />
//         {errors.password && (
//           <p className="error-message">{errors.password.message}</p>
//         )}

//         <Button text="Login" className="button-center-bottom" />
//       </form>
//       <Link href="/clean">
//         <Button text="Login" className="button-center-bottom" />
//       </Link>
//     </div>
//   );
// }

import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import "./LoginForm.css";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Convert the username to an email format
      const email = `${data.username}@example.com`;

      // Attempt to sign in with the converted email address and password
      await signInWithEmailAndPassword(auth, email, data.password);

      // On successful login, redirect to the protected page
      window.location.href = "/clean";
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

        <button type="submit" className="button-center-bottom">
          Log In
        </button>
      </form>
    </div>
  );
}
