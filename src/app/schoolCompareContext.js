"use client";

import { createContext, useContext, useState } from "react";

const SchoolCompareContext = createContext();

export function SchoolCompareProvider({ children }) {
  const [schoolsToCompare, setSchoolsToCompare] = useState([]);

  return (
    <SchoolCompareContext.Provider value={{ schoolsToCompare, setSchoolsToCompare }}>
      {children}
    </SchoolCompareContext.Provider>
  );
}

export function useSchoolCompare() {
  return useContext(SchoolCompareContext);
}