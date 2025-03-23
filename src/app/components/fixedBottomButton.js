"use client"
import { useRouter, usePathname } from "next/navigation";
import { useSchoolCompare } from "../schoolCompareContext";

export const FixedBottomButton = () => {

    const router = useRouter();
    const pathname = usePathname(); // Get the current URL path
  
    const { schoolsToCompare } = useSchoolCompare();
  
    if (schoolsToCompare.length === 0 || pathname.includes('/SchoolsToCompare')) return null;
    //can't use schoolsToCompare in the parent above the SchoolCompareProvider, so have to do this instead
  
    function schoolsToCompareHandler() {
      router.push('/SchoolsToCompare');
    }
  
    return (
      
      <button
        
        onClick={schoolsToCompareHandler}
        style={{
          position: "fixed",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#007bff",
          color: "white",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          zIndex: 9999, // Ensures it's above all elements
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      ><p>
        compare schools</p><p>{schoolsToCompare.length}</p>
      </button>
      
    );
  };