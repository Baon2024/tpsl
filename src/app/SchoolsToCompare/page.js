'use client'
//import { useContext } from "react"
import { useSchoolCompare } from "../schoolCompareContext";


export default function SchoolsToCompare() {

    const { schoolsToCompare } = useSchoolCompare();
    console.log("schoolsToCompare is:", schoolsToCompare);

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
        </>
    )
}