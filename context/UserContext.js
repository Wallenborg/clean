// "use client";
// import { createContext, useContext, useEffect, useState } from "react";
// import { auth, db } from "../lib/firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (firebaseUser) {
//         // Fetch additional user data
//         const username = firebaseUser.email.split("@")[0];
//         const userDoc = doc(db, "users", username);
//         const userSnapshot = await getDoc(userDoc);

//         if (userSnapshot.exists()) {
//           setUser({
//             username,
//             uid: firebaseUser.uid,
//             ...userSnapshot.data(),
//           });
//         }
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
// };

// export const useUser = () => useContext(UserContext);

// Test tisdag

"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Fetch additional user data
        const username = firebaseUser.email.split("@")[0];
        const userDoc = doc(db, "users", username);
        const userSnapshot = await getDoc(userDoc);

        if (userSnapshot.exists()) {
          setUser({
            username,
            uid: firebaseUser.uid,
            ...userSnapshot.data(), // Include startDate from Firestore
          });
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
