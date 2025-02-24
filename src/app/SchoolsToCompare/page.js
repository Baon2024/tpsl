'use client'
//import { useContext } from "react"
import { useSchoolCompare } from "../schoolCompareContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createClient } from "@supabase/supabase-js";
//import { Mail, Phone, MapPin } from "lucide-react"
//import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
//import { Button } from "@/components/ui/button"
//import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Mail, Phone, MapPin, Bookmark, BookmarkCheck, X, ChevronDown, ExternalLink } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useRouter } from "next/dist/client/components/navigation";

export default function SchoolsToCompare() {

    const { schoolsToCompare, setSchoolsToCompare } = useSchoolCompare();
    const [ localSavedSchools, setLocalSavedSchools ] = useState([]);
    const router = useRouter();
    console.log("schoolsToCompare is:", schoolsToCompare);

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    function clearSchoolsHandler() {
      setSchoolsToCompare([]);
      router.push('/');
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

        setLocalSavedSchools(updatedSchools);
        console.log("data returned from updating user's schools:", { data, error});
        console.log("localSavedSchools is:", localSavedSchools);
          
      } else {
        alert("You need to be a member to use this feature!")
      }
    }

    function clearSchoolHandler(school) {
      console.log("school inside of clearSchoolHandler is:", school);
      setSchoolsToCompare(schoolsToCompare.filter(sch => sch.documentId !== school.documentId));

    }

    return (
        <>
        {/*
        <p>nothing to show yet</p>
        {schoolsToCompare.map((school, index) => (
        <div key={index}>
          <p>{school.schoolName}</p>
          <p>{school.schoolLocation}</p>
          <p>{school.totalSchoolFees}</p>
          <Button onClick={(e) => saveSchoolHandler(school)}>Save School</Button>
          
        </div>
      ))}*/}
      <div className="space-y-4">
      <div className="flex justify-end">
        <Button variant="destructive" onClick={clearSchoolsHandler} className="flex items-center gap-2">
          <X className="h-4 w-4" />
          Clear All Schools
        </Button>
      </div>

      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="w-full">
          <table className="w-full">
            <thead>
              <tr>
                <th className="sticky left-0 bg-background px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                  School Details
                </th>
                {schoolsToCompare.map((school) => (
                  <th key={school.schoolName} className="px-6 py-3 text-left">
                    <div className="space-y-1">
                      <div className="text-lg font-semibold">{school.schoolName}</div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {school.schoolLocation}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Established</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    {school.established}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Type</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    {school.coeducation}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Stages</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    {school.stages.join(", ")}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">School Type</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    {school.schoolType.join(", ")}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Students</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    {school.studentNumbers}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Fees (per year)</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    £{school.totalSchoolFees[0].toLocaleString()} - £{school.totalSchoolFees[1].toLocaleString()}
                  </td>
                ))}
              </tr>
              <tr>
              <td className="sticky left-0 bg-background px-6 py-4 font-medium">Scholarships</td>
              {schoolsToCompare.map((school) => (
                <td key={school.schoolName} className="px-6 py-4">
                  {school.scholarships.available ? (
                    <span>
                      Available
                      {school.scholarships.percentageOfFees !== 0 && (
                        <span className="text-muted-foreground"> (up to {school.scholarships.percentageOfFees}%)</span>
                      )}
                    </span>
                  ) : (
                    "Not available"
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="sticky left-0 bg-background px-6 py-4 font-medium">Bursaries</td>
              {schoolsToCompare.map((school) => (
                <td key={school.schoolName} className="px-6 py-4">
                  {school.Bursaries.BursariesAvailable ? (
                    <span>
                      Available
                      {Array.isArray(school.Bursaries?.percentageOfFees) && (
                        <span className="text-muted-foreground">
                          {" "}
                          ({school.Bursaries?.percentageOfFees[0]}-{school.Bursaries?.percentageOfFees[1]}%)
                        </span>
                      )}
                    </span>
                  ) : (
                    "Not available"
                  )}
                </td>
              ))}
            </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Actions</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => saveSchoolHandler(school)}
                        className="flex items-center gap-2"
                      >
                         {localSavedSchools.includes(school.documentId) ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
                         {localSavedSchools.includes(school.documentId) ? "Saved" : "Save School"}
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => clearSchoolHandler(school)}
                        className="flex items-center gap-2"
                      >
                        <X className="h-4 w-4" />
                        Remove
                      </Button>
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 bg-background px-6 py-4 font-medium">Contact</td>
                {schoolsToCompare.map((school) => (
                  <td key={school.schoolName} className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button asChild variant="outline" size="sm">
                        <a href={`mailto:${school.schoolEmail}`}>
                          <Mail className="mr-2 h-4 w-4" />
                          Email
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a href={`tel:${school.schoolPhoneNumber}`}>
                          <Phone className="mr-2 h-4 w-4" />
                          Call
                        </a>
                      </Button>
                      <Button asChild variant="secondary" size="sm">
                        <a
                          href={school.enquireUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Enquire
                        </a>
                      </Button>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  
      </>
      )
}