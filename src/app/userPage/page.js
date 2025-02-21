'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";


export default function SubscribeToTPSL() {

    const router = useRouter();
    const [ mySchools, setMySchools ] = useState([]);
    const [ subscribed, setSubscribed ] = useState(null);

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
      console.log("user's subscribed is:", subscribed);
    },[setMySchools, mySchools, setSubscribed, subscribed]);

    async function handleManageSubscription() {

      const userProfile = JSON.parse(localStorage.getItem('userTPSLProfile'))
      const sessionId = userProfile.sessionId;
      console.log("sessionId in frontend is:", sessionId);

      const res = await fetch("/api/manageSubscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sessionId }),
      });
    
      
      const jsonedResponse = await res.json();
      console.log("data returned to frontend for manage subscription is:", jsonedResponse);

      const url = jsonedResponse.portalSession.url;
      console.log("url to be redirect to is:", url);
      window.location.href = url;

    }

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
      setSubscribed(userProfile.subscribed)
    },[]);

    return (
        <>
        <p>This is the userPage</p>
        <button onClick={handleLogOut}>log out</button>
        {subscribed && (
        <Button onClick={handleManageSubscription}>Manage my subscription</Button>
        )}
        <h1>My Saved Schools</h1>
        { mySchools && mySchools.map((school, index) => (
          <div key={index}>
            <p>{school.schoolName}</p>
          </div>
        ))}
        </>
    )
}