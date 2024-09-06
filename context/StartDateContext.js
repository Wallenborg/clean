"use client";
import { createContext, useContext, useState } from "react";

const StartDateContext = createContext();

export const StartDateProvider = ({ children }) => {
  const [startDate] = useState("2023-07-15"); // Default start date "hard code" will be fetch from login user in database firebase

  return (
    <StartDateContext.Provider value={startDate}>
      {children}
    </StartDateContext.Provider>
  );
};

export const useStartDate = () => useContext(StartDateContext);
