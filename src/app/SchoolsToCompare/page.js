'use client'
//import { useContext } from "react"
import { useSchoolCompare } from "../schoolCompareContext";
import { Button } from "@/components/ui/button";
import { createClient } from "@supabase/supabase-js";


export default function SchoolsToCompare() {

    const { schoolsToCompare, setSchoolsToCompare } = useSchoolCompare();
    console.log("schoolsToCompare is:", schoolsToCompare);

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    function clearSchoolsHandler() {
      setSchoolsToCompare([]);
    }

    async function saveSchoolHandler(selectedSchool) {
      const userData = localStorage.getItem('userTPSL');
      if (userData) {
        //add school to user's school array, with their uid.
        const user = JSON.parse(userData); // Parse the stored user data
        const userId = user.id;
        console.log("userId in save school function is:", userId);
        console.log("selected school to save is:", selectedSchool);
  
        if (!userId || !selectedSchool) {
          console.error("User ID or selected school is missing.");
          return;
        }
  
        const { data: profile, error: fetchError } = await supabase
        .from('profiles')
        .select('schools')
        .eq('id', userId)
        .maybeSingle();
  
        console.log("Fetched profile data:", profile);
  
    if (fetchError) {
      console.error("Error fetching schools:", fetchError);
      return;
    }
  
    
    // 🟢 Step 2: Ensure 'schools' is an array (if NULL, make it an empty array)
    const currentSchools = profile.schools ?? []; // Use nullish coalescing to avoid `null`
  
    console.log("Current schools before update:", currentSchools);
  
    const schoolAlreadySaved = currentSchools.some(school => school.documentId === selectedSchool.documentId)
    console.log("schoolAlreadySaved is:", schoolAlreadySaved);
    if (schoolAlreadySaved) {
      alert("school already saved");
      return 
    }
  
    const updatedSchools = [...currentSchools, selectedSchool];
  
    console.log("Updated schools:", updatedSchools);
  
        
        const { data, error } = await supabase
        .from('profiles')
        .update({
          schools: updatedSchools })
        .eq("id", userId)
        .select()
          
      } else {
        alert("You need to be a member to use this feature!")
      }
    }

    return (
        <>
        <p>nothing to show yet</p>
        {schoolsToCompare.map((school, index) => (
        <div key={index}>
          <p>{school.schoolName}</p>
          <p>{school.schoolLocation}</p>
          <p>{school.totalSchoolFees}</p>
          <Button onClick={(e) => saveSchoolHandler(school)}>Save School</Button>
          {/* Render other properties as needed */}
        </div>
      ))}
      <button onClick={clearSchoolsHandler}>clear schools</button>
        </>
    )
}