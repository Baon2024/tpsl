'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";


export default function SubscribeToTPSL() {

    const router = useRouter();
    const [ mySchools, setMySchools ] = useState([]);

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    function handleLogOut() {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('jwtTPSL');
          localStorage.removeItem('userTPSL');
          localStorage.removeItem('userTPSLProfile');
          //setUser(null); - might need to use this if you filter this down as a prop thrhough oayout
          router.push("/");
        }
      }
    useEffect(() => {
      console.log("the user's schools are:", mySchools);
    },[setMySchools, mySchools])

    /*useEffect(() => {

      async function getUserSchools() {
        const userData = localStorage.getItem('userTPSL');
      const user = JSON.parse(userData); // Parse the stored user data
      const userId = user.id;
      console.log("userId in save school function is:", userId);
      //console.log("selected school to save is:", selectedSchool);

      if (!userId) {
        console.error("User ID or selected school is missing.");
        return;
      }

      const { data: mySchools, error: fetchError } = await supabase
      .from('profiles')
      .select('schools')
      .eq('id', userId)
      .maybeSingle();

      console.log("Fetched user's schools data:", mySchools.schools);
      setMySchools(mySchools.schools);
    }

      getUserSchools();
    },[])*/

    useEffect(() => {
      const userProfile = JSON.parse(localStorage.getItem('userTPSLProfile'));
      console.log("Retrieved profile:", userProfile);
      console.log("and scholls would be:", userProfile.schools);
      setMySchools(userProfile.schools);
    },[])

    return (
        <>
        <p>This is the userPage</p>
        <button onClick={handleLogOut}>log out</button>
        <h1>My Saved Schools</h1>
        { mySchools && mySchools.map((school, index) => (
          <div key={index}>
            <p>{school.schoolName}</p>
          </div>
        ))}
        </>
    )
}