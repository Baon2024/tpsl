"use client";

import { createContext, useContext, useState, useEffect } from "react";

const SchoolCompareContext = createContext();

export function SchoolCompareProvider({ children }) {
  const [schoolsToCompare, setSchoolsToCompare] = useState([]);
  const [ subscriptionModalBox, setSubscriptionModalBox ] = useState(false);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ clicks, setClicks ] = useState(0);

  useEffect(() => {
    console.log("SchoolCompareProvider mounted");
  }, []);
  

  return (
    <SchoolCompareContext.Provider value={{ clicks, setClicks, schoolsToCompare, setSchoolsToCompare, subscriptionModalBox, setSubscriptionModalBox, searchTerm, setSearchTerm }}>
      {children}
    </SchoolCompareContext.Provider>
  );
}

export function useSchoolCompare() {
  return useContext(SchoolCompareContext);
}

export function useSubscriptionModalBox() {
  return useContext(SchoolCompareContext);
}

export function useSearchTerm() {
  return useContext(SchoolCompareContext);
}

export function useClicks() {
  return useContext(SchoolCompareContext);
}