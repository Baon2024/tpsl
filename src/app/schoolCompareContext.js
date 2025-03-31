"use client";

import { createContext, useContext, useState, useEffect } from "react";

const SchoolCompareContext = createContext();

export function SchoolCompareProvider({ children }) {
  const [schoolsToCompare, setSchoolsToCompare] = useState([]);
  const [ subscriptionModalBox, setSubscriptionModalBox ] = useState(false);

  useEffect(() => {
    console.log("SchoolCompareProvider mounted");
  }, []);
  

  return (
    <SchoolCompareContext.Provider value={{ schoolsToCompare, setSchoolsToCompare, subscriptionModalBox, setSubscriptionModalBox }}>
      {children}
    </SchoolCompareContext.Provider>
  );
}

export function useSchoolCompare() {
  return useContext(SchoolCompareContext);
}