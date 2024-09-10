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
//         // Normalize to lowercase
//         const username = firebaseUser.email.split("@")[0].toLowerCase();
//         console.log("Attempting to fetch user data for:", username);

//         // Adjust this line if the document ID is case-sensitive
//         const userDoc = doc(db, "users", username);

//         try {
//           const userSnapshot = await getDoc(userDoc);

//           if (userSnapshot.exists()) {
//             console.log("Document snapshot:", userSnapshot.data()); // Log the full document snapshot
//             const userData = {
//               username,
//               uid: firebaseUser.uid,
//               ...userSnapshot.data(),
//             };
//             setUser(userData);
//           } else {
//             console.log("No user data found in Firestore.");
//             setUser(null);
//           }
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//           setUser(null);
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

///////

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
//         const username = firebaseUser.email.split("@")[0].toLowerCase();
//         const userDoc = doc(db, "users", username);
//         const userSnapshot = await getDoc(userDoc);

//         if (userSnapshot.exists()) {
//           const userData = {
//             username,
//             uid: firebaseUser.uid,
//             ...userSnapshot.data(),
//           };
//           setUser(userData);
//         } else {
//           setUser(null);
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

///
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
        const normalizedUsername = firebaseUser.email
          .split("@")[0]
          .toLowerCase(); // Normalize username
        const userDoc = doc(db, "users", normalizedUsername); // Use normalized username
        const userSnapshot = await getDoc(userDoc);

        if (userSnapshot.exists()) {
          const userData = {
            username: normalizedUsername, // Ensure username is in lowercase
            uid: firebaseUser.uid,
            ...userSnapshot.data(),
          };
          setUser(userData);
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
