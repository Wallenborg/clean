"use client";
import { createContext, useContext, useState } from "react";

const StartDateContext = createContext();

export const StartDateProvider = ({ children }) => {
  const [startDate] = useState("2023-07-15");

  return (
    <StartDateContext.Provider value={startDate}>
      {children}
    </StartDateContext.Provider>
  );
};

export const useStartDate = () => useContext(StartDateContext);
