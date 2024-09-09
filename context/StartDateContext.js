// "use client";
// import { createContext, useContext, useState } from "react";

// const StartDateContext = createContext();

// export const StartDateProvider = ({ children }) => {
//   const [startDate] = useState("2023-07-15");

//   return (
//     <StartDateContext.Provider value={startDate}>
//       {children}
//     </StartDateContext.Provider>
//   );
// };

// export const useStartDate = () => useContext(StartDateContext);
//StartDateContext
"use client";
import { createContext, useContext } from "react";
import { useUser } from "./UserContext";

const StartDateContext = createContext();

export const StartDateProvider = ({ children }) => {
  const user = useUser();
  const startDate = user ? user.startDate : null;

  return (
    <StartDateContext.Provider value={startDate}>
      {children}
    </StartDateContext.Provider>
  );
};

export const useStartDate = () => useContext(StartDateContext);
