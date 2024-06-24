"use client";
import { createContext, useContext, useState } from "react";

const StartDateContext = createContext();

export const StartDateProvider = ({ children }) => {
  const [startDate] = useState("2024-01-23"); // Default start date "hard code" will be fetch from user in database later

  return (
    <StartDateContext.Provider value={startDate}>
      {children}
    </StartDateContext.Provider>
  );
};

export const useStartDate = () => useContext(StartDateContext);
