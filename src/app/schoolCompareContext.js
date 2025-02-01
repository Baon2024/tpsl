"use client";

import { createContext, useContext, useState, useEffect } from "react";

const SchoolCompareContext = createContext();

export function SchoolCompareProvider({ children }) {
  const [schoolsToCompare, setSchoolsToCompare] = useState([]);

  useEffect(() => {
    console.log("SchoolCompareProvider mounted");
  }, []);
  

  return (
    <SchoolCompareContext.Provider value={{ schoolsToCompare, setSchoolsToCompare }}>
      {children}
    </SchoolCompareContext.Provider>
  );
}

export function useSchoolCompare() {
  return useContext(SchoolCompareContext);
}