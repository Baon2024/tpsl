'use client'
//import { useContext } from "react"
import { useSchoolCompare } from "../schoolCompareContext";


export default function SchoolsToCompare() {

    const { schoolsToCompare, setSchoolsToCompare } = useSchoolCompare();
    console.log("schoolsToCompare is:", schoolsToCompare);

    function clearSchoolsHandler() {
      setSchoolsToCompare([]);
    }

    return (
        <>
        <p>nothing to show yet</p>
        {schoolsToCompare.map((school, index) => (
        <div key={index}>
          <p>{school.schoolName}</p>
          <p>{school.schoolLocation}</p>
          <p>{school.totalSchoolFees}</p>
          {/* Render other properties as needed */}
        </div>
      ))}
      <button onClick={clearSchoolsHandler}>clear schools</button>
        </>
    )
}