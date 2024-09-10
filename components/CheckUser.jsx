"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default function CheckUser() {
  const user = useUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      console.log("User UID:", user.uid); // Loggar användarens UID

      const fetchUserData = async () => {
        try {
          const userDocRef = firebase
            .firestore()
            .collection("users")
            .doc(user.username);
          const doc = await userDocRef.get();

          if (doc.exists) {
            console.log("Användardata:", doc.data());
            setUserData(doc.data());
          } else {
            console.log("Inget dokument hittades!");
          }
        } catch (error) {
          console.error("Fel vid hämtning av användardata:", error);
        }
      };

      fetchUserData();
    } else {
      console.log("Ingen användare är inloggad.");
    }
  }, [user]);

  return (
    <div>
      {userData ? (
        <div>
          <h1>Användardata:</h1>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      ) : (
        <p>Laddar användardata...</p>
      )}
    </div>
  );
}
