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
