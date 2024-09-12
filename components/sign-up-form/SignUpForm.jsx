// import { useForm, Controller } from "react-hook-form";
// import { useState } from "react";
// import { auth, db } from "../../lib/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import Button from "../button/Button";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "./SignUpForm.css";

// export default function SignUpForm() {
//   const {
//     control,
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);
//       const { username, password, startDate } = data;

//       // Validate password length
//       if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//         return;
//       }

//       // Create the user in Firebase Authentication
//       const email = `${username.toLowerCase()}@example.com`; // Use username to create email format
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // Save user data to Firestore
//       const userDoc = doc(db, "users", username.toLowerCase());
//       await setDoc(userDoc, {
//         username,
//         startDate: startDate.toISOString(),
//         uid: user.uid,
//       });

//       alert("Signup successful! User created.");
//     } catch (error) {
//       console.error("Error signing up:", error);
//       alert("Signup failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="sign-up-form-shape">
//       <form className="sign-up-form-signup" onSubmit={handleSubmit(onSubmit)}>
//         <label className="sign-up-label-form" htmlFor="username">
//           User Name:
//         </label>
//         <input
//           className="input-field"
//           type="text"
//           id="username"
//           placeholder="User name"
//           {...register("username", {
//             required: "All fields must be completed.",
//           })}
//         />
//         {errors.username && (
//           <p className="error-message">{errors.username.message}</p>
//         )}

//         <label className="sign-up-label-form" htmlFor="password">
//           Password:
//         </label>
//         <input
//           className="input-field"
//           type="password"
//           id="password"
//           placeholder="Password"
//           {...register("password", {
//             required: "All fields must be completed.",
//           })}
//         />
//         {errors.password && (
//           <p className="error-message">{errors.password.message}</p>
//         )}

//         <label className="sign-up-label-form" htmlFor="startdate">
//           Start Date:
//         </label>
//         <Controller
//           control={control}
//           name="startDate"
//           rules={{ required: "All fields must be completed." }}
//           render={({ field }) => (
//             <DatePicker
//               placeholderText="Select start date"
//               onChange={(date) => field.onChange(date)}
//               selected={field.value}
//               dateFormat="dd/MM/yyyy"
//               className="datepicker-input"
//             />
//           )}
//         />
//         {errors.startDate && (
//           <p className="error-message">{errors.startDate.message}</p>
//         )}

//         <Button
//           text={loading ? "Signing Up..." : "Sign Up"}
//           className="button-center-bottom"
//         />
//       </form>
//     </div>
//   );
// }

import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { auth, db } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
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
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const { username, password, startDate } = data;

      // Validate password length
      if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
      }

      // Create the user in Firebase Authentication
      const email = `${username.toLowerCase()}@example.com`; // Use username to create email format
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save user data to Firestore
      const userDoc = doc(db, "users", username.toLowerCase());
      await setDoc(userDoc, {
        username,
        startDate: startDate.toISOString(),
        uid: user.uid,
      });

      alert("Signup successful! User created.");
      onSuccess(); // Trigger the success callback
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
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
          placeholder="User name"
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
          placeholder="Password"
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
              placeholderText="dd/MM/yyyy"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              dateFormat="dd/MM/yyyy"
              className="input-field"
              onFocus={(e) => e.target.blur()} // prevent the keyboard (on mobil)
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
